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

package com.webank.runtime.core.protocol.http.producer;

import com.webank.defibus.client.impl.producer.RRCallback;
import com.webank.runtime.configuration.ProxyConfiguration;
import com.webank.runtime.core.consumergroup.ProducerGroupConf;
import com.webank.runtime.core.plugin.MQProducerWrapper;
import com.webank.runtime.util.ProxyUtil;
import org.apache.rocketmq.client.exception.MQBrokerException;
import org.apache.rocketmq.client.exception.MQClientException;
import org.apache.rocketmq.client.producer.SendCallback;
import org.apache.rocketmq.common.message.Message;
import org.apache.rocketmq.remoting.exception.RemotingException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.concurrent.atomic.AtomicBoolean;

public class ProxyProducer {

    protected AtomicBoolean started = new AtomicBoolean(Boolean.FALSE);

    protected AtomicBoolean inited = new AtomicBoolean(Boolean.FALSE);

    public Logger logger = LoggerFactory.getLogger(this.getClass());

    public AtomicBoolean getInited() {
        return inited;
    }

    public AtomicBoolean getStarted() {
        return started;
    }

    protected ProducerGroupConf producerGroupConfig;

    protected ProxyConfiguration proxyConfiguration;

    public void send(SendMessageContext sendMsgContext, SendCallback sendCallback) throws Exception {
        mqProducerWrapper.send(sendMsgContext.getMsg(), sendCallback);
    }

    public void request(SendMessageContext sendMsgContext, SendCallback sendCallback, RRCallback rrCallback, long timeout)
            throws InterruptedException, RemotingException, MQClientException, MQBrokerException {
        mqProducerWrapper.request(sendMsgContext.getMsg(), sendCallback, rrCallback, timeout);
    }

    public Message request(SendMessageContext sendMessageContext, long timeout) throws Exception {
        return mqProducerWrapper.request(sendMessageContext.getMsg(), timeout);
    }

    public boolean reply(final SendMessageContext sendMsgContext, final SendCallback sendCallback) throws Exception {
        mqProducerWrapper.reply(sendMsgContext.getMsg(), sendCallback);
        return true;
    }

    protected MQProducerWrapper mqProducerWrapper = new MQProducerWrapper();

    public MQProducerWrapper getMqProducerWrapper() {
        return mqProducerWrapper;
    }

    public synchronized void init(ProxyConfiguration proxyConfiguration, ProducerGroupConf producerGroupConfig) throws Exception {
        this.producerGroupConfig = producerGroupConfig;
        this.proxyConfiguration = proxyConfiguration;
        mqProducerWrapper.init(proxyConfiguration, producerGroupConfig.getGroupName());
        mqProducerWrapper.getDefaultMQProducer().setInstanceName(ProxyUtil.buildProxyClientID(producerGroupConfig.getGroupName(),
                proxyConfiguration.proxyRegion, proxyConfiguration.proxyCluster));
        inited.compareAndSet(false, true);
        logger.info("ProxyProducer [{}] inited.............", producerGroupConfig.getGroupName());
    }


    public synchronized void start() throws Exception {
        if (started.get()) {
            return;
        }

        mqProducerWrapper.start();
        started.compareAndSet(false, true);
        logger.info("ProxyProducer [{}] started.............", producerGroupConfig.getGroupName());
    }

    public synchronized void shutdown() throws Exception {
        if (!inited.get()) {
            return;
        }

        if (!started.get()) {
            return;
        }
        mqProducerWrapper.shutdown();
        inited.compareAndSet(true, false);
        started.compareAndSet(true, false);
        logger.info("ProxyProducer [{}] shutdown.............", producerGroupConfig.getGroupName());
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("proxyProducer={")
                .append("inited=").append(inited.get()).append(",")
                .append("started=").append(started.get()).append(",")
                .append("producerGroupConfig=").append(producerGroupConfig).append("}");
        return sb.toString();
    }
}
