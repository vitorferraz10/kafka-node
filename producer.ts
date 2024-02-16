import { KafkaClient, Producer, ProduceRequest } from "kafka-node";
const kafkaHost = "localhost:9092";

const client = new KafkaClient({ kafkaHost });
const producer = new Producer(client);

producer.on("ready", () => {
  console.log("Producer is ready");

  const payloads: ProduceRequest[] = [
    { topic: "test-topic", messages: "First message test kafka" },
    { topic: "test-topic", messages: "Second message test kafka" },
  ];

  producer.send(payloads, (err, data) => {
    if (err) {
      console.error("Error sending message", err);
    } else {
      console.log(`Message sent: ${data}`);
    }
    process.exit();
  });
});

producer.on("error", (err) => {
  console.error("Error with Producer", err);
});
