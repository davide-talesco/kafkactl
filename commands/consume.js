const K = require("node-rdkafka");

exports.command = 'consume';

exports.describe = 'consume kafka topic';

exports.builder = {
  topic: {
    describe: 'the topic to subscribe to',
    required: true,
    alias: 't'
  },
  brokerList: {
    describe: 'the list of kafka brokers',
    alias: 'b'
  }
};

exports.handler = async function (argv) {

  const topic = argv.topic;
  const kafkaBrokerList = process.env.KAFKA_CLI_BROKER_LIST || argv.brokerList || 'localhost:9092';

  var consumer = new K.KafkaConsumer({
    'group.id': 'kafkactl',
    'metadata.broker.list': kafkaBrokerList,
  });

  await new Promise((resolve, reject) => {

    const kafkaOptions = {
      timeout: 5000
    };

    consumer.on("ready", () => {
      return resolve();
    });

    consumer.connect(kafkaOptions, function(err){
      if (err) return reject(err);
    });
  });

  consumer.subscribe([topic]);
  consumer.consume();

  consumer.on('data', function(data) {
    // Output the actual message contents
    console.log(JSON.stringify({
      topic: data.topic,
      offset: data.offset,
      partition: data.partition,
      timestamp: data.timestamp,
      value: JSON.parse(data.value.toString())
    }))
  });

};
