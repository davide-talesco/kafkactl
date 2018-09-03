# KAFKACTL

**KAFKACTL** is a cli tool to interact with **Kafka** brokers

At the moment the only available command is **consume** used to consume kafka messages

## INSTALLATION

You can install it as a global npm package by running: `npm i -g kafkactl`

# USAGE

## CONSUME 

You can invoke a remote method by pushing a local yaml file:

`kafkactl consume --topic testTopic`

## OPTIONS 

Below the accepted command line options:

Parameter Name | Type | Required |  Default | Description
-------- | -------- | ----------- | -------- | ------- |
`--kafkaBrokerList` | String | **false** | localhost:9092 | this is a comma separated string of brokers: 'kafka-host1:9092,kafka-host2:9092'

#### Environment Variables

All options are also configurable through environment variables:

Option Name | ENV Key Name | 
-------- | -------- |
kafkaBrokerList | `KAFKA_CLI_BROKER_LIST` | 

Environment variables options have precedence and will overwrite the value passed via command line

Please note at the moment this only works with json messages