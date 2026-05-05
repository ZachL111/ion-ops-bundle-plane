import assert from "node:assert/strict";
import { classify, score } from "../src/policy.js";

const cases = [
  {
    "name": "case_1",
    "demand": 72,
    "capacity": 86,
    "latency": 26,
    "risk": 21,
    "weight": 6,
    "score": 15,
    "decision": "review"
  },
  {
    "name": "case_2",
    "demand": 63,
    "capacity": 85,
    "latency": 14,
    "risk": 22,
    "weight": 11,
    "score": 67,
    "decision": "review"
  },
  {
    "name": "case_3",
    "demand": 75,
    "capacity": 80,
    "latency": 23,
    "risk": 14,
    "weight": 6,
    "score": 76,
    "decision": "review"
  }
];

for (const item of cases) {
  const signal = {
    demand: item.demand,
    capacity: item.capacity,
    latency: item.latency,
    risk: item.risk,
    weight: item.weight
  };
  assert.equal(score(signal), item.score);
  assert.equal(classify(signal), item.decision);
}
