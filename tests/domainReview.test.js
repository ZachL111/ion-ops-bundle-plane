import assert from "node:assert/strict";
import { domainReviewLane, domainReviewScore } from "../src/domainReview.js";

const item = { signal: 59, slack: 28, drag: 8, confidence: 56 };
assert.equal(domainReviewScore(item), 178);
assert.equal(domainReviewLane(item), "ship");
