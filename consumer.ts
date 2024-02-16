import { KafkaClient, Consumer } from "kafka-node";

const client = new KafkaClient({ kafkaHost: 'localhost:9092' });
const consumer = new Consumer(client, [{ topic: 'test-topic', partition: 0 }], {});

consumer.on('message', (message) => {
  console.log('Received message:', message.value);
});

consumer.on('error', (err) => {
  console.error('Error with Consumer:', err);
});