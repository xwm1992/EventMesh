/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package connector.rocketmq.consumer;

import com.webank.api.consumer.MeshMQPushConsumer;
import com.webank.eventmesh.common.config.CommonConfiguration;
import io.openmessaging.*;
import io.openmessaging.consumer.MessageListener;
import io.openmessaging.consumer.PushConsumer;
import io.openmessaging.interceptor.ConsumerInterceptor;
import org.apache.rocketmq.client.consumer.listener.ConsumeConcurrentlyContext;
import org.apache.rocketmq.client.consumer.listener.MessageListenerConcurrently;
import org.apache.rocketmq.common.message.MessageExt;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

public class RocketMQConsumerImpl implements MeshMQPushConsumer {

    public Logger logger = LoggerFactory.getLogger(this.getClass());

    public Logger messageLogger = LoggerFactory.getLogger("message");

    public final String DEFAULT_ACCESS_DRIVER = "connector.rocketmq.MessagingAccessPointImpl";

    private PushConsumerImpl pushConsumer;

    @Override
    public synchronized void init(boolean isBroadcast, CommonConfiguration commonConfiguration,
                                  String consumerGroup) throws Exception {
        KeyValue properties = OMS.newKeyValue().put(OMSBuiltinKeys.DRIVER_IMPL, DEFAULT_ACCESS_DRIVER);
        properties.put("ACCESS_POINTS", commonConfiguration.namesrvAddr)
                .put("REGION", "namespace")
                .put(OMSBuiltinKeys.CONSUMER_ID, consumerGroup);
        MessagingAccessPoint messagingAccessPoint = OMS.getMessagingAccessPoint(commonConfiguration.namesrvAddr, properties);
        pushConsumer = (PushConsumerImpl)messagingAccessPoint.createPushConsumer();
    }

    @Override
    public void setInstanceName(String instanceName) {
        pushConsumer.getRocketmqPushConsumer().setInstanceName(instanceName);
    }

    @Override
    public void registerMessageListener(MessageListenerConcurrently listener) {
        pushConsumer.getRocketmqPushConsumer().setMessageListener(listener);
    }

    @Override
    public synchronized void start() throws Exception {
        pushConsumer.startup();
    }

    @Override
    public void subscribe(String topic) throws Exception {
        pushConsumer.attachQueue(topic, new MessageListener() {
            @Override
            public void onReceived(Message message, Context context) {
                context.ack();
            }
        });
    }

    @Override
    public void unsubscribe(String topic) throws Exception {
        pushConsumer.detachQueue(topic);
    }

    @Override
    public boolean isPause() {
        return pushConsumer.isSuspended();
    }

    @Override
    public void pause() {
        pushConsumer.suspend();
    }

    @Override
    public void startup() {
        pushConsumer.startup();
    }

    @Override
    public synchronized void shutdown() {
        pushConsumer.shutdown();
    }

    @Override
    public void updateOffset(List<MessageExt> msgs, ConsumeConcurrentlyContext context) {
        MessageListenerConcurrently pushConsumerMessageListener = (MessageListenerConcurrently) pushConsumer.getRocketmqPushConsumer().getMessageListener();
        pushConsumerMessageListener.consumeMessage(msgs, context);
    }

    @Override
    public KeyValue attributes() {
        return pushConsumer.attributes();
    }

    @Override
    public void resume() {
        pushConsumer.resume();
    }

    @Override
    public void suspend() {
        pushConsumer.suspend();
    }

    @Override
    public void suspend(long timeout) {
        pushConsumer.suspend(timeout);
    }

    @Override
    public boolean isSuspended() {
        return pushConsumer.isSuspended();
    }

    @Override
    public PushConsumer attachQueue(String queueName, MessageListener listener) {
        return pushConsumer.attachQueue(queueName, listener);
    }

    @Override
    public PushConsumer attachQueue(String queueName, MessageListener listener, KeyValue attributes) {
        return pushConsumer.attachQueue(queueName, listener, attributes);
    }

    @Override
    public PushConsumer detachQueue(String queueName) {
        return pushConsumer.detachQueue(queueName);
    }

    @Override
    public void addInterceptor(ConsumerInterceptor interceptor) {
        pushConsumer.addInterceptor(interceptor);
    }

    @Override
    public void removeInterceptor(ConsumerInterceptor interceptor) {
        pushConsumer.removeInterceptor(interceptor);
    }
}
