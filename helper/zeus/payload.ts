import path from "path";
import { fakers } from "../../helper/generatePayload";

const createSegment = {
  segmentName: "Testt Segment18",
  description: "Testttt Descriptionnnn testttt woiiii11",
  isTest: false,
};

const fileSegmentUsers = path.resolve(
  __dirname,
  "../../helper/files/segmentation_import_template-custom.xlsx"
);

const createMessageTemplate = {
  messageName: "message template AT662233",
  titleMessage: "title AT1",
  url: "https://google.com",
  message: "loremm ipsumm automation",
};

const createPushMessage = {
  pushMessageName: `${fakers.randomName} [AT]`,
  userSegments: "[Dont Delete] SEGMENT for AT-000",
  userSegmentEdited: "[Dont Delete] SEGMENT for AT - Edited",
  platform: "Edot Mini Program",
  template: "[Dont Delete] Template Message for AT-000",
  date: "Thursday, June 26th",
  time: {
    hour: "7",
    minute: "04",
    day: "PM",
  },
};

const toastMessage = {
  successCreated: "Successfully created",
  duplicate: "Already Exist",
  successUpload: "Upload successful",
  successDeleted: "Successfully deleted",
};

export {
  createSegment,
  createMessageTemplate,
  createPushMessage,
  fileSegmentUsers,
  toastMessage,
};
