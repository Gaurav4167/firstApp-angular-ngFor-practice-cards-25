import { Idatabase } from "../models/dataBase_i";

export const databaseArr : Idatabase[]= [
  { concept: "SQL Basics", explain: "Query relational data using SELECT, JOIN, GROUP BY, and subqueries. Learn how to filter, sort, and combine tables to extract meaningful insights from structured data efficiently." },
  { concept: "MongoDB", explain: "Store flexible, JSON-like documents inside collections without a fixed schema. Ideal for fast-changing applications where nested data and horizontal scaling are important." },
  { concept: "Normalization", explain: "Organize tables into normal forms to reduce data redundancy and avoid update anomalies. Understand when to normalize for consistency and when to denormalize for read performance." },
  { concept: "Indexing", explain: "Speed up queries using B-tree, hash, and compound indexes. Learn how to read query plans and balance faster reads against slower writes and extra storage." },
  { concept: "Transactions", explain: "Ensure data integrity with ACID properties — atomicity, consistency, isolation, and durability. Handle commits, rollbacks, and isolation levels to keep critical operations like payments safe." },
  { concept: "Aggregation", explain: "Process and summarize large datasets using pipelines with stages like match, group, sort, and project. Generate reports, totals, and analytics directly inside the database." },
  { concept: "Redis", explain: "Use blazing-fast in-memory storage for caching, sessions, queues, and leaderboards. Learn data structures like strings, hashes, lists, and sets along with expiry policies." },
  { concept: "Replication", explain: "Maintain copies of data across multiple servers for high availability and fault tolerance. Understand primary-secondary setups, failover, and read scaling in production systems." },
  { concept: "Sharding", explain: "Distribute huge datasets across multiple machines using a shard key. Learn how to scale horizontally while avoiding hotspots and keeping queries efficient." },
  { concept: "Backup & Recovery", explain: "Protect data against accidental deletion, corruption, and hardware failures. Plan regular backups, point-in-time recovery, and tested restore procedures for business continuity." }
];