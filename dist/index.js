"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  businessIntelligenceDb: () => schema_exports,
  influencersDb: () => schema_exports2,
  npsDb: () => schema_exports3,
  paymentDb: () => schema_exports4
});
module.exports = __toCommonJS(index_exports);

// src/databases/business_intelligence/schema.ts
var schema_exports = {};
__export(schema_exports, {
  audienceGenderAge: () => audienceGenderAge,
  audienceGeo: () => audienceGeo,
  audiencePersons: () => audiencePersons,
  commentsBrands: () => commentsBrands,
  commentsSentiments: () => commentsSentiments,
  commentsSentimentsBkp: () => commentsSentimentsBkp,
  commentsSentimentsSummary: () => commentsSentimentsSummary,
  customRanking: () => customRanking,
  igAudienceAge: () => igAudienceAge,
  igAudienceCity: () => igAudienceCity,
  igAudienceCountry: () => igAudienceCountry,
  igAudienceGender: () => igAudienceGender,
  igAudienceGenderAge: () => igAudienceGenderAge,
  igAudienceState: () => igAudienceState,
  igContentDiscount: () => igContentDiscount,
  igFollowerGrowth: () => igFollowerGrowth,
  igOverview: () => igOverview,
  igProfileCampaignOverview: () => igProfileCampaignOverview,
  influencerCampaignPerformanceOverview: () => influencerCampaignPerformanceOverview,
  instagramMedias: () => instagramMedias,
  instagramMediasBkp: () => instagramMediasBkp,
  instagramTiers: () => instagramTiers,
  linkedinTiers: () => linkedinTiers,
  mappingStates: () => mappingStates,
  numbers: () => numbers,
  tiktokMedias: () => tiktokMedias,
  tiktokTiers: () => tiktokTiers,
  tkAudienceAge: () => tkAudienceAge,
  tkAudienceCountry: () => tkAudienceCountry,
  tkAudienceDevice: () => tkAudienceDevice,
  tkAudienceGender: () => tkAudienceGender,
  tkOverview: () => tkOverview,
  tkProfileCampaignOverview: () => tkProfileCampaignOverview,
  ttOverview: () => ttOverview,
  ttProfileCampaignOverview: () => ttProfileCampaignOverview,
  twitterMedias: () => twitterMedias,
  twitterTiers: () => twitterTiers,
  youtubeMedias: () => youtubeMedias,
  youtubeTiers: () => youtubeTiers,
  ytAudienceAge: () => ytAudienceAge,
  ytAudienceCountry: () => ytAudienceCountry,
  ytAudienceGender: () => ytAudienceGender,
  ytAudienceGenderAge: () => ytAudienceGenderAge,
  ytOverview: () => ytOverview,
  ytProfileCampaignOverview: () => ytProfileCampaignOverview
});
var import_drizzle_orm = require("drizzle-orm");
var import_mysql_core = require("drizzle-orm/mysql-core");
var audienceGenderAge = (0, import_mysql_core.mysqlTable)(
  "audience_gender_age",
  {
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 100 }).notNull(),
    gender: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    age: (0, import_mysql_core.varchar)({ length: 100 }).notNull(),
    percentage: (0, import_mysql_core.float)().notNull(),
    value: (0, import_mysql_core.float)().notNull()
  },
  (table) => {
    return {
      audienceGenderAgeCampaignIdGenderAge: (0, import_mysql_core.primaryKey)({ columns: [table.campaignId, table.gender, table.age], name: "audience_gender_age_campaign_id_gender_age" })
    };
  }
);
var audienceGeo = (0, import_mysql_core.mysqlTable)(
  "audience_geo",
  {
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).notNull(),
    date: (0, import_mysql_core.date)({ mode: "date" }),
    campaignUsername: (0, import_mysql_core.varchar)("campaign_username", { length: 255 }),
    campaignTitle: (0, import_mysql_core.varchar)("campaign_title", { length: 255 }).notNull(),
    campaignCustomer: (0, import_mysql_core.varchar)("campaign_customer", { length: 255 }),
    campaignTag: (0, import_mysql_core.varchar)("campaign_tag", { length: 255 }),
    order: (0, import_mysql_core.int)().default(0).notNull(),
    type: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    value: (0, import_mysql_core.float)().notNull(),
    name: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    community: (0, import_mysql_core.varchar)({ length: 24 }),
    state: (0, import_mysql_core.varchar)({ length: 255 })
  },
  (table) => {
    return {
      queryDefaultIdx: (0, import_mysql_core.index)("query_default_idx").on(table.campaignId, table.type, table.order)
    };
  }
);
var audiencePersons = (0, import_mysql_core.mysqlTable)("audience_persons", {
  "65": (0, import_mysql_core.float)().notNull(),
  campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).notNull(),
  date: (0, import_mysql_core.date)({ mode: "date" }),
  campaignUsername: (0, import_mysql_core.varchar)("campaign_username", { length: 255 }),
  campaignTitle: (0, import_mysql_core.varchar)("campaign_title", { length: 255 }).notNull(),
  campaignCustomer: (0, import_mysql_core.varchar)("campaign_customer", { length: 255 }),
  campaignTag: (0, import_mysql_core.varchar)("campaign_tag", { length: 255 }),
  female: (0, import_mysql_core.float)().notNull(),
  male: (0, import_mysql_core.float)().notNull(),
  "1317": (0, import_mysql_core.float)("13_17").notNull(),
  "1824": (0, import_mysql_core.float)("18_24").notNull(),
  "2534": (0, import_mysql_core.float)("25_34").notNull(),
  "3544": (0, import_mysql_core.float)("35_44").notNull(),
  "4564": (0, import_mysql_core.float)("45_64").notNull(),
  unisex: (0, import_mysql_core.float)().notNull(),
  community: (0, import_mysql_core.varchar)({ length: 24 })
});
var commentsBrands = (0, import_mysql_core.mysqlTable)(
  "comments_brands",
  {
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).notNull(),
    engagementRate: (0, import_mysql_core.float)("engagement_rate"),
    followers: (0, import_mysql_core.int)().notNull(),
    mentions: (0, import_mysql_core.int)().notNull(),
    name: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    picture: (0, import_mysql_core.varchar)({ length: 255 }),
    username: (0, import_mysql_core.varchar)({ length: 255 }).notNull()
  },
  (table) => {
    return {
      commentsBrandsCampaignIdUsername: (0, import_mysql_core.primaryKey)({ columns: [table.campaignId, table.username], name: "comments_brands_campaign_id_username" })
    };
  }
);
var commentsSentiments = (0, import_mysql_core.mysqlTable)(
  "comments_sentiments",
  {
    id: (0, import_mysql_core.bigint)({ mode: "number" }).autoincrement().notNull(),
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).notNull(),
    mediaId: (0, import_mysql_core.varchar)("media_id", { length: 255 }).notNull(),
    userId: (0, import_mysql_core.varchar)("user_id", { length: 255 }).notNull(),
    userUsername: (0, import_mysql_core.varchar)("user_username", { length: 255 }).default(""),
    commentId: (0, import_mysql_core.varchar)("comment_id", { length: 255 }).notNull(),
    text: (0, import_mysql_core.longtext)().notNull(),
    commentUsername: (0, import_mysql_core.varchar)("comment_username", { length: 255 }).notNull(),
    sentimentLabel: (0, import_mysql_core.varchar)("sentiment_label", { length: 45 }),
    sentimentScore: (0, import_mysql_core.float)("sentiment_score").notNull(),
    sentimentMagnitude: (0, import_mysql_core.float)("sentiment_magnitude"),
    isCaption: (0, import_mysql_core.int)("is_caption").notNull(),
    isOwner: (0, import_mysql_core.int)("is_owner").notNull(),
    emotionAnger: (0, import_mysql_core.float)("emotion_anger"),
    emotionDisgust: (0, import_mysql_core.float)("emotion_disgust"),
    emotionJoy: (0, import_mysql_core.float)("emotion_joy"),
    emotionSadness: (0, import_mysql_core.float)("emotion_sadness"),
    emotionFear: (0, import_mysql_core.float)("emotion_fear"),
    date: (0, import_mysql_core.datetime)({ mode: "string" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`),
    socialNetwork: (0, import_mysql_core.varchar)("social_network", { length: 20 })
  },
  (table) => {
    return {
      campId: (0, import_mysql_core.index)("CAMP_ID").on(table.campaignId),
      dateIdx: (0, import_mysql_core.index)("comments_sentiments_date_idx").on(table.date),
      mediaIdIdx: (0, import_mysql_core.index)("comments_sentiments_media_id_IDX").on(table.mediaId),
      userId: (0, import_mysql_core.index)("user_id").on(table.userId),
      commentsSentimentsId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "comments_sentiments_id" })
    };
  }
);
var commentsSentimentsBkp = (0, import_mysql_core.mysqlTable)(
  "comments_sentiments_bkp",
  {
    id: (0, import_mysql_core.mediumint)().autoincrement().notNull(),
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).notNull(),
    mediaId: (0, import_mysql_core.varchar)("media_id", { length: 255 }).notNull(),
    userId: (0, import_mysql_core.varchar)("user_id", { length: 255 }).notNull(),
    userUsername: (0, import_mysql_core.varchar)("user_username", { length: 255 }).default(""),
    commentId: (0, import_mysql_core.varchar)("comment_id", { length: 255 }).notNull(),
    text: (0, import_mysql_core.longtext)().notNull(),
    commentUsername: (0, import_mysql_core.varchar)("comment_username", { length: 255 }).notNull(),
    sentimentLabel: (0, import_mysql_core.varchar)("sentiment_label", { length: 45 }),
    sentimentScore: (0, import_mysql_core.float)("sentiment_score").notNull(),
    sentimentMagnitude: (0, import_mysql_core.float)("sentiment_magnitude"),
    isCaption: (0, import_mysql_core.int)("is_caption").notNull(),
    isOwner: (0, import_mysql_core.int)("is_owner").notNull(),
    emotionAnger: (0, import_mysql_core.float)("emotion_anger"),
    emotionDisgust: (0, import_mysql_core.float)("emotion_disgust"),
    emotionJoy: (0, import_mysql_core.float)("emotion_joy"),
    emotionSadness: (0, import_mysql_core.float)("emotion_sadness"),
    emotionFear: (0, import_mysql_core.float)("emotion_fear"),
    date: (0, import_mysql_core.datetime)({ mode: "string" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`)
  },
  (table) => {
    return {
      commentsSentimentsBkpId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "comments_sentiments_bkp_id" })
    };
  }
);
var commentsSentimentsSummary = (0, import_mysql_core.mysqlTable)(
  "comments_sentiments_summary",
  {
    id: (0, import_mysql_core.bigint)({ mode: "number" }).autoincrement().notNull(),
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).notNull(),
    total: (0, import_mysql_core.int)(),
    positive: (0, import_mysql_core.int)().notNull(),
    negative: (0, import_mysql_core.int)().notNull(),
    neutral: (0, import_mysql_core.int)().notNull(),
    amplification: (0, import_mysql_core.float)(),
    adherence: (0, import_mysql_core.float)(),
    relevantComments: (0, import_mysql_core.int)("relevant_comments"),
    anger: (0, import_mysql_core.float)(),
    disgust: (0, import_mysql_core.float)(),
    fear: (0, import_mysql_core.float)(),
    joy: (0, import_mysql_core.float)(),
    sadness: (0, import_mysql_core.float)()
  },
  (table) => {
    return {
      campaignIdIdx: (0, import_mysql_core.index)("comments_sentiments_summary_campaign_id_idx").on(table.campaignId),
      campId: (0, import_mysql_core.index)("CAMP_ID").on(table.campaignId),
      commentsSentimentsSummaryId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "comments_sentiments_summary_id" })
    };
  }
);
var customRanking = (0, import_mysql_core.mysqlTable)(
  "custom_ranking",
  {
    userId: (0, import_mysql_core.varchar)("user_id", { length: 45 }).notNull(),
    username: (0, import_mysql_core.varchar)({ length: 45 }),
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 45 }).notNull(),
    campaignName: (0, import_mysql_core.varchar)("campaign_name", { length: 255 }),
    totalFull: (0, import_mysql_core.int)("total_full").notNull(),
    total: (0, import_mysql_core.int)().notNull(),
    instagram: (0, import_mysql_core.int)().default(0).notNull(),
    pixel: (0, import_mysql_core.int)().default(0).notNull(),
    spreadsheet: (0, import_mysql_core.int)().notNull(),
    positionCustom: (0, import_mysql_core.int)("position_custom").notNull(),
    rangeNumber: (0, import_mysql_core.int)("range_number").notNull(),
    range: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    createdAt: (0, import_mysql_core.datetime)("created_at", { mode: "string" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core.datetime)("updated_at", { mode: "string" }).notNull()
  },
  (table) => {
    return {
      customRankingUserIdCampaignIdRange: (0, import_mysql_core.primaryKey)({ columns: [table.userId, table.campaignId, table.range], name: "custom_ranking_user_id_campaign_id_range" })
    };
  }
);
var instagramAudienceAgeBrackets = [
  "13-17",
  "18-24",
  "25-34",
  "35-44",
  "45-64",
  "65+"
];
var instagramAudienceGenderBrackets = [
  "FEMALE",
  "MALE",
  "UNISEX"
];
var igAudienceAge = (0, import_mysql_core.mysqlTable)(
  "ig_audience_age",
  {
    profileId: (0, import_mysql_core.varchar)({ length: 150 }).notNull(),
    age: (0, import_mysql_core.mysqlEnum)(instagramAudienceAgeBrackets).notNull(),
    type: (0, import_mysql_core.varchar)({ length: 50 }),
    percentage: (0, import_mysql_core.float)(),
    updatedAt: (0, import_mysql_core.date)({ mode: "date" })
  },
  (table) => {
    return {
      igAudienceAgeProfileIdAge: (0, import_mysql_core.primaryKey)({ columns: [table.profileId, table.age], name: "ig_audience_age_profileId_age" })
    };
  }
);
var igAudienceCity = (0, import_mysql_core.mysqlTable)(
  "ig_audience_city",
  {
    profileId: (0, import_mysql_core.varchar)({ length: 150 }).notNull(),
    city: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    state: (0, import_mysql_core.varchar)({ length: 50 }),
    uf: (0, import_mysql_core.varchar)({ length: 50 }),
    type: (0, import_mysql_core.varchar)({ length: 50 }),
    percentage: (0, import_mysql_core.float)(),
    updatedAt: (0, import_mysql_core.date)({ mode: "date" })
  },
  (table) => {
    return {
      igAudienceCityProfileIdCity: (0, import_mysql_core.primaryKey)({ columns: [table.profileId, table.city], name: "ig_audience_city_profileId_city" })
    };
  }
);
var igAudienceCountry = (0, import_mysql_core.mysqlTable)(
  "ig_audience_country",
  {
    profileId: (0, import_mysql_core.varchar)({ length: 150 }).notNull(),
    countryCode: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    type: (0, import_mysql_core.varchar)({ length: 50 }),
    percentage: (0, import_mysql_core.float)(),
    updatedAt: (0, import_mysql_core.date)({ mode: "date" })
  },
  (table) => {
    return {
      igAudienceCountryProfileIdCountryCode: (0, import_mysql_core.primaryKey)({ columns: [table.profileId, table.countryCode], name: "ig_audience_country_profileId_countryCode" })
    };
  }
);
var igAudienceGender = (0, import_mysql_core.mysqlTable)(
  "ig_audience_gender",
  {
    profileId: (0, import_mysql_core.varchar)({ length: 150 }).notNull(),
    gender: (0, import_mysql_core.mysqlEnum)(instagramAudienceGenderBrackets).notNull(),
    type: (0, import_mysql_core.varchar)({ length: 50 }),
    percentage: (0, import_mysql_core.float)(),
    updatedAt: (0, import_mysql_core.date)({ mode: "date" })
  },
  (table) => {
    return {
      igAudienceGenderProfileIdGender: (0, import_mysql_core.primaryKey)({ columns: [table.profileId, table.gender], name: "ig_audience_gender_profileId_gender" })
    };
  }
);
var igAudienceGenderAge = (0, import_mysql_core.mysqlTable)(
  "ig_audience_gender_age",
  {
    profileId: (0, import_mysql_core.varchar)({ length: 150 }).notNull(),
    gender: (0, import_mysql_core.mysqlEnum)(instagramAudienceGenderBrackets).notNull(),
    age: (0, import_mysql_core.mysqlEnum)(instagramAudienceAgeBrackets).notNull(),
    type: (0, import_mysql_core.varchar)({ length: 50 }),
    percentage: (0, import_mysql_core.float)(),
    updatedAt: (0, import_mysql_core.date)({ mode: "date" })
  },
  (table) => {
    return {
      igAudienceGenderAgeProfileIdGenderAge: (0, import_mysql_core.primaryKey)({ columns: [table.profileId, table.gender, table.age], name: "ig_audience_gender_age_profileId_gender_age" })
    };
  }
);
var igAudienceState = (0, import_mysql_core.mysqlTable)(
  "ig_audience_state",
  {
    profileId: (0, import_mysql_core.varchar)({ length: 150 }).notNull(),
    state: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    type: (0, import_mysql_core.varchar)({ length: 50 }),
    percentage: (0, import_mysql_core.float)(),
    updatedAt: (0, import_mysql_core.date)({ mode: "date" })
  },
  (table) => {
    return {
      igAudienceStateProfileIdState: (0, import_mysql_core.primaryKey)({ columns: [table.profileId, table.state], name: "ig_audience_state_profileId_state" })
    };
  }
);
var igContentDiscount = (0, import_mysql_core.mysqlTable)(
  "ig_content_discount",
  {
    contentCount: (0, import_mysql_core.int)("content_count").notNull(),
    contentDiscount: (0, import_mysql_core.float)("content_discount")
  },
  (table) => {
    return {
      igContentDiscountContentCount: (0, import_mysql_core.primaryKey)({ columns: [table.contentCount], name: "ig_content_discount_content_count" })
    };
  }
);
var igFollowerGrowth = (0, import_mysql_core.mysqlTable)(
  "ig_follower_growth",
  {
    profileId: (0, import_mysql_core.varchar)({ length: 150 }).notNull(),
    followers: (0, import_mysql_core.int)(),
    date: (0, import_mysql_core.date)({ mode: "date" }).notNull()
  },
  (table) => {
    return {
      igFollowerGrowthProfileIdDate: (0, import_mysql_core.primaryKey)({ columns: [table.profileId, table.date], name: "ig_follower_growth_profileId_date" })
    };
  }
);
var igOverview = (0, import_mysql_core.mysqlTable)(
  "ig_overview",
  {
    id: (0, import_mysql_core.bigint)({ mode: "number" }).autoincrement().notNull(),
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).notNull(),
    date: (0, import_mysql_core.date)({ mode: "date" }),
    campaignUsername: (0, import_mysql_core.varchar)("campaign_username", { length: 255 }),
    campaignTitle: (0, import_mysql_core.varchar)("campaign_title", { length: 255 }),
    campaignCustomer: (0, import_mysql_core.varchar)("campaign_customer", { length: 255 }),
    campaignTag: (0, import_mysql_core.varchar)("campaign_tag", { length: 255 }),
    brandFollowers: (0, import_mysql_core.int)("brand_followers"),
    contractedProfiles: (0, import_mysql_core.int)("contracted_profiles").default(0).notNull(),
    contractedPosts: (0, import_mysql_core.int)("contracted_posts").default(0).notNull(),
    contractedStories: (0, import_mysql_core.int)("contracted_stories").default(0).notNull(),
    activatedProfiles: (0, import_mysql_core.int)("activated_profiles").default(0).notNull(),
    generatedContents: (0, import_mysql_core.int)("generated_contents").default(0).notNull(),
    engagements: (0, import_mysql_core.bigint)({ mode: "number" }).notNull(),
    impressions: (0, import_mysql_core.int)().default(0),
    reach: (0, import_mysql_core.int)().default(0).notNull(),
    executedPosts: (0, import_mysql_core.int)("executed_posts").default(0),
    postsImpressions: (0, import_mysql_core.int)("posts_impressions").default(0),
    postsReach: (0, import_mysql_core.int)("posts_reach").default(0),
    postsEffectiveReach: (0, import_mysql_core.float)("posts_effective_reach"),
    executedStories: (0, import_mysql_core.int)("executed_stories").default(0),
    tapsBack: (0, import_mysql_core.int)("taps_back").default(0).notNull(),
    storiesImpressions: (0, import_mysql_core.int)("stories_impressions").default(0),
    storiesReach: (0, import_mysql_core.int)("stories_reach").default(0),
    storiesEffectiveReach: (0, import_mysql_core.float)("stories_effective_reach"),
    responsible: (0, import_mysql_core.varchar)({ length: 255 }),
    startDate: (0, import_mysql_core.date)("start_date", { mode: "date" }),
    endDate: (0, import_mysql_core.date)("end_date", { mode: "date" }),
    status: (0, import_mysql_core.varchar)({ length: 255 }),
    responsibleCommercial: (0, import_mysql_core.varchar)({ length: 255 }),
    postsEngagementRate: (0, import_mysql_core.float)("posts_engagement_rate"),
    storiesReplies: (0, import_mysql_core.bigint)("stories_replies", { mode: "number" }),
    storiesEngagements: (0, import_mysql_core.bigint)("stories_engagements", { mode: "number" }),
    storiesEngagementRate: (0, import_mysql_core.float)("stories_engagement_rate"),
    postsEngagements: (0, import_mysql_core.bigint)("posts_engagements", { mode: "number" }),
    postsLikes: (0, import_mysql_core.int)("posts_likes"),
    postsComments: (0, import_mysql_core.int)("posts_comments"),
    postsSaveds: (0, import_mysql_core.int)("posts_saveds"),
    totalClicks: (0, import_mysql_core.int)(),
    uniqueClicks: (0, import_mysql_core.int)(),
    community: (0, import_mysql_core.varchar)({ length: 24 }),
    postImageEngagementRate: (0, import_mysql_core.float)("post_image_engagement_rate"),
    postCarouselEngagementRate: (0, import_mysql_core.float)("post_carousel_engagement_rate"),
    postVideoEngagementRate: (0, import_mysql_core.float)("post_video_engagement_rate"),
    storiesVideoEngagementRate: (0, import_mysql_core.float)("stories_video_engagement_rate"),
    storiesImageEngagementRate: (0, import_mysql_core.float)("stories_image_engagement_rate"),
    storiesCompleteEngagementRate: (0, import_mysql_core.float)("stories_complete_engagement_rate"),
    uniqueReach: (0, import_mysql_core.int)("unique_reach"),
    uniquePostsReach: (0, import_mysql_core.float)("unique_posts_reach"),
    uniqueStoriesReach: (0, import_mysql_core.float)("unique_stories_reach"),
    potentialReach: (0, import_mysql_core.float)("potential_reach"),
    estimatedReach: (0, import_mysql_core.float)("estimated_reach"),
    frequency: (0, import_mysql_core.float)(),
    convertionsCount: (0, import_mysql_core.float)("convertions_count"),
    convertionsValue: (0, import_mysql_core.float)("convertions_value"),
    executedPostsCarousel: (0, import_mysql_core.int)("executed_posts_carousel").default(0),
    executedPostsVideo: (0, import_mysql_core.int)("executed_posts_video").default(0),
    executedPostsImage: (0, import_mysql_core.int)("executed_posts_image").default(0),
    executedStoriesImage: (0, import_mysql_core.int)("executed_stories_image").default(0),
    executedStoriesVideo: (0, import_mysql_core.int)("executed_stories_video").default(0),
    postsImpressionsVideo: (0, import_mysql_core.int)("posts_impressions_video").default(0),
    storiesImpressionsVideo: (0, import_mysql_core.int)("stories_impressions_video").default(0),
    postsImpressionsImage: (0, import_mysql_core.int)("posts_impressions_image").default(0),
    postsImpressionsCarousel: (0, import_mysql_core.int)("posts_impressions_carousel").default(0),
    storiesImpressionsImage: (0, import_mysql_core.int)("stories_impressions_image").default(0),
    postsVideoViews: (0, import_mysql_core.int)("posts_video_views").default(0),
    storiesVideoViews: (0, import_mysql_core.int)("stories_video_views").default(0),
    executedPostsVideoFeed: (0, import_mysql_core.int)("executed_posts_video_feed"),
    executedPostsVideoReels: (0, import_mysql_core.int)("executed_posts_video_reels"),
    executedPostsVideoIgtv: (0, import_mysql_core.int)("executed_posts_video_igtv"),
    postsImpressionsVideoFeed: (0, import_mysql_core.int)("posts_impressions_video_feed"),
    postsImpressionsVideoReels: (0, import_mysql_core.int)("posts_impressions_video_reels"),
    postsImpressionsVideoIgtv: (0, import_mysql_core.int)("posts_impressions_video_igtv"),
    cpm: (0, import_mysql_core.float)(),
    cpe: (0, import_mysql_core.float)(),
    mediaValue: (0, import_mysql_core.float)("media_value"),
    roi: (0, import_mysql_core.float)(),
    ctr: (0, import_mysql_core.float)(),
    responsibleTeam: (0, import_mysql_core.varchar)("responsible_team", { length: 255 }),
    cpa: (0, import_mysql_core.float)(),
    cpc: (0, import_mysql_core.float)(),
    contractedReels: (0, import_mysql_core.int)("contracted_reels").default(0).notNull(),
    reelsEngagementRate: (0, import_mysql_core.float)("reels_engagement_rate"),
    reelsEngagements: (0, import_mysql_core.bigint)("reels_engagements", { mode: "number" }),
    reelsImpressions: (0, import_mysql_core.int)("reels_impressions").default(0),
    uniqueReelsReach: (0, import_mysql_core.float)("unique_reels_reach"),
    reelsReach: (0, import_mysql_core.int)("reels_reach").default(0).notNull(),
    reelsEffectiveReach: (0, import_mysql_core.float)("reels_effective_reach"),
    reelsLikes: (0, import_mysql_core.int)("reels_likes"),
    reelsComments: (0, import_mysql_core.int)("reels_comments"),
    reelsSaved: (0, import_mysql_core.int)("reels_saved"),
    executedReels: (0, import_mysql_core.int)("executed_reels").default(0).notNull(),
    reelsPlays: (0, import_mysql_core.int)("reels_plays").default(0),
    executedStoriesImageNormalized: (0, import_mysql_core.int)("executed_stories_image_normalized").default(0).notNull(),
    executedStoriesVideoNormalized: (0, import_mysql_core.int)("executed_stories_video_normalized").default(0).notNull(),
    executedStoriesNormalized: (0, import_mysql_core.int)("executed_stories_normalized").default(0).notNull(),
    convertionsRegisteredCount: (0, import_mysql_core.float)("convertions_registered_count"),
    convertionsRegisteredValue: (0, import_mysql_core.float)("convertions_registered_value"),
    convertionsCommissionToReceive: (0, import_mysql_core.float)("convertions_commission_to_receive"),
    postsShares: (0, import_mysql_core.int)("posts_shares"),
    postsProfileVisits: (0, import_mysql_core.int)("posts_profile_visits"),
    postsProfileActivity: (0, import_mysql_core.int)("posts_profile_activity"),
    postsFollows: (0, import_mysql_core.int)("posts_follows"),
    reelsShares: (0, import_mysql_core.int)("reels_shares"),
    storiesShares: (0, import_mysql_core.int)("stories_shares"),
    storiesProfileVisits: (0, import_mysql_core.int)("stories_profile_visits"),
    storiesProfileActivity: (0, import_mysql_core.int)("stories_profile_activity"),
    storiesFollows: (0, import_mysql_core.int)("stories_follows"),
    reelsReplays: (0, import_mysql_core.int)("reels_replays")
  },
  (table) => {
    return {
      overviewDefaultIdx: (0, import_mysql_core.index)("overview_default_idx").on(table.campaignId),
      igOverviewId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "ig_overview_id" })
    };
  }
);
var igProfileCampaignOverview = (0, import_mysql_core.mysqlTable)(
  "ig_profile_campaign_overview",
  {
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).notNull(),
    date: (0, import_mysql_core.date)({ mode: "date" }),
    campaignUsername: (0, import_mysql_core.varchar)("campaign_username", { length: 255 }),
    campaignTitle: (0, import_mysql_core.varchar)("campaign_title", { length: 255 }).notNull(),
    campaignCustomer: (0, import_mysql_core.varchar)("campaign_customer", { length: 255 }).notNull(),
    campaignTag: (0, import_mysql_core.varchar)("campaign_tag", { length: 255 }),
    username: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    userId: (0, import_mysql_core.varchar)("user_id", { length: 255 }).notNull(),
    followers: (0, import_mysql_core.int)().default(0).notNull(),
    generatedContents: (0, import_mysql_core.int)("generated_contents").default(0).notNull(),
    engagements: (0, import_mysql_core.bigint)({ mode: "number" }).notNull(),
    impressions: (0, import_mysql_core.int)().default(0),
    reach: (0, import_mysql_core.int)().default(0).notNull(),
    effectiveReach: (0, import_mysql_core.float)("effective_reach"),
    executedPosts: (0, import_mysql_core.int)("executed_posts").default(0),
    postsImpressions: (0, import_mysql_core.int)("posts_impressions").default(0),
    postsReach: (0, import_mysql_core.int)("posts_reach").default(0),
    postsEffectiveReach: (0, import_mysql_core.float)("posts_effective_reach"),
    postsEngagements: (0, import_mysql_core.int)("posts_engagements"),
    executedStories: (0, import_mysql_core.int)("executed_stories").default(0),
    tapsBack: (0, import_mysql_core.int)("taps_back").default(0).notNull(),
    tapsBackRate: (0, import_mysql_core.float)("taps_back_rate").notNull(),
    storiesImpressions: (0, import_mysql_core.int)("stories_impressions").default(0),
    storiesReach: (0, import_mysql_core.int)("stories_reach").default(0),
    storiesEffectiveReach: (0, import_mysql_core.float)("stories_effective_reach"),
    storiesReplies: (0, import_mysql_core.bigint)("stories_replies", { mode: "number" }),
    storiesEngagements: (0, import_mysql_core.bigint)("stories_engagements", { mode: "number" }),
    storiesEngagementRate: (0, import_mysql_core.float)("stories_engagement_rate"),
    comments: (0, import_mysql_core.int)(),
    likes: (0, import_mysql_core.int)(),
    saved: (0, import_mysql_core.int)(),
    postsEngagementRate: (0, import_mysql_core.float)("posts_engagement_rate"),
    squidId: (0, import_mysql_core.varchar)("squid_id", { length: 255 }),
    totalClicks: (0, import_mysql_core.int)(),
    uniqueClicks: (0, import_mysql_core.int)(),
    community: (0, import_mysql_core.varchar)({ length: 24 }),
    postImageEngagementRate: (0, import_mysql_core.float)("post_image_engagement_rate"),
    postCarouselEngagementRate: (0, import_mysql_core.float)("post_carousel_engagement_rate"),
    postVideoEngagementRate: (0, import_mysql_core.float)("post_video_engagement_rate"),
    storiesVideoEngagementRate: (0, import_mysql_core.float)("stories_video_engagement_rate"),
    storiesImageEngagementRate: (0, import_mysql_core.float)("stories_image_engagement_rate"),
    storiesCompleteEngagementRate: (0, import_mysql_core.float)("stories_complete_engagement_rate"),
    uniqueReach: (0, import_mysql_core.float)("unique_reach"),
    uniquePostsReach: (0, import_mysql_core.float)("unique_posts_reach"),
    uniqueStoriesReach: (0, import_mysql_core.float)("unique_stories_reach"),
    macro: (0, import_mysql_core.tinyint)().default(0),
    convertionsCount: (0, import_mysql_core.float)("convertions_count"),
    convertionsValue: (0, import_mysql_core.float)("convertions_value"),
    ctr: (0, import_mysql_core.float)(),
    reelsEngagementRate: (0, import_mysql_core.float)("reels_engagement_rate"),
    reelsEngagements: (0, import_mysql_core.bigint)("reels_engagements", { mode: "number" }),
    uniqueReelsReach: (0, import_mysql_core.float)("unique_reels_reach"),
    reelsReach: (0, import_mysql_core.int)("reels_reach").default(0),
    reelsEffectiveReach: (0, import_mysql_core.float)("reels_effective_reach"),
    reelsLikes: (0, import_mysql_core.int)("reels_likes"),
    reelsComments: (0, import_mysql_core.int)("reels_comments"),
    reelsSaved: (0, import_mysql_core.int)("reels_saved"),
    executedReels: (0, import_mysql_core.int)("executed_reels").default(0),
    reelsImpressions: (0, import_mysql_core.int)("reels_impressions").default(0),
    reelsPlays: (0, import_mysql_core.int)("reels_plays").default(0),
    executedStoriesNormalized: (0, import_mysql_core.int)("executed_stories_normalized").default(0),
    convertionsRegisteredCount: (0, import_mysql_core.float)("convertions_registered_count"),
    convertionsRegisteredValue: (0, import_mysql_core.float)("convertions_registered_value"),
    convertionsCommissionToReceive: (0, import_mysql_core.float)("convertions_commission_to_receive"),
    postsShares: (0, import_mysql_core.int)("posts_shares"),
    postsProfileVisits: (0, import_mysql_core.int)("posts_profile_visits"),
    postsProfileActivity: (0, import_mysql_core.int)("posts_profile_activity"),
    postsFollows: (0, import_mysql_core.int)("posts_follows"),
    reelsShares: (0, import_mysql_core.int)("reels_shares"),
    storiesShares: (0, import_mysql_core.int)("stories_shares"),
    storiesProfileVisits: (0, import_mysql_core.int)("stories_profile_visits"),
    storiesProfileActivity: (0, import_mysql_core.int)("stories_profile_activity"),
    storiesFollows: (0, import_mysql_core.int)("stories_follows"),
    reelsReplays: (0, import_mysql_core.int)("reels_replays")
  },
  (table) => {
    return {
      followupDefaultIdx: (0, import_mysql_core.index)("followup_default_idx").on(table.campaignId),
      userId: (0, import_mysql_core.index)("user_id").on(table.userId)
    };
  }
);
var influencerCampaignPerformanceOverview = (0, import_mysql_core.mysqlTable)("influencer_campaign_performance_overview", {
  campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).notNull(),
  date: (0, import_mysql_core.date)({ mode: "date" }).notNull(),
  squidId: (0, import_mysql_core.varchar)("squid_id", { length: 255 }).notNull(),
  username: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
  clicksTotal: (0, import_mysql_core.int)("clicks_total"),
  clicksUnique: (0, import_mysql_core.int)("clicks_unique"),
  convertionsCount: (0, import_mysql_core.int)("convertions_count"),
  convertionsValue: (0, import_mysql_core.int)("convertions_value"),
  community: (0, import_mysql_core.varchar)({ length: 255 })
});
var instagramMedias = (0, import_mysql_core.mysqlTable)(
  "instagram_medias",
  {
    id: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).notNull(),
    campaignUsername: (0, import_mysql_core.varchar)("campaign_username", { length: 255 }),
    campaignTitle: (0, import_mysql_core.varchar)("campaign_title", { length: 255 }).notNull(),
    campaignCustomer: (0, import_mysql_core.varchar)("campaign_customer", { length: 255 }).notNull(),
    campaignTag: (0, import_mysql_core.varchar)("campaign_tag", { length: 255 }),
    campaignTimezone: (0, import_mysql_core.varchar)("campaign_timezone", { length: 45 }),
    date: (0, import_mysql_core.date)({ mode: "date" }).notNull(),
    idMedia: (0, import_mysql_core.varchar)("id_media", { length: 255 }).notNull(),
    mediaOriginalTimezone: (0, import_mysql_core.varchar)("media_original_timezone", { length: 45 }),
    username: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    userId: (0, import_mysql_core.varchar)("user_id", { length: 255 }).notNull(),
    followers: (0, import_mysql_core.int)().notNull(),
    type: (0, import_mysql_core.varchar)({ length: 25 }).notNull(),
    createdAt: (0, import_mysql_core.datetime)("created_at", { mode: "string" }).notNull(),
    weekday: (0, import_mysql_core.int)().notNull(),
    time: (0, import_mysql_core.varchar)({ length: 255 }).default("").notNull(),
    hour: (0, import_mysql_core.int)().notNull(),
    link: (0, import_mysql_core.varchar)({ length: 255 }).default(""),
    thumbnail: (0, import_mysql_core.varchar)({ length: 500 }),
    likes: (0, import_mysql_core.int)(),
    comments: (0, import_mysql_core.int)(),
    saved: (0, import_mysql_core.int)(),
    engagements: (0, import_mysql_core.bigint)({ mode: "number" }),
    engagementRate: (0, import_mysql_core.float)("engagement_rate"),
    reach: (0, import_mysql_core.int)(),
    impressions: (0, import_mysql_core.int)(),
    tapsBack: (0, import_mysql_core.int)("taps_back"),
    tapsBackRate: (0, import_mysql_core.float)("taps_back_Rate"),
    tapsForward: (0, import_mysql_core.int)("taps_forward"),
    tapsForwardRate: (0, import_mysql_core.float)("taps_forward_rate"),
    exits: (0, import_mysql_core.int)(),
    status: (0, import_mysql_core.varchar)({ length: 20 }),
    replies: (0, import_mysql_core.bigint)({ mode: "number" }),
    effectiveReach: (0, import_mysql_core.float)("effective_reach"),
    subtype: (0, import_mysql_core.varchar)({ length: 25 }),
    videoViews: (0, import_mysql_core.int)("video_views"),
    // Warning: Can't parse bit(1) from database
    // bit(1)Type: bit(1)("last_media"),
    community: (0, import_mysql_core.varchar)({ length: 24 }),
    videoSubtype: (0, import_mysql_core.varchar)("video_subtype", { length: 45 }),
    caption: (0, import_mysql_core.text)(),
    plays: (0, import_mysql_core.int)(),
    obtainedOn: (0, import_mysql_core.datetime)("obtained_on", { mode: "string" }),
    capture: (0, import_mysql_core.varchar)({ length: 50 }),
    hasOcrMetrics: (0, import_mysql_core.tinyint)("has_ocr_metrics").default(0),
    replays: (0, import_mysql_core.int)(),
    follows: (0, import_mysql_core.int)(),
    profileActivity: (0, import_mysql_core.int)("profile_activity"),
    profileVisits: (0, import_mysql_core.int)("profile_visits"),
    shares: (0, import_mysql_core.int)()
  },
  (table) => {
    return {
      queryDefaultIdx: (0, import_mysql_core.index)("query_default_idx").on(table.campaignId, table.status, table.type),
      idMediaIdx: (0, import_mysql_core.index)("instagram_medias_id_media_IDX").on(table.idMedia),
      userIdIdx: (0, import_mysql_core.index)("instagram_medias_user_id_IDX").on(table.userId),
      followersIdx: (0, import_mysql_core.index)("instagram_medias_followers_IDX").on(table.followers),
      createdAtIdx: (0, import_mysql_core.index)("instagram_medias_created_at_IDX").on(table.createdAt),
      typeIdx: (0, import_mysql_core.index)("instagram_medias_type_IDX").on(table.type),
      effectiveReachIdx: (0, import_mysql_core.index)("instagram_medias_effective_reach_IDX").on(table.effectiveReach),
      instagramMediasId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "instagram_medias_id" })
    };
  }
);
var instagramMediasBkp = (0, import_mysql_core.mysqlTable)(
  "instagram_medias_bkp",
  {
    id: (0, import_mysql_core.int)().autoincrement().notNull(),
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).notNull(),
    campaignUsername: (0, import_mysql_core.varchar)("campaign_username", { length: 255 }),
    campaignTitle: (0, import_mysql_core.varchar)("campaign_title", { length: 255 }).notNull(),
    campaignCustomer: (0, import_mysql_core.varchar)("campaign_customer", { length: 255 }).notNull(),
    campaignTag: (0, import_mysql_core.varchar)("campaign_tag", { length: 255 }).notNull(),
    date: (0, import_mysql_core.date)({ mode: "date" }).notNull(),
    idMedia: (0, import_mysql_core.varchar)("id_media", { length: 255 }).notNull(),
    username: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    userId: (0, import_mysql_core.varchar)("user_id", { length: 255 }).notNull(),
    followers: (0, import_mysql_core.int)().notNull(),
    type: (0, import_mysql_core.varchar)({ length: 25 }).notNull(),
    createdAt: (0, import_mysql_core.datetime)("created_at", { mode: "string" }).notNull(),
    weekday: (0, import_mysql_core.int)().notNull(),
    time: (0, import_mysql_core.varchar)({ length: 255 }).default("").notNull(),
    hour: (0, import_mysql_core.int)().notNull(),
    link: (0, import_mysql_core.varchar)({ length: 255 }).default(""),
    thumbnail: (0, import_mysql_core.varchar)({ length: 500 }),
    likes: (0, import_mysql_core.int)(),
    comments: (0, import_mysql_core.int)(),
    saved: (0, import_mysql_core.int)(),
    engagements: (0, import_mysql_core.int)(),
    engagementRate: (0, import_mysql_core.float)("engagement_rate"),
    reach: (0, import_mysql_core.int)(),
    impressions: (0, import_mysql_core.int)(),
    tapsBack: (0, import_mysql_core.int)("taps_back"),
    tapsBackRate: (0, import_mysql_core.float)("taps_back_Rate"),
    tapsForward: (0, import_mysql_core.int)("taps_forward"),
    tapsForwardRate: (0, import_mysql_core.float)("taps_forward_rate"),
    exits: (0, import_mysql_core.int)(),
    status: (0, import_mysql_core.varchar)({ length: 20 }),
    replies: (0, import_mysql_core.int)(),
    effectiveReach: (0, import_mysql_core.float)("effective_reach"),
    subtype: (0, import_mysql_core.varchar)({ length: 25 }),
    videoViews: (0, import_mysql_core.int)("video_views"),
    // Warning: Can't parse bit(1) from database
    // bit(1)Type: bit(1)("last_media"),
    community: (0, import_mysql_core.tinyint)().notNull()
  },
  (table) => {
    return {
      instagramMediasBkpId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "instagram_medias_bkp_id" })
    };
  }
);
var instagramTiers = (0, import_mysql_core.mysqlTable)(
  "instagram_tiers",
  {
    id: (0, import_mysql_core.int)().autoincrement().notNull(),
    label: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    min: (0, import_mysql_core.int)().default(0),
    max: (0, import_mysql_core.int)(),
    rpa: (0, import_mysql_core.tinyint)().default(0),
    postValue: (0, import_mysql_core.float)("post_value"),
    stories: (0, import_mysql_core.float)(),
    reelValue: (0, import_mysql_core.float)("reel_value"),
    defaultCacheVariation: (0, import_mysql_core.float)("default_cache_variation")
  },
  (table) => {
    return {
      minIdx: (0, import_mysql_core.index)("instagram_tiers_min_IDX").on(table.min),
      maxIdx: (0, import_mysql_core.index)("instagram_tiers_max_IDX").on(table.max),
      instagramTiersId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "instagram_tiers_id" })
    };
  }
);
var linkedinTiers = (0, import_mysql_core.mysqlTable)(
  "linkedin_tiers",
  {
    id: (0, import_mysql_core.int)().autoincrement().notNull(),
    label: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    min: (0, import_mysql_core.int)().default(0),
    max: (0, import_mysql_core.int)()
  },
  (table) => {
    return {
      linkedinTiersId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "linkedin_tiers_id" })
    };
  }
);
var mappingStates = (0, import_mysql_core.mysqlTable)(
  "mapping_states",
  {
    state: (0, import_mysql_core.varchar)({ length: 250 }).notNull(),
    city: (0, import_mysql_core.varchar)({ length: 250 }).notNull(),
    uf: (0, import_mysql_core.char)({ length: 2 }).notNull()
  },
  (table) => {
    return {
      mappingStatesStateCityUf: (0, import_mysql_core.primaryKey)({ columns: [table.state, table.city, table.uf], name: "mapping_states_state_city_uf" })
    };
  }
);
var numbers = (0, import_mysql_core.mysqlTable)(
  "numbers",
  {
    n: (0, import_mysql_core.int)().notNull()
  },
  (table) => {
    return {
      numbersN: (0, import_mysql_core.primaryKey)({ columns: [table.n], name: "numbers_n" })
    };
  }
);
var tiktokMedias = (0, import_mysql_core.mysqlTable)(
  "tiktok_medias",
  {
    id: (0, import_mysql_core.int)().autoincrement().notNull(),
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).notNull(),
    campaignUsername: (0, import_mysql_core.varchar)("campaign_username", { length: 255 }),
    campaignTitle: (0, import_mysql_core.varchar)("campaign_title", { length: 255 }),
    campaignCustomer: (0, import_mysql_core.varchar)("campaign_customer", { length: 255 }),
    campaignTag: (0, import_mysql_core.varchar)("campaign_tag", { length: 255 }),
    campaignTimezone: (0, import_mysql_core.varchar)("campaign_timezone", { length: 255 }),
    date: (0, import_mysql_core.date)({ mode: "date" }),
    idMedia: (0, import_mysql_core.varchar)("id_media", { length: 255 }),
    mediaOriginalTimezone: (0, import_mysql_core.varchar)("media_original_timezone", { length: 255 }),
    username: (0, import_mysql_core.varchar)({ length: 255 }),
    userId: (0, import_mysql_core.varchar)("user_id", { length: 255 }),
    followers: (0, import_mysql_core.varchar)({ length: 255 }),
    subtype: (0, import_mysql_core.varchar)({ length: 255 }),
    type: (0, import_mysql_core.varchar)({ length: 255 }),
    createdAt: (0, import_mysql_core.datetime)("created_at", { mode: "string" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    weekday: (0, import_mysql_core.int)(),
    time: (0, import_mysql_core.varchar)({ length: 255 }),
    hour: (0, import_mysql_core.int)(),
    link: (0, import_mysql_core.text)(),
    thumbnail: (0, import_mysql_core.varchar)({ length: 500 }),
    likes: (0, import_mysql_core.int)(),
    comments: (0, import_mysql_core.int)(),
    shares: (0, import_mysql_core.int)(),
    engagements: (0, import_mysql_core.int)(),
    engagementRate: (0, import_mysql_core.float)("engagement_rate"),
    reach: (0, import_mysql_core.bigint)({ mode: "number" }),
    impressions: (0, import_mysql_core.bigint)({ mode: "number" }),
    effectiveReach: (0, import_mysql_core.float)("effective_reach"),
    views: (0, import_mysql_core.bigint)({ mode: "number" }),
    status: (0, import_mysql_core.varchar)({ length: 20 }),
    community: (0, import_mysql_core.varchar)({ length: 24 }).notNull(),
    caption: (0, import_mysql_core.text)(),
    obtainedOn: (0, import_mysql_core.datetime)("obtained_on", { mode: "string" }),
    videoCompletionRate: (0, import_mysql_core.float)("video_completion_rate"),
    totalPlayTime: (0, import_mysql_core.int)("total_play_time"),
    averageViewTime: (0, import_mysql_core.float)("average_view_time"),
    twoSecondsViews: (0, import_mysql_core.float)("two_seconds_views"),
    sixSecondsViews: (0, import_mysql_core.float)("six_seconds_views"),
    videoViewsBySourceFollowing: (0, import_mysql_core.int)("video_views_by_source_following"),
    videoViewsBySourceHashtag: (0, import_mysql_core.int)("video_views_by_source_hashtag"),
    videoViewsBySourceForYou: (0, import_mysql_core.int)("video_views_by_source_for_you"),
    videoViewsBySourcePersonalProfile: (0, import_mysql_core.int)("video_views_by_source_personal_profile"),
    videoViewsBySourceSearch: (0, import_mysql_core.int)("video_views_by_source_search"),
    videoViewsBySourceSound: (0, import_mysql_core.int)("video_views_by_source_sound"),
    obtainedBy: (0, import_mysql_core.varchar)("obtained_by", { length: 100 }),
    capture: (0, import_mysql_core.varchar)({ length: 45 })
  },
  (table) => {
    return {
      campaignIdIdx: (0, import_mysql_core.index)("tiktok_medias_campaign_id_IDX").on(table.campaignId, table.campaignTitle, table.status),
      tiktokMediasId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "tiktok_medias_id" }),
      tiktokMediasIdIdx: (0, import_mysql_core.unique)("tiktok_medias_id_IDX").on(table.id)
    };
  }
);
var tiktokTiers = (0, import_mysql_core.mysqlTable)(
  "tiktok_tiers",
  {
    id: (0, import_mysql_core.int)().autoincrement().notNull(),
    label: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    min: (0, import_mysql_core.int)().default(0),
    max: (0, import_mysql_core.int)()
  },
  (table) => {
    return {
      tiktokTiersId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "tiktok_tiers_id" })
    };
  }
);
var tkAudienceAge = (0, import_mysql_core.mysqlTable)(
  "tk_audience_age",
  {
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).notNull(),
    date: (0, import_mysql_core.date)({ mode: "date" }),
    campaignUsername: (0, import_mysql_core.varchar)("campaign_username", { length: 255 }),
    campaignTitle: (0, import_mysql_core.varchar)("campaign_title", { length: 255 }),
    campaignCustomer: (0, import_mysql_core.varchar)("campaign_customer", { length: 255 }),
    campaignTag: (0, import_mysql_core.varchar)("campaign_tag", { length: 255 }),
    age18To24: (0, import_mysql_core.float)(),
    age25To34: (0, import_mysql_core.float)(),
    age35: (0, import_mysql_core.float)(),
    community: (0, import_mysql_core.varchar)({ length: 24 })
  },
  (table) => {
    return {
      tkAudienceAgeCampaignId: (0, import_mysql_core.primaryKey)({ columns: [table.campaignId], name: "tk_audience_age_campaign_id" })
    };
  }
);
var tkAudienceCountry = (0, import_mysql_core.mysqlTable)(
  "tk_audience_country",
  {
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).notNull(),
    date: (0, import_mysql_core.date)({ mode: "date" }),
    campaignUsername: (0, import_mysql_core.varchar)("campaign_username", { length: 255 }),
    campaignTitle: (0, import_mysql_core.varchar)("campaign_title", { length: 255 }),
    campaignCustomer: (0, import_mysql_core.varchar)("campaign_customer", { length: 255 }),
    campaignTag: (0, import_mysql_core.varchar)("campaign_tag", { length: 255 }),
    order: (0, import_mysql_core.int)().notNull(),
    name: (0, import_mysql_core.varchar)({ length: 255 }),
    value: (0, import_mysql_core.float)(),
    community: (0, import_mysql_core.varchar)({ length: 24 })
  },
  (table) => {
    return {
      tkAudienceCountryCampaignIdOrder: (0, import_mysql_core.primaryKey)({ columns: [table.campaignId, table.order], name: "tk_audience_country_campaign_id_order" })
    };
  }
);
var tkAudienceDevice = (0, import_mysql_core.mysqlTable)(
  "tk_audience_device",
  {
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).notNull(),
    date: (0, import_mysql_core.date)({ mode: "date" }),
    campaignUsername: (0, import_mysql_core.varchar)("campaign_username", { length: 255 }),
    campaignTitle: (0, import_mysql_core.varchar)("campaign_title", { length: 255 }),
    campaignCustomer: (0, import_mysql_core.varchar)("campaign_customer", { length: 255 }),
    campaignTag: (0, import_mysql_core.varchar)("campaign_tag", { length: 255 }),
    android: (0, import_mysql_core.float)(),
    ios: (0, import_mysql_core.float)(),
    community: (0, import_mysql_core.varchar)({ length: 24 })
  },
  (table) => {
    return {
      tkAudienceDeviceCampaignId: (0, import_mysql_core.primaryKey)({ columns: [table.campaignId], name: "tk_audience_device_campaign_id" })
    };
  }
);
var tkAudienceGender = (0, import_mysql_core.mysqlTable)(
  "tk_audience_gender",
  {
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).notNull(),
    date: (0, import_mysql_core.date)({ mode: "date" }),
    campaignUsername: (0, import_mysql_core.varchar)("campaign_username", { length: 255 }),
    campaignTitle: (0, import_mysql_core.varchar)("campaign_title", { length: 255 }),
    campaignCustomer: (0, import_mysql_core.varchar)("campaign_customer", { length: 255 }),
    campaignTag: (0, import_mysql_core.varchar)("campaign_tag", { length: 255 }),
    female: (0, import_mysql_core.float)(),
    male: (0, import_mysql_core.float)(),
    community: (0, import_mysql_core.varchar)({ length: 24 })
  },
  (table) => {
    return {
      tkAudienceGenderCampaignId: (0, import_mysql_core.primaryKey)({ columns: [table.campaignId], name: "tk_audience_gender_campaign_id" })
    };
  }
);
var tkOverview = (0, import_mysql_core.mysqlTable)(
  "tk_overview",
  {
    id: (0, import_mysql_core.int)().autoincrement().notNull(),
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 100 }).notNull(),
    campaignTitle: (0, import_mysql_core.varchar)("campaign_title", { length: 100 }),
    campaignCustomer: (0, import_mysql_core.varchar)("campaign_customer", { length: 100 }),
    responsible: (0, import_mysql_core.varchar)({ length: 100 }),
    date: (0, import_mysql_core.date)({ mode: "date" }),
    startDate: (0, import_mysql_core.date)("start_date", { mode: "date" }),
    endDate: (0, import_mysql_core.date)("end_date", { mode: "date" }),
    status: (0, import_mysql_core.varchar)({ length: 100 }),
    responsibleCommercial: (0, import_mysql_core.varchar)({ length: 100 }),
    totalClicks: (0, import_mysql_core.int)(),
    uniqueClicks: (0, import_mysql_core.int)(),
    community: (0, import_mysql_core.varchar)({ length: 100 }),
    convertionsCount: (0, import_mysql_core.float)("convertions_count"),
    convertionsValue: (0, import_mysql_core.float)("convertions_value"),
    contractedProfiles: (0, import_mysql_core.int)("contracted_profiles"),
    activatedProfiles: (0, import_mysql_core.int)("activated_profiles"),
    potentialReach: (0, import_mysql_core.int)("potential_reach"),
    contractedVideos: (0, import_mysql_core.int)("contracted_videos"),
    generatedContents: (0, import_mysql_core.int)("generated_contents"),
    executedVideos: (0, import_mysql_core.int)("executed_videos"),
    impressions: (0, import_mysql_core.int)(),
    reach: (0, import_mysql_core.bigint)({ mode: "number" }),
    effectiveReach: (0, import_mysql_core.bigint)("effective_reach", { mode: "number" }),
    engagements: (0, import_mysql_core.int)(),
    engagementRate: (0, import_mysql_core.float)("engagement_rate"),
    likes: (0, import_mysql_core.int)(),
    comments: (0, import_mysql_core.int)(),
    shares: (0, import_mysql_core.int)(),
    cpm: (0, import_mysql_core.float)(),
    cpe: (0, import_mysql_core.float)(),
    mediaValue: (0, import_mysql_core.float)("media_value"),
    roi: (0, import_mysql_core.float)(),
    ctr: (0, import_mysql_core.float)(),
    responsibleTeam: (0, import_mysql_core.varchar)("responsible_team", { length: 100 }),
    createdAt: (0, import_mysql_core.datetime)("created_at", { mode: "string" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    videoCompletionRate: (0, import_mysql_core.float)("video_completion_rate"),
    totalPlayTime: (0, import_mysql_core.int)("total_play_time"),
    averageViewTime: (0, import_mysql_core.float)("average_view_time"),
    twoSecondsViews: (0, import_mysql_core.float)("two_seconds_views"),
    sixSecondsViews: (0, import_mysql_core.float)("six_seconds_views"),
    videoViewsBySourceFollowing: (0, import_mysql_core.int)("video_views_by_source_following"),
    videoViewsBySourceHashtag: (0, import_mysql_core.int)("video_views_by_source_hashtag"),
    videoViewsBySourceForYou: (0, import_mysql_core.int)("video_views_by_source_for_you"),
    videoViewsBySourcePersonalProfile: (0, import_mysql_core.int)("video_views_by_source_personal_profile"),
    videoViewsBySourceSearch: (0, import_mysql_core.int)("video_views_by_source_search"),
    videoViewsBySourceSound: (0, import_mysql_core.int)("video_views_by_source_sound"),
    convertionsRegisteredCount: (0, import_mysql_core.float)("convertions_registered_count"),
    convertionsRegisteredValue: (0, import_mysql_core.float)("convertions_registered_value"),
    convertionsCommissionToReceive: (0, import_mysql_core.float)("convertions_commission_to_receive"),
    cpa: (0, import_mysql_core.float)(),
    cpc: (0, import_mysql_core.float)()
  },
  (table) => {
    return {
      tkOverviewId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "tk_overview_id" })
    };
  }
);
var tkProfileCampaignOverview = (0, import_mysql_core.mysqlTable)(
  "tk_profile_campaign_overview",
  {
    id: (0, import_mysql_core.int)().autoincrement().notNull(),
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).default("").notNull(),
    campaignTitle: (0, import_mysql_core.varchar)("campaign_title", { length: 255 }).default("").notNull(),
    campaignCustomer: (0, import_mysql_core.varchar)("campaign_customer", { length: 255 }).default("").notNull(),
    community: (0, import_mysql_core.varchar)({ length: 255 }),
    date: (0, import_mysql_core.date)({ mode: "date" }).notNull(),
    username: (0, import_mysql_core.varchar)({ length: 255 }).default("").notNull(),
    userId: (0, import_mysql_core.varchar)("user_id", { length: 255 }).default("").notNull(),
    squidId: (0, import_mysql_core.varchar)("squid_id", { length: 255 }).default("").notNull(),
    executedVideos: (0, import_mysql_core.int)("executed_videos").notNull(),
    likes: (0, import_mysql_core.int)().notNull(),
    comments: (0, import_mysql_core.int)().notNull(),
    views: (0, import_mysql_core.int)().notNull(),
    shares: (0, import_mysql_core.int)().notNull(),
    reach: (0, import_mysql_core.float)(),
    uniqueReach: (0, import_mysql_core.float)("unique_reach"),
    engagements: (0, import_mysql_core.int)(),
    engagementRate: (0, import_mysql_core.float)("engagement_rate"),
    macro: (0, import_mysql_core.tinyint)().default(0),
    totalClicks: (0, import_mysql_core.int)(),
    uniqueClicks: (0, import_mysql_core.int)(),
    convertionsCount: (0, import_mysql_core.float)("convertions_count"),
    convertionsValue: (0, import_mysql_core.float)("convertions_value"),
    videoCompletionRate: (0, import_mysql_core.float)("video_completion_rate"),
    totalPlayTime: (0, import_mysql_core.int)("total_play_time"),
    averageViewTime: (0, import_mysql_core.float)("average_view_time"),
    twoSecondsViews: (0, import_mysql_core.float)("two_seconds_views"),
    sixSecondsViews: (0, import_mysql_core.float)("six_seconds_views"),
    videoViewsBySourceFollowing: (0, import_mysql_core.int)("video_views_by_source_following"),
    videoViewsBySourceHashtag: (0, import_mysql_core.int)("video_views_by_source_hashtag"),
    videoViewsBySourceForYou: (0, import_mysql_core.int)("video_views_by_source_for_you"),
    videoViewsBySourcePersonalProfile: (0, import_mysql_core.int)("video_views_by_source_personal_profile"),
    videoViewsBySourceSearch: (0, import_mysql_core.int)("video_views_by_source_search"),
    videoViewsBySourceSound: (0, import_mysql_core.int)("video_views_by_source_sound"),
    generatedContents: (0, import_mysql_core.int)("generated_contents").default(0).notNull(),
    convertionsRegisteredCount: (0, import_mysql_core.float)("convertions_registered_count"),
    convertionsRegisteredValue: (0, import_mysql_core.float)("convertions_registered_value"),
    convertionsCommissionToReceive: (0, import_mysql_core.float)("convertions_commission_to_receive")
  },
  (table) => {
    return {
      tkProfileCampaignOverviewId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "tk_profile_campaign_overview_id" })
    };
  }
);
var ttOverview = (0, import_mysql_core.mysqlTable)(
  "tt_overview",
  {
    id: (0, import_mysql_core.mediumint)().autoincrement().notNull(),
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).notNull(),
    date: (0, import_mysql_core.date)({ mode: "date" }),
    campaignUsername: (0, import_mysql_core.varchar)("campaign_username", { length: 255 }),
    campaignTitle: (0, import_mysql_core.varchar)("campaign_title", { length: 255 }),
    campaignCustomer: (0, import_mysql_core.varchar)("campaign_customer", { length: 255 }),
    campaignTag: (0, import_mysql_core.varchar)("campaign_tag", { length: 255 }),
    brandFollowers: (0, import_mysql_core.int)("brand_followers"),
    contractedProfiles: (0, import_mysql_core.int)("contracted_profiles").default(0).notNull(),
    contractedTweets: (0, import_mysql_core.int)("contracted_tweets").default(0).notNull(),
    contractedRetweets: (0, import_mysql_core.int)("contracted_retweets").default(0).notNull(),
    activatedProfiles: (0, import_mysql_core.int)("activated_profiles").default(0).notNull(),
    generatedContents: (0, import_mysql_core.int)("generated_contents").default(0).notNull(),
    engagements: (0, import_mysql_core.int)().default(0).notNull(),
    impressions: (0, import_mysql_core.int)().default(0).notNull(),
    reach: (0, import_mysql_core.int)().default(0).notNull(),
    executedTweets: (0, import_mysql_core.int)("executed_tweets").default(0).notNull(),
    tweetsImpressions: (0, import_mysql_core.int)("tweets_impressions").default(0).notNull(),
    tweetsReach: (0, import_mysql_core.int)("tweets_reach").default(0).notNull(),
    tweetsEffectiveReach: (0, import_mysql_core.float)("tweets_effective_reach").notNull(),
    executedRetweets: (0, import_mysql_core.int)("executed_retweets").default(0).notNull(),
    responsible: (0, import_mysql_core.varchar)({ length: 255 }),
    startDate: (0, import_mysql_core.date)("start_date", { mode: "date" }),
    endDate: (0, import_mysql_core.date)("end_date", { mode: "date" }),
    status: (0, import_mysql_core.varchar)({ length: 255 }),
    responsibleCommercial: (0, import_mysql_core.varchar)({ length: 255 }),
    tweetsEngagementRate: (0, import_mysql_core.float)("tweets_engagement_rate"),
    tweetsEngagements: (0, import_mysql_core.int)("tweets_engagements"),
    tweetsLikes: (0, import_mysql_core.int)("tweets_likes"),
    tweetsReplies: (0, import_mysql_core.int)("tweets_replies"),
    tweetsRetweets: (0, import_mysql_core.int)("tweets_retweets"),
    totalClicks: (0, import_mysql_core.int)(),
    uniqueClicks: (0, import_mysql_core.int)(),
    community: (0, import_mysql_core.varchar)({ length: 24 }),
    tweetImageEngagementRate: (0, import_mysql_core.float)("tweet_image_engagement_rate"),
    tweetTextEngagementRate: (0, import_mysql_core.float)("tweet_text_engagement_rate"),
    tweetPollEngagementRate: (0, import_mysql_core.float)("tweet_poll_engagement_rate"),
    tweetVideoEngagementRate: (0, import_mysql_core.float)("tweet_video_engagement_rate"),
    potentialReach: (0, import_mysql_core.float)("potential_reach"),
    frequency: (0, import_mysql_core.float)(),
    convertionsCount: (0, import_mysql_core.float)("convertions_count"),
    convertionsValue: (0, import_mysql_core.float)("convertions_value"),
    retweetImpressions: (0, import_mysql_core.int)("retweet_impressions"),
    retweetEngagements: (0, import_mysql_core.int)("retweet_engagements"),
    retweetVideoEngagementRate: (0, import_mysql_core.float)("retweet_video_engagement_rate"),
    retweetPollEngagementRate: (0, import_mysql_core.float)("retweet_poll_engagement_rate"),
    retweetTextEngagementRate: (0, import_mysql_core.float)("retweet_text_engagement_rate"),
    retweetEngagementRate: (0, import_mysql_core.float)("retweet_engagement_rate"),
    retweetImageEngagementRate: (0, import_mysql_core.float)("retweet_image_engagement_rate"),
    retweetsLikes: (0, import_mysql_core.float)("retweets_likes"),
    retweetsReplies: (0, import_mysql_core.float)("retweets_replies"),
    retweetsRetweets: (0, import_mysql_core.float)("retweets_retweets"),
    executedTweetsImage: (0, import_mysql_core.int)("executed_tweets_image"),
    executedTweetsVideo: (0, import_mysql_core.int)("executed_tweets_video"),
    executedTweetsText: (0, import_mysql_core.int)("executed_tweets_text"),
    executedTweetsPoll: (0, import_mysql_core.int)("executed_tweets_poll"),
    executedRetweetsImage: (0, import_mysql_core.int)("executed_retweets_image"),
    executedRetweetsVideo: (0, import_mysql_core.int)("executed_retweets_video"),
    executedRetweetsText: (0, import_mysql_core.int)("executed_retweets_text"),
    executedRetweetsPoll: (0, import_mysql_core.int)("executed_retweets_poll"),
    tweetsImpressionsVideo: (0, import_mysql_core.int)("tweets_impressions_video"),
    tweetsImpressionsImage: (0, import_mysql_core.int)("tweets_impressions_image"),
    tweetsImpressionsText: (0, import_mysql_core.int)("tweets_impressions_text"),
    tweetsImpressionsPoll: (0, import_mysql_core.int)("tweets_impressions_poll"),
    retweetsImpressionsVideo: (0, import_mysql_core.int)("retweets_impressions_video"),
    retweetsImpressionsImage: (0, import_mysql_core.int)("retweets_impressions_image"),
    retweetsImpressionsText: (0, import_mysql_core.int)("retweets_impressions_text"),
    retweetsImpressionsPoll: (0, import_mysql_core.int)("retweets_impressions_poll"),
    cpm: (0, import_mysql_core.float)(),
    cpe: (0, import_mysql_core.float)(),
    mediaValue: (0, import_mysql_core.float)("media_value"),
    roi: (0, import_mysql_core.float)(),
    ctr: (0, import_mysql_core.float)(),
    responsibleTeam: (0, import_mysql_core.varchar)("responsible_team", { length: 255 }),
    convertionsRegisteredCount: (0, import_mysql_core.float)("convertions_registered_count"),
    convertionsRegisteredValue: (0, import_mysql_core.float)("convertions_registered_value"),
    convertionsCommissionToReceive: (0, import_mysql_core.float)("convertions_commission_to_receive"),
    cpa: (0, import_mysql_core.float)(),
    cpc: (0, import_mysql_core.float)()
  },
  (table) => {
    return {
      overviewDefaultIdx: (0, import_mysql_core.index)("overview_default_idx").on(table.campaignId),
      ttOverviewId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "tt_overview_id" })
    };
  }
);
var ttProfileCampaignOverview = (0, import_mysql_core.mysqlTable)(
  "tt_profile_campaign_overview",
  {
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).notNull(),
    date: (0, import_mysql_core.date)({ mode: "date" }),
    campaignUsername: (0, import_mysql_core.varchar)("campaign_username", { length: 255 }),
    campaignTitle: (0, import_mysql_core.varchar)("campaign_title", { length: 255 }).notNull(),
    campaignCustomer: (0, import_mysql_core.varchar)("campaign_customer", { length: 255 }).notNull(),
    campaignTag: (0, import_mysql_core.varchar)("campaign_tag", { length: 255 }),
    username: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    userId: (0, import_mysql_core.varchar)("user_id", { length: 255 }).notNull(),
    followers: (0, import_mysql_core.int)().default(0).notNull(),
    generatedContents: (0, import_mysql_core.int)("generated_contents").default(0).notNull(),
    engagements: (0, import_mysql_core.int)().default(0).notNull(),
    engagementRate: (0, import_mysql_core.float)("engagement_rate"),
    impressions: (0, import_mysql_core.int)().default(0).notNull(),
    reach: (0, import_mysql_core.int)().default(0).notNull(),
    effectiveReach: (0, import_mysql_core.float)("effective_reach"),
    replies: (0, import_mysql_core.int)(),
    likes: (0, import_mysql_core.int)(),
    retweets: (0, import_mysql_core.int)(),
    squidId: (0, import_mysql_core.varchar)("squid_id", { length: 255 }),
    community: (0, import_mysql_core.varchar)({ length: 255 }).default("0").notNull(),
    macro: (0, import_mysql_core.tinyint)().default(0),
    totalClicks: (0, import_mysql_core.int)(),
    uniqueClicks: (0, import_mysql_core.int)(),
    convertionsCount: (0, import_mysql_core.float)("convertions_count"),
    convertionsValue: (0, import_mysql_core.float)("convertions_value"),
    executedTweets: (0, import_mysql_core.int)("executed_tweets").default(0).notNull(),
    executedRetweets: (0, import_mysql_core.int)("executed_retweets").default(0).notNull(),
    convertionsRegisteredCount: (0, import_mysql_core.float)("convertions_registered_count"),
    convertionsRegisteredValue: (0, import_mysql_core.float)("convertions_registered_value"),
    convertionsCommissionToReceive: (0, import_mysql_core.float)("convertions_commission_to_receive")
  },
  (table) => {
    return {
      followupDefaultIdx: (0, import_mysql_core.index)("followup_default_idx").on(table.campaignId)
    };
  }
);
var twitterMedias = (0, import_mysql_core.mysqlTable)(
  "twitter_medias",
  {
    id: (0, import_mysql_core.int)().autoincrement().notNull(),
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).notNull(),
    campaignUsername: (0, import_mysql_core.varchar)("campaign_username", { length: 255 }),
    campaignTitle: (0, import_mysql_core.varchar)("campaign_title", { length: 255 }).notNull(),
    campaignCustomer: (0, import_mysql_core.varchar)("campaign_customer", { length: 255 }).notNull(),
    campaignTag: (0, import_mysql_core.varchar)("campaign_tag", { length: 255 }).notNull(),
    campaignTimezone: (0, import_mysql_core.varchar)("campaign_timezone", { length: 45 }),
    date: (0, import_mysql_core.date)({ mode: "date" }).notNull(),
    idMedia: (0, import_mysql_core.varchar)("id_media", { length: 255 }).notNull(),
    mediaOriginalTimezone: (0, import_mysql_core.varchar)("media_original_timezone", { length: 45 }),
    username: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    userId: (0, import_mysql_core.varchar)("user_id", { length: 255 }).notNull(),
    followers: (0, import_mysql_core.int)().notNull(),
    type: (0, import_mysql_core.varchar)({ length: 25 }).notNull(),
    createdAt: (0, import_mysql_core.datetime)("created_at", { mode: "string" }).notNull(),
    weekday: (0, import_mysql_core.int)().notNull(),
    time: (0, import_mysql_core.varchar)({ length: 255 }).default("").notNull(),
    hour: (0, import_mysql_core.int)().notNull(),
    link: (0, import_mysql_core.varchar)({ length: 255 }).default(""),
    thumbnail: (0, import_mysql_core.varchar)({ length: 500 }),
    likes: (0, import_mysql_core.int)().default(0),
    replies: (0, import_mysql_core.int)().default(0),
    retweets: (0, import_mysql_core.int)().default(0),
    engagements: (0, import_mysql_core.int)().default(0),
    engagementRate: (0, import_mysql_core.float)("engagement_rate"),
    reach: (0, import_mysql_core.int)().default(0),
    impressions: (0, import_mysql_core.int)().default(0),
    status: (0, import_mysql_core.varchar)({ length: 20 }),
    effectiveReach: (0, import_mysql_core.float)("effective_reach"),
    subtype: (0, import_mysql_core.varchar)({ length: 25 }),
    // Warning: Can't parse bit(1) from database
    // bit(1)Type: bit(1)("last_media"),
    community: (0, import_mysql_core.varchar)({ length: 24 }),
    caption: (0, import_mysql_core.text)(),
    obtainedOn: (0, import_mysql_core.datetime)("obtained_on", { mode: "string" }),
    capture: (0, import_mysql_core.varchar)({ length: 45 })
  },
  (table) => {
    return {
      queryDefaultIdx: (0, import_mysql_core.index)("query_default_idx").on(table.campaignId, table.status, table.type),
      twitterMediasId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "twitter_medias_id" })
    };
  }
);
var twitterTiers = (0, import_mysql_core.mysqlTable)(
  "twitter_tiers",
  {
    id: (0, import_mysql_core.int)().autoincrement().notNull(),
    label: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    min: (0, import_mysql_core.int)().default(0),
    max: (0, import_mysql_core.int)()
  },
  (table) => {
    return {
      twitterTiersId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "twitter_tiers_id" })
    };
  }
);
var youtubeMedias = (0, import_mysql_core.mysqlTable)(
  "youtube_medias",
  {
    id: (0, import_mysql_core.int)().autoincrement().notNull(),
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).notNull(),
    campaignTitle: (0, import_mysql_core.varchar)("campaign_title", { length: 255 }).notNull(),
    campaignCustomer: (0, import_mysql_core.varchar)("campaign_customer", { length: 255 }).notNull(),
    campaignTimezone: (0, import_mysql_core.varchar)("campaign_timezone", { length: 45 }),
    date: (0, import_mysql_core.datetime)({ mode: "string" }).notNull(),
    idMedia: (0, import_mysql_core.varchar)("id_media", { length: 255 }).notNull(),
    mediaOriginalTimezone: (0, import_mysql_core.varchar)("media_original_timezone", { length: 45 }),
    channel: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    userId: (0, import_mysql_core.varchar)("user_id", { length: 255 }).notNull(),
    squidId: (0, import_mysql_core.varchar)("squid_id", { length: 255 }).notNull(),
    googleId: (0, import_mysql_core.varchar)("google_id", { length: 255 }),
    followers: (0, import_mysql_core.int)().default(0).notNull(),
    type: (0, import_mysql_core.varchar)({ length: 45 }).default("video").notNull(),
    weekday: (0, import_mysql_core.int)().notNull(),
    time: (0, import_mysql_core.varchar)({ length: 255 }).default("").notNull(),
    hour: (0, import_mysql_core.int)().notNull(),
    link: (0, import_mysql_core.varchar)({ length: 255 }).default(""),
    thumbnail: (0, import_mysql_core.varchar)({ length: 500 }),
    likes: (0, import_mysql_core.int)(),
    comments: (0, import_mysql_core.int)(),
    dislikes: (0, import_mysql_core.int)(),
    shares: (0, import_mysql_core.int)(),
    engagements: (0, import_mysql_core.int)(),
    engagementRate: (0, import_mysql_core.float)("engagement_rate"),
    reach: (0, import_mysql_core.int)(),
    effectiveReach: (0, import_mysql_core.int)("effective_reach"),
    views: (0, import_mysql_core.int)(),
    estimatedMinutesWatched: (0, import_mysql_core.int)("estimated_minutes_watched"),
    status: (0, import_mysql_core.varchar)({ length: 20 }),
    // Warning: Can't parse bit(1) from database
    // bit(1)Type: bit(1)("last_media"),
    community: (0, import_mysql_core.varchar)({ length: 24 }).notNull(),
    subscribedViews: (0, import_mysql_core.int)("subscribed_views"),
    subscribedLikes: (0, import_mysql_core.int)("subscribed_likes"),
    subscribedDislikes: (0, import_mysql_core.int)("subscribed_dislikes"),
    subscribedShares: (0, import_mysql_core.int)("subscribed_shares"),
    subscribedEstimatedMinutesWatched: (0, import_mysql_core.int)("subscribed_estimated_minutes_watched"),
    unsubscribedViews: (0, import_mysql_core.int)("unsubscribed_views"),
    unsubscribedLikes: (0, import_mysql_core.int)("unsubscribed_likes"),
    unsubscribedDislikes: (0, import_mysql_core.int)("unsubscribed_dislikes"),
    unsubscribedShares: (0, import_mysql_core.int)("unsubscribed_shares"),
    unsubscribedEstimatedMinutesWatched: (0, import_mysql_core.int)("unsubscribed_estimated_minutes_watched"),
    createdAt: (0, import_mysql_core.datetime)("created_at", { mode: "string" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    caption: (0, import_mysql_core.text)(),
    obtainedOn: (0, import_mysql_core.datetime)("obtained_on", { mode: "string" }),
    capture: (0, import_mysql_core.varchar)({ length: 45 })
  },
  (table) => {
    return {
      queryDefaultIdx: (0, import_mysql_core.index)("query_default_idx").on(table.campaignId, table.type, table.status),
      youtubeMediasId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "youtube_medias_id" })
    };
  }
);
var youtubeTiers = (0, import_mysql_core.mysqlTable)(
  "youtube_tiers",
  {
    id: (0, import_mysql_core.int)().autoincrement().notNull(),
    label: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    min: (0, import_mysql_core.int)().default(0),
    max: (0, import_mysql_core.int)()
  },
  (table) => {
    return {
      youtubeTiersId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "youtube_tiers_id" })
    };
  }
);
var youtubeAgeBrackets = [
  "13-17",
  "18-24",
  "25-34",
  "35-44",
  "45-54",
  "55-64",
  "65-"
];
var youtubeGenderBrackets = [
  "MALE",
  "FEMALE",
  "OTHERS"
];
var ytAudienceAge = (0, import_mysql_core.mysqlTable)(
  "yt_audience_age",
  {
    profileId: (0, import_mysql_core.varchar)({ length: 150 }).notNull(),
    age: (0, import_mysql_core.mysqlEnum)(youtubeAgeBrackets).notNull(),
    type: (0, import_mysql_core.varchar)({ length: 50 }),
    percentage: (0, import_mysql_core.float)(),
    updatedAt: (0, import_mysql_core.date)({ mode: "date" })
  },
  (table) => {
    return {
      ytAudienceAgeProfileIdAge: (0, import_mysql_core.primaryKey)({ columns: [table.profileId, table.age], name: "yt_audience_age_profileId_age" })
    };
  }
);
var ytAudienceCountry = (0, import_mysql_core.mysqlTable)(
  "yt_audience_country",
  {
    profileId: (0, import_mysql_core.varchar)({ length: 150 }).notNull(),
    countryCode: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    type: (0, import_mysql_core.varchar)({ length: 50 }),
    percentage: (0, import_mysql_core.float)(),
    updatedAt: (0, import_mysql_core.date)({ mode: "date" })
  },
  (table) => {
    return {
      ytAudienceCountryProfileIdCountryCode: (0, import_mysql_core.primaryKey)({ columns: [table.profileId, table.countryCode], name: "yt_audience_country_profileId_countryCode" })
    };
  }
);
var ytAudienceGender = (0, import_mysql_core.mysqlTable)(
  "yt_audience_gender",
  {
    profileId: (0, import_mysql_core.varchar)({ length: 150 }).notNull(),
    gender: (0, import_mysql_core.mysqlEnum)(youtubeGenderBrackets).notNull(),
    type: (0, import_mysql_core.varchar)({ length: 50 }),
    percentage: (0, import_mysql_core.float)(),
    updatedAt: (0, import_mysql_core.date)({ mode: "date" })
  },
  (table) => {
    return {
      ytAudienceGenderProfileIdGender: (0, import_mysql_core.primaryKey)({ columns: [table.profileId, table.gender], name: "yt_audience_gender_profileId_gender" })
    };
  }
);
var ytAudienceGenderAge = (0, import_mysql_core.mysqlTable)(
  "yt_audience_gender_age",
  {
    profileId: (0, import_mysql_core.varchar)({ length: 150 }).notNull(),
    gender: (0, import_mysql_core.mysqlEnum)(youtubeGenderBrackets).notNull(),
    age: (0, import_mysql_core.mysqlEnum)(youtubeAgeBrackets).notNull(),
    type: (0, import_mysql_core.varchar)({ length: 50 }),
    percentage: (0, import_mysql_core.float)(),
    updatedAt: (0, import_mysql_core.date)({ mode: "date" })
  },
  (table) => {
    return {
      ytAudienceGenderAgeProfileIdGenderAge: (0, import_mysql_core.primaryKey)({ columns: [table.profileId, table.gender, table.age], name: "yt_audience_gender_age_profileId_gender_age" })
    };
  }
);
var ytOverview = (0, import_mysql_core.mysqlTable)(
  "yt_overview",
  {
    id: (0, import_mysql_core.int)().autoincrement().notNull(),
    campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).notNull(),
    campaignTitle: (0, import_mysql_core.varchar)("campaign_title", { length: 255 }),
    campaignCustomer: (0, import_mysql_core.varchar)("campaign_customer", { length: 255 }),
    responsible: (0, import_mysql_core.varchar)({ length: 255 }),
    date: (0, import_mysql_core.date)({ mode: "date" }),
    startDate: (0, import_mysql_core.date)("start_date", { mode: "date" }),
    endDate: (0, import_mysql_core.date)("end_date", { mode: "date" }),
    status: (0, import_mysql_core.varchar)({ length: 255 }),
    responsibleCommercial: (0, import_mysql_core.varchar)({ length: 255 }),
    totalClicks: (0, import_mysql_core.int)(),
    uniqueClicks: (0, import_mysql_core.int)(),
    community: (0, import_mysql_core.varchar)({ length: 24 }),
    convertionsCount: (0, import_mysql_core.float)("convertions_count"),
    convertionsValue: (0, import_mysql_core.float)("convertions_value"),
    contractedProfiles: (0, import_mysql_core.int)("contracted_profiles"),
    activatedProfiles: (0, import_mysql_core.int)("activated_profiles"),
    potentialReach: (0, import_mysql_core.int)("potential_reach"),
    contractedVideos: (0, import_mysql_core.int)("contracted_videos"),
    generatedContents: (0, import_mysql_core.int)("generated_contents"),
    executedVideos: (0, import_mysql_core.int)("executed_videos"),
    impressions: (0, import_mysql_core.int)(),
    reach: (0, import_mysql_core.int)(),
    effectiveReach: (0, import_mysql_core.int)("effective_reach"),
    engagements: (0, import_mysql_core.int)(),
    engagementRate: (0, import_mysql_core.float)("engagement_rate"),
    likes: (0, import_mysql_core.int)(),
    comments: (0, import_mysql_core.int)(),
    dislikes: (0, import_mysql_core.int)(),
    shares: (0, import_mysql_core.int)(),
    estimatedMinutesWatched: (0, import_mysql_core.int)("estimated_minutes_watched"),
    subscribedViews: (0, import_mysql_core.int)("subscribed_views"),
    subscribedLikes: (0, import_mysql_core.int)("subscribed_likes"),
    subscribedDislikes: (0, import_mysql_core.int)("subscribed_dislikes"),
    subscribedShares: (0, import_mysql_core.int)("subscribed_shares"),
    subscribedEstimatedMinutesWatched: (0, import_mysql_core.int)("subscribed_estimated_minutes_watched"),
    unsubscribedViews: (0, import_mysql_core.int)("unsubscribed_views"),
    unsubscribedLikes: (0, import_mysql_core.int)("unsubscribed_likes"),
    unsubscribedDislikes: (0, import_mysql_core.int)("unsubscribed_dislikes"),
    unsubscribedShares: (0, import_mysql_core.int)("unsubscribed_shares"),
    unsubscribedEstimatedMinutesWatched: (0, import_mysql_core.int)("unsubscribed_estimated_minutes_watched"),
    createdAt: (0, import_mysql_core.datetime)("created_at", { mode: "string" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    cpm: (0, import_mysql_core.float)(),
    cpe: (0, import_mysql_core.float)(),
    mediaValue: (0, import_mysql_core.float)("media_value"),
    roi: (0, import_mysql_core.float)(),
    ctr: (0, import_mysql_core.float)(),
    responsibleTeam: (0, import_mysql_core.varchar)("responsible_team", { length: 255 }),
    convertionsRegisteredCount: (0, import_mysql_core.float)("convertions_registered_count"),
    convertionsRegisteredValue: (0, import_mysql_core.float)("convertions_registered_value"),
    convertionsCommissionToReceive: (0, import_mysql_core.float)("convertions_commission_to_receive"),
    cpc: (0, import_mysql_core.float)()
  },
  (table) => {
    return {
      ytOverviewId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "yt_overview_id" })
    };
  }
);
var ytProfileCampaignOverview = (0, import_mysql_core.mysqlTable)("yt_profile_campaign_overview", {
  campaignId: (0, import_mysql_core.varchar)("campaign_id", { length: 255 }).default("").notNull(),
  campaignTitle: (0, import_mysql_core.varchar)("campaign_title", { length: 255 }).default("").notNull(),
  campaignCustomer: (0, import_mysql_core.varchar)("campaign_customer", { length: 255 }).default("").notNull(),
  community: (0, import_mysql_core.varchar)({ length: 255 }),
  date: (0, import_mysql_core.date)({ mode: "date" }).notNull(),
  channel: (0, import_mysql_core.varchar)({ length: 255 }).default("").notNull(),
  userId: (0, import_mysql_core.varchar)("user_id", { length: 255 }).default("").notNull(),
  squidId: (0, import_mysql_core.varchar)("squid_id", { length: 255 }).default("").notNull(),
  googleId: (0, import_mysql_core.varchar)("google_id", { length: 255 }),
  executedVideos: (0, import_mysql_core.int)("executed_videos").notNull(),
  likes: (0, import_mysql_core.int)().notNull(),
  comments: (0, import_mysql_core.int)().notNull(),
  dislikes: (0, import_mysql_core.int)().notNull(),
  views: (0, import_mysql_core.int)().notNull(),
  shares: (0, import_mysql_core.int)().notNull(),
  estimatedMinutesWatched: (0, import_mysql_core.int)("estimated_minutes_watched").notNull(),
  engagements: (0, import_mysql_core.int)(),
  subscribedViews: (0, import_mysql_core.int)("subscribed_views").notNull(),
  subscribedLikes: (0, import_mysql_core.int)("subscribed_likes").notNull(),
  subscribedDislikes: (0, import_mysql_core.int)("subscribed_dislikes").notNull(),
  subscribedShares: (0, import_mysql_core.int)("subscribed_shares").notNull(),
  subscribedEstimatedMinutesWatched: (0, import_mysql_core.int)("subscribed_estimated_minutes_watched").notNull(),
  unsubscribedViews: (0, import_mysql_core.int)("unsubscribed_views").notNull(),
  unsubscribedLikes: (0, import_mysql_core.int)("unsubscribed_likes").notNull(),
  unsubscribedDislikes: (0, import_mysql_core.int)("unsubscribed_dislikes").notNull(),
  unsubscribedShares: (0, import_mysql_core.int)("unsubscribed_shares").notNull(),
  unsubscribedEstimatedMinutesWatched: (0, import_mysql_core.int)("unsubscribed_estimated_minutes_watched").notNull(),
  macro: (0, import_mysql_core.tinyint)().default(0),
  totalClicks: (0, import_mysql_core.int)(),
  uniqueClicks: (0, import_mysql_core.int)(),
  convertionsCount: (0, import_mysql_core.float)("convertions_count"),
  convertionsValue: (0, import_mysql_core.float)("convertions_value"),
  generatedContents: (0, import_mysql_core.int)("generated_contents").default(0).notNull(),
  convertionsRegisteredCount: (0, import_mysql_core.float)("convertions_registered_count"),
  convertionsRegisteredValue: (0, import_mysql_core.float)("convertions_registered_value"),
  convertionsCommissionToReceive: (0, import_mysql_core.float)("convertions_commission_to_receive")
});

// src/databases/influencers/schema.ts
var schema_exports2 = {};
__export(schema_exports2, {
  blockedtags: () => blockedtags,
  blockedusers: () => blockedusers,
  deletedProfiles: () => deletedProfiles,
  facebookTokens: () => facebookTokens,
  facebookTokensHistory: () => facebookTokensHistory,
  facebookTokensMetadata: () => facebookTokensMetadata,
  fullInstagramProfile: () => fullInstagramProfile,
  fullInstagramProfileAll: () => fullInstagramProfileAll,
  genders: () => genders,
  googleTokens: () => googleTokens,
  idInstagramUpdate: () => idInstagramUpdate,
  influencerMetrics: () => influencerMetrics,
  instagramProfileMetrics: () => instagramProfileMetrics,
  instagramProfiles: () => instagramProfiles,
  locations: () => locations,
  notSearchableUsers: () => notSearchableUsers,
  pinterestProfiles: () => pinterestProfiles,
  profileAdditionalInfoBanks: () => profileAdditionalInfoBanks,
  profileAdditionalInfos: () => profileAdditionalInfos,
  profileAdditionalInfosOld: () => profileAdditionalInfosOld,
  profileAdditionalInfosWhitelabels: () => profileAdditionalInfosWhitelabels,
  profileCategories: () => profileCategories,
  profileWhitelabels: () => profileWhitelabels,
  profiles: () => profiles,
  progressiveRegistrationAnswers: () => progressiveRegistrationAnswers,
  progressiveRegistrationGroups: () => progressiveRegistrationGroups,
  progressiveRegistrationLabels: () => progressiveRegistrationLabels,
  progressiveRegistrationQuestionOptions: () => progressiveRegistrationQuestionOptions,
  progressiveRegistrationQuestions: () => progressiveRegistrationQuestions,
  progressiveRegistrationWhitelabels: () => progressiveRegistrationWhitelabels,
  races: () => races,
  scopesToken: () => scopesToken,
  socialNetworkProfiles: () => socialNetworkProfiles,
  socialNetworkProfilesCache: () => socialNetworkProfilesCache,
  socialNetworkProfilesCacheNew: () => socialNetworkProfilesCacheNew,
  socialNetworkProfilesCategories: () => socialNetworkProfilesCategories,
  socialNetworkProfilesCategoriesWhitelabels: () => socialNetworkProfilesCategoriesWhitelabels,
  socialNetworkProfilesWhitelabels: () => socialNetworkProfilesWhitelabels,
  stopWords: () => stopWords,
  tiktokProfiles: () => tiktokProfiles,
  tiktokTokens: () => tiktokTokens,
  twitterProfiles: () => twitterProfiles,
  twitterTokens: () => twitterTokens,
  vwInfluencersCanAnticipate: () => vwInfluencersCanAnticipate,
  vwInfluencersToValidateBankAccount: () => vwInfluencersToValidateBankAccount,
  vwProgressiveRegistrationAnswers: () => vwProgressiveRegistrationAnswers,
  vwProgressiveRegistrationQuestions: () => vwProgressiveRegistrationQuestions,
  youtubeProfiles: () => youtubeProfiles
});
var import_drizzle_orm2 = require("drizzle-orm");
var import_mysql_core2 = require("drizzle-orm/mysql-core");
var blockedtags = (0, import_mysql_core2.mysqlTable)(
  "blockedtags",
  {
    id: (0, import_mysql_core2.int)().autoincrement().notNull(),
    tag: (0, import_mysql_core2.varchar)({ length: 20 })
  },
  (table) => {
    return {
      blockedtagsId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "blockedtags_id" }),
      tag: (0, import_mysql_core2.unique)("tag").on(table.tag)
    };
  }
);
var blockedusers = (0, import_mysql_core2.mysqlTable)(
  "blockedusers",
  {
    profileId: (0, import_mysql_core2.varchar)({ length: 36 }).notNull().references(() => profiles.id),
    whitelabel: (0, import_mysql_core2.varchar)({ length: 24 }).default("-").notNull(),
    organization: (0, import_mysql_core2.varchar)({ length: 24 }).default("-").notNull(),
    reason: (0, import_mysql_core2.varchar)({ length: 255 }).notNull(),
    responsibleId: (0, import_mysql_core2.varchar)({ length: 255 }).notNull(),
    responsibleFullName: (0, import_mysql_core2.varchar)({ length: 255 }).notNull(),
    unregistered: (0, import_mysql_core2.tinyint)().default(0).notNull(),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    logstashProcessedAt: (0, import_mysql_core2.datetime)({ mode: "date" }),
    deletedAt: (0, import_mysql_core2.datetime)({ mode: "date" }),
    campaignId: (0, import_mysql_core2.varchar)({ length: 255 }),
    campaignName: (0, import_mysql_core2.varchar)({ length: 255 })
  },
  (table) => {
    return {
      blockedusersProfileIdWhitelabel: (0, import_mysql_core2.primaryKey)({ columns: [table.profileId, table.whitelabel], name: "blockedusers_profileId_whitelabel" })
    };
  }
);
var deletedProfiles = (0, import_mysql_core2.mysqlTable)(
  "deletedProfiles",
  {
    id: (0, import_mysql_core2.int)().autoincrement().notNull(),
    profileId: (0, import_mysql_core2.varchar)({ length: 50 }).notNull(),
    community: (0, import_mysql_core2.varchar)({ length: 255 }),
    motivation: (0, import_mysql_core2.varchar)({ length: 255 }).notNull(),
    deletionDate: (0, import_mysql_core2.date)({ mode: "date" }).notNull(),
    email: (0, import_mysql_core2.varchar)({ length: 255 }),
    document: (0, import_mysql_core2.varchar)({ length: 45 }),
    recordEmployment: (0, import_mysql_core2.varchar)({ length: 50 }),
    createdAt: (0, import_mysql_core2.date)({ mode: "date" }),
    updatedAt: (0, import_mysql_core2.date)({ mode: "date" })
  },
  (table) => {
    return {
      deletedProfilesId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "deletedProfiles_id" })
    };
  }
);
var facebookTokens = (0, import_mysql_core2.mysqlTable)(
  "facebookTokens",
  {
    profileId: (0, import_mysql_core2.varchar)({ length: 50 }).notNull(),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`),
    valid: (0, import_mysql_core2.tinyint)(),
    expiresAt: (0, import_mysql_core2.datetime)({ mode: "date" }),
    status: (0, import_mysql_core2.varchar)({ length: 1e3 }),
    permanentToken: (0, import_mysql_core2.varchar)({ length: 512 }),
    accessToken: (0, import_mysql_core2.varchar)({ length: 512 }),
    sevenDaysNotified: (0, import_mysql_core2.tinyint)(),
    expiredTokenNotified: (0, import_mysql_core2.tinyint)(),
    instagramBusinessId: (0, import_mysql_core2.varchar)({ length: 30 }),
    facebookPageId: (0, import_mysql_core2.varchar)({ length: 30 }),
    facebookUserId: (0, import_mysql_core2.varchar)({ length: 30 })
  },
  (table) => {
    return {
      // validIdx: index().on(table.valid),
      notificationIdx: (0, import_mysql_core2.index)("notification_index").on(table.valid, table.expiredTokenNotified, table.sevenDaysNotified, table.expiresAt),
      instagramBusinessIdIdx: (0, import_mysql_core2.index)("facebookTokens_instagramBusinessId_IDX").on(table.instagramBusinessId),
      facebookTokensProfileId: (0, import_mysql_core2.primaryKey)({ columns: [table.profileId], name: "facebookTokens_profileId" })
    };
  }
);
var facebookTokensMetadata = (0, import_mysql_core2.mysqlTable)(
  "facebookTokensMetadata",
  {
    instagramBusinessAccountId: (0, import_mysql_core2.varchar)({ length: 50 }).notNull().references(() => facebookTokens.profileId, { onDelete: "cascade", onUpdate: "cascade" }),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)`),
    checkResult: (0, import_mysql_core2.varchar)({ length: 20 }),
    validationCode: (0, import_mysql_core2.varchar)({ length: 100 }),
    facebookDataFetchDetails: (0, import_mysql_core2.text)(),
    facebookValidateDetails: (0, import_mysql_core2.text)(),
    tokenType: (0, import_mysql_core2.varchar)({ length: 50 }),
    userAccessToken: (0, import_mysql_core2.varchar)({ length: 255 })
  },
  (table) => {
    return {
      facebookTokensMetadataProfileId: (0, import_mysql_core2.primaryKey)({ columns: [table.instagramBusinessAccountId], name: "facebookTokensMetadata_instagramBusinessAccountId" }),
      idxInstagramBusinessAccount: (0, import_mysql_core2.index)("idx_instagram_business_account").on(table.instagramBusinessAccountId),
      idxCreatedAt: (0, import_mysql_core2.index)("idx_created_at").on(table.createdAt),
      idxcheckResult: (0, import_mysql_core2.index)("idx_check_result").on(table.checkResult)
    };
  }
);
var facebookTokensHistory = (0, import_mysql_core2.mysqlTable)(
  "facebookTokensHistory",
  {
    instagramBusinessAccountId: (0, import_mysql_core2.varchar)({ length: 50 }).notNull().references(() => facebookTokens.profileId, { onDelete: "cascade", onUpdate: "cascade" }),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)`),
    oldStatus: (0, import_mysql_core2.varchar)({ length: 20 }),
    newStatus: (0, import_mysql_core2.varchar)({ length: 20 }),
    updateReason: (0, import_mysql_core2.varchar)({ length: 250 })
  },
  (table) => {
    return {
      facebookTokensHistoryProfileId: (0, import_mysql_core2.primaryKey)({ columns: [table.instagramBusinessAccountId], name: "facebookTokensHistory_instagramBusinessAccountId" }),
      idxInstagramBusinessAccount: (0, import_mysql_core2.index)("idx_instagram_business_account").on(table.instagramBusinessAccountId),
      idxCreatedAt: (0, import_mysql_core2.index)("idx_created_at").on(table.createdAt),
      idxUpdateReason: (0, import_mysql_core2.index)("idx_update_reason").on(table.updateReason)
    };
  }
);
var genders = (0, import_mysql_core2.mysqlTable)(
  "genders",
  {
    id: (0, import_mysql_core2.int)().autoincrement().notNull(),
    description: (0, import_mysql_core2.varchar)({ length: 50 }).notNull(),
    descriptionEn: (0, import_mysql_core2.varchar)("description_en", { length: 50 }).notNull(),
    descriptionEs: (0, import_mysql_core2.varchar)("description_es", { length: 255 })
  },
  (table) => {
    return {
      gendersId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "genders_id" })
    };
  }
);
var googleTokens = (0, import_mysql_core2.mysqlTable)(
  "googleTokens",
  {
    profileId: (0, import_mysql_core2.varchar)({ length: 50 }).notNull(),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`),
    valid: (0, import_mysql_core2.tinyint)(),
    expiresAt: (0, import_mysql_core2.datetime)({ mode: "date" }),
    status: (0, import_mysql_core2.varchar)({ length: 1e3 }),
    provider: (0, import_mysql_core2.varchar)({ length: 50 }),
    accessToken: (0, import_mysql_core2.varchar)({ length: 512 }),
    refreshToken: (0, import_mysql_core2.varchar)({ length: 128 }),
    expiresIn: (0, import_mysql_core2.bigint)({ mode: "number" }),
    connection: (0, import_mysql_core2.varchar)({ length: 50 }),
    isSocial: (0, import_mysql_core2.tinyint)(),
    gcloudProject: (0, import_mysql_core2.varchar)({ length: 45 }).default("squid-apis")
  },
  (table) => {
    return {
      // validIdx: index().on(table.valid),
      googleTokensProfileId: (0, import_mysql_core2.primaryKey)({ columns: [table.profileId], name: "googleTokens_profileId" })
    };
  }
);
var idInstagramUpdate = (0, import_mysql_core2.mysqlTable)("idInstagramUpdate", {
  id: (0, import_mysql_core2.varchar)({ length: 100 })
});
var influencerMetrics = (0, import_mysql_core2.mysqlTable)(
  "influencer_metrics",
  {
    name: (0, import_mysql_core2.varchar)({ length: 200 }).notNull(),
    value: (0, import_mysql_core2.float)(),
    date: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`),
    id: (0, import_mysql_core2.varchar)({ length: 100 }).notNull(),
    socialNetwork: (0, import_mysql_core2.varchar)({ length: 100 }).notNull(),
    observation: (0, import_mysql_core2.varchar)({ length: 200 }),
    type: (0, import_mysql_core2.mysqlEnum)(["facebook", "tiktok", "twitter", "youtube"]),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" })
  },
  (table) => {
    return {
      dateIdx: (0, import_mysql_core2.index)("influencer_metrics_date_IDX").on(table.date),
      influencerMetricsIdSocialNetworkName: (0, import_mysql_core2.primaryKey)({ columns: [table.id, table.socialNetwork, table.name], name: "influencer_metrics_id_socialNetwork_name" })
    };
  }
);
var instagramProfiles = (0, import_mysql_core2.mysqlTable)(
  "instagramProfiles",
  {
    id: (0, import_mysql_core2.varchar)({ length: 50 }).notNull(),
    username: (0, import_mysql_core2.varchar)({ length: 255 }),
    exists: (0, import_mysql_core2.tinyint)().default(1).notNull(),
    searchable: (0, import_mysql_core2.tinyint)().default(1).notNull(),
    macro: (0, import_mysql_core2.tinyint)().default(0),
    notSearchReason: (0, import_mysql_core2.varchar)({ length: 255 }),
    brandUser: (0, import_mysql_core2.tinyint)().default(0).notNull(),
    picture: (0, import_mysql_core2.text)(),
    fullName: (0, import_mysql_core2.varchar)({ length: 255 }),
    email: (0, import_mysql_core2.varchar)({ length: 255 }),
    bio: (0, import_mysql_core2.text)(),
    website: (0, import_mysql_core2.varchar)({ length: 255 }),
    language: (0, import_mysql_core2.varchar)({ length: 10 }),
    isBusiness: (0, import_mysql_core2.tinyint)().default(0).notNull(),
    isWorkAccount: (0, import_mysql_core2.tinyint)(),
    hasSkip: (0, import_mysql_core2.tinyint)(),
    facebookUserId: (0, import_mysql_core2.varchar)({ length: 30 }),
    facebookPageId: (0, import_mysql_core2.varchar)({ length: 30 }),
    instagramBusinessId: (0, import_mysql_core2.varchar)({ length: 30 }),
    scrapperEngagementRate: (0, import_mysql_core2.float)().notNull(),
    engagementRate: (0, import_mysql_core2.float)(),
    totalMedias: (0, import_mysql_core2.int)().default(0).notNull(),
    medias: (0, import_mysql_core2.int)().default(0).notNull(),
    followers: (0, import_mysql_core2.int)().default(0).notNull(),
    follows: (0, import_mysql_core2.int)().default(0).notNull(),
    likes: (0, import_mysql_core2.int)().default(0).notNull(),
    comments: (0, import_mysql_core2.int)().default(0).notNull(),
    tier: (0, import_mysql_core2.varchar)({ length: 45 }).default("undefined").notNull(),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    logstashProcessedAt: (0, import_mysql_core2.datetime)({ mode: "date" }),
    score: (0, import_mysql_core2.float)(),
    score1: (0, import_mysql_core2.float)(),
    score2: (0, import_mysql_core2.float)(),
    score3: (0, import_mysql_core2.float)(),
    score4: (0, import_mysql_core2.float)(),
    score5: (0, import_mysql_core2.float)(),
    storiesEngagementRate: (0, import_mysql_core2.float)(),
    postEffectiveReach: (0, import_mysql_core2.float)(),
    storiesEffectiveReach: (0, import_mysql_core2.float)(),
    profileViews: (0, import_mysql_core2.int)(),
    hasMediaKit: (0, import_mysql_core2.tinyint)().default(0),
    categorizedAt: (0, import_mysql_core2.datetime)({ mode: "date" }),
    averageComments: (0, import_mysql_core2.float)().notNull(),
    averageCommentsImage: (0, import_mysql_core2.float)().notNull(),
    averageCommentsVideo: (0, import_mysql_core2.float)().notNull(),
    averageCommentsCarousel: (0, import_mysql_core2.float)().notNull(),
    averageLikes: (0, import_mysql_core2.float)().notNull(),
    averageLikesImage: (0, import_mysql_core2.float)().notNull(),
    averageLikesVideo: (0, import_mysql_core2.float)().notNull(),
    averageLikesCarousel: (0, import_mysql_core2.float)().notNull(),
    commentLikesRate: (0, import_mysql_core2.float)().notNull(),
    commentsRate: (0, import_mysql_core2.float)().notNull(),
    totalStoriesImpressions: (0, import_mysql_core2.float)(),
    totalStoriesReach: (0, import_mysql_core2.float)(),
    totalStoriesReplies: (0, import_mysql_core2.float)(),
    totalStoriesTapBacks: (0, import_mysql_core2.float)(),
    totalStoriesTapFowardExits: (0, import_mysql_core2.float)().notNull(),
    totalPostsReach: (0, import_mysql_core2.float)(),
    totalPostsSaves: (0, import_mysql_core2.float)(),
    totalPostsImpressions: (0, import_mysql_core2.float)(),
    averageSaved: (0, import_mysql_core2.float)().notNull(),
    averageSavedImage: (0, import_mysql_core2.float)().notNull(),
    averageSavedVideo: (0, import_mysql_core2.float)().notNull(),
    averageSavedCarousel: (0, import_mysql_core2.float)().notNull(),
    averageTapBacks: (0, import_mysql_core2.float)().notNull(),
    averageTapBacksImage: (0, import_mysql_core2.float)().notNull(),
    averageTapBacksVideo: (0, import_mysql_core2.float)().notNull(),
    averageReplies: (0, import_mysql_core2.float)().notNull(),
    averageRepliesImage: (0, import_mysql_core2.float)().notNull(),
    averageRepliesVideo: (0, import_mysql_core2.float)().notNull(),
    averageTapFowardExits: (0, import_mysql_core2.float)().notNull(),
    averageTapFowardExitsImage: (0, import_mysql_core2.float)().notNull(),
    averageTapFowardExitsVideo: (0, import_mysql_core2.float)().notNull(),
    completeVideoStoriesRate: (0, import_mysql_core2.float)().notNull(),
    numberPostsActivityScore: (0, import_mysql_core2.float)(),
    numberStoriesScore: (0, import_mysql_core2.float)(),
    daysPostsScore: (0, import_mysql_core2.float)(),
    daysStoriesScore: (0, import_mysql_core2.float)(),
    advertisingPostsEngagementRate: (0, import_mysql_core2.float)(),
    noAdvertisingPostsEngagementRate: (0, import_mysql_core2.float)(),
    advertisingStoriesEngagementRate: (0, import_mysql_core2.float)(),
    noAdvertisingStoriesEngagementRate: (0, import_mysql_core2.float)(),
    advertisingContentPercentage: (0, import_mysql_core2.float)(),
    advertisingPostsPercentage: (0, import_mysql_core2.float)(),
    advertisingStoriesPercentage: (0, import_mysql_core2.float)(),
    postImageEngagementRate: (0, import_mysql_core2.float)(),
    postCarouselEngagementRate: (0, import_mysql_core2.float)(),
    postVideoEngagementRate: (0, import_mysql_core2.float)(),
    storiesVideoEngagementRate: (0, import_mysql_core2.float)(),
    storiesImageEngagementRate: (0, import_mysql_core2.float)(),
    storiesCompleteEngagementRate: (0, import_mysql_core2.float)(),
    averagePostsReach: (0, import_mysql_core2.float)().notNull(),
    averagePostsImpressions: (0, import_mysql_core2.float)().notNull(),
    averagePostsFrequency: (0, import_mysql_core2.float)().notNull(),
    averageStoriesReach: (0, import_mysql_core2.float)().notNull(),
    averageStoriesImpressions: (0, import_mysql_core2.float)().notNull(),
    averageStoriesFrequency: (0, import_mysql_core2.float)().notNull(),
    adPostPermanceEngagementRate: (0, import_mysql_core2.float)(),
    adStoriesPermanceEngagementRate: (0, import_mysql_core2.float)(),
    identifyAt: (0, import_mysql_core2.datetime)({ mode: "date" }),
    estimateMetric: (0, import_mysql_core2.tinyint)().default(0),
    totalReels: (0, import_mysql_core2.float)(),
    totalReachReels: (0, import_mysql_core2.float)(),
    reelsEffectiveReach: (0, import_mysql_core2.float)(),
    totalPlaysReels: (0, import_mysql_core2.float)(),
    averagePlaysReels: (0, import_mysql_core2.float)(),
    totalEngagementReels: (0, import_mysql_core2.float)(),
    reelsEngagementRate: (0, import_mysql_core2.float)(),
    averageLikesReels: (0, import_mysql_core2.float)(),
    averageCommentsReels: (0, import_mysql_core2.float)(),
    averageSavesReels: (0, import_mysql_core2.float)(),
    hasMediaBoost: (0, import_mysql_core2.tinyint)().default(0).notNull(),
    statusUidMigration: (0, import_mysql_core2.varchar)({ length: 255 }).default("Not processed"),
    oldIgId: (0, import_mysql_core2.varchar)({ length: 50 }),
    postCpm: (0, import_mysql_core2.float)(),
    storySequenceCpm: (0, import_mysql_core2.float)(),
    reelCpm: (0, import_mysql_core2.float)(),
    cache: (0, import_mysql_core2.float)(),
    postValue: (0, import_mysql_core2.float)(),
    storySequenceValue: (0, import_mysql_core2.float)(),
    reelValue: (0, import_mysql_core2.float)(),
    medianPostsReach: (0, import_mysql_core2.float)(),
    medianPostsSaves: (0, import_mysql_core2.float)(),
    medianPostsImpressions: (0, import_mysql_core2.float)(),
    medianStoriesImpressions: (0, import_mysql_core2.float)(),
    medianStoriesReach: (0, import_mysql_core2.float)(),
    medianStoriesReplies: (0, import_mysql_core2.float)(),
    medianStoriesTapBacks: (0, import_mysql_core2.float)(),
    medianStoriesTapFowardExits: (0, import_mysql_core2.float)(),
    medianReachReels: (0, import_mysql_core2.float)(),
    medianPlaysReels: (0, import_mysql_core2.float)(),
    medianEngagementReels: (0, import_mysql_core2.float)(),
    outdatedMetrics: (0, import_mysql_core2.tinyint)().default(0),
    medianComments: (0, import_mysql_core2.float)(),
    medianLikes: (0, import_mysql_core2.float)(),
    insertOrigin: (0, import_mysql_core2.varchar)({ length: 50 }),
    fullProfileProcess: (0, import_mysql_core2.tinyint)().default(0),
    totalReelsLikes: (0, import_mysql_core2.float)(),
    totalReelsComments: (0, import_mysql_core2.float)(),
    totalReelsSaves: (0, import_mysql_core2.float)(),
    userProfileViews: (0, import_mysql_core2.float)(),
    userPostsEngagementRateByImpressions: (0, import_mysql_core2.float)(),
    userReelsEngagementRateByImpressions: (0, import_mysql_core2.float)(),
    userStoriesEngagementRateByImpressions: (0, import_mysql_core2.float)(),
    userPostsEngagementRateByFollowers: (0, import_mysql_core2.float)(),
    userReelsEngagementRateByFollowers: (0, import_mysql_core2.float)(),
    userStoriesEngagementRateByFollowers: (0, import_mysql_core2.float)(),
    userStoriesEffectiveReach: (0, import_mysql_core2.float)(),
    userPostsEffectiveReach: (0, import_mysql_core2.float)(),
    userReelsEffectiveReach: (0, import_mysql_core2.float)(),
    userTotalPosts: (0, import_mysql_core2.float)(),
    userTotalReels: (0, import_mysql_core2.float)(),
    userTotalStories: (0, import_mysql_core2.float)(),
    userAvgPostsReach: (0, import_mysql_core2.float)(),
    userAvgReelsReach: (0, import_mysql_core2.float)(),
    userAvgStoriesReach: (0, import_mysql_core2.float)(),
    userAvgPostsImpressions: (0, import_mysql_core2.float)(),
    userAvgStoriesImpressions: (0, import_mysql_core2.float)(),
    userAvgReelsPlays: (0, import_mysql_core2.float)(),
    userAvgPostsEngagement: (0, import_mysql_core2.float)(),
    userAvgReelsEngagement: (0, import_mysql_core2.float)(),
    userAvgStoriesEngagement: (0, import_mysql_core2.float)(),
    userAvgPostsLikes: (0, import_mysql_core2.float)(),
    userAvgReelsLikes: (0, import_mysql_core2.float)(),
    userAvgStoriesLikes: (0, import_mysql_core2.float)(),
    userAvgPostsComments: (0, import_mysql_core2.float)(),
    userAvgReelsComments: (0, import_mysql_core2.float)(),
    userAvgStoriesReplies: (0, import_mysql_core2.float)(),
    userAvgPostsShares: (0, import_mysql_core2.float)(),
    userAvgReelsShares: (0, import_mysql_core2.float)(),
    userAvgStoriesShares: (0, import_mysql_core2.float)(),
    userAvgPostsSaves: (0, import_mysql_core2.float)(),
    userAvgReelsSaves: (0, import_mysql_core2.float)(),
    userPostsCpm: (0, import_mysql_core2.float)(),
    userStoriesCpm: (0, import_mysql_core2.float)(),
    userReelsCpm: (0, import_mysql_core2.float)(),
    storiesCpm: (0, import_mysql_core2.float)(),
    storiesValue: (0, import_mysql_core2.float)(),
    profileDescription: (0, import_mysql_core2.varchar)({ length: 255 }),
    hasCreatorsInsights: (0, import_mysql_core2.tinyint)(),
    isSharedCreatorsInsights: (0, import_mysql_core2.tinyint)().default(0)
  },
  (table) => {
    return {
      usernameIdx: (0, import_mysql_core2.index)("username_index").on(table.username),
      idxInstagramProfilesFacebookUserId: (0, import_mysql_core2.index)("idx_instagramProfiles_facebookUserId").on(table.facebookUserId),
      oldIgIdIdx: (0, import_mysql_core2.index)("instagramProfiles_oldIgId_IDX").on(table.oldIgId),
      instagramProfilesId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "instagramProfiles_id" })
    };
  }
);
var locations = (0, import_mysql_core2.mysqlTable)(
  "locations",
  {
    id: (0, import_mysql_core2.bigint)({ mode: "number" }).notNull(),
    name: (0, import_mysql_core2.varchar)({ length: 255 }).notNull(),
    latitude: (0, import_mysql_core2.decimal)({ precision: 9, scale: 6 }).notNull(),
    longitude: (0, import_mysql_core2.decimal)({ precision: 9, scale: 6 }).notNull(),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).notNull()
  },
  (table) => {
    return {
      locationsId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "locations_id" })
    };
  }
);
var notSearchableUsers = (0, import_mysql_core2.mysqlTable)(
  "notSearchableUsers",
  {
    id: (0, import_mysql_core2.varchar)({ length: 45 }).notNull(),
    username: (0, import_mysql_core2.varchar)({ length: 45 }),
    reasons: (0, import_mysql_core2.varchar)({ length: 45 }).notNull(),
    socialNetwork: (0, import_mysql_core2.varchar)({ length: 45 }).notNull(),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    tags: (0, import_mysql_core2.varchar)({ length: 255 }),
    followers: (0, import_mysql_core2.int)(),
    engagement: (0, import_mysql_core2.float)()
  },
  (table) => {
    return {
      notSearchableUsersId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "notSearchableUsers_id" })
    };
  }
);
var pinterestProfiles = (0, import_mysql_core2.mysqlTable)(
  "pinterestProfiles",
  {
    id: (0, import_mysql_core2.varchar)({ length: 50 }).notNull(),
    squidId: (0, import_mysql_core2.varchar)({ length: 36 }),
    username: (0, import_mysql_core2.varchar)({ length: 255 }).default("Processando").notNull(),
    exists: (0, import_mysql_core2.tinyint)().default(1).notNull(),
    isPartner: (0, import_mysql_core2.tinyint)().default(1).notNull(),
    picture: (0, import_mysql_core2.varchar)({ length: 255 }).default("Processando").notNull(),
    fullName: (0, import_mysql_core2.varchar)({ length: 255 }),
    about: (0, import_mysql_core2.text)(),
    since: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    engagementRate: (0, import_mysql_core2.float)().notNull(),
    reach: (0, import_mysql_core2.int)().default(0).notNull(),
    totalPins: (0, import_mysql_core2.int)().default(0).notNull(),
    followers: (0, import_mysql_core2.int)().default(0).notNull(),
    identificationPins: (0, import_mysql_core2.int)().default(0).notNull(),
    identificationImpressions: (0, import_mysql_core2.int)().default(0).notNull(),
    identificationSaves: (0, import_mysql_core2.int)().default(0).notNull(),
    identificationClicks: (0, import_mysql_core2.int)().default(0).notNull(),
    identificationCloseups: (0, import_mysql_core2.int)().default(0).notNull(),
    identificationComments: (0, import_mysql_core2.int)().default(0).notNull(),
    selfToken: (0, import_mysql_core2.tinyint)().default(1).notNull(),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      pinterestProfilesId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "pinterestProfiles_id" }),
      squidId: (0, import_mysql_core2.unique)("squidId").on(table.squidId)
    };
  }
);
var profileAdditionalInfoBanks = (0, import_mysql_core2.mysqlTable)(
  "profileAdditionalInfoBanks",
  {
    id: (0, import_mysql_core2.int)().autoincrement().notNull(),
    profileId: (0, import_mysql_core2.varchar)({ length: 36 }).notNull(),
    bankCode: (0, import_mysql_core2.varchar)({ length: 10 }),
    bankName: (0, import_mysql_core2.varchar)({ length: 100 }).notNull(),
    bankAccountNumber: (0, import_mysql_core2.varchar)({ length: 50 }),
    bankAccountDigit: (0, import_mysql_core2.varchar)({ length: 5 }),
    bankAccountAgency: (0, import_mysql_core2.varchar)({ length: 11 }),
    bankAccountType: (0, import_mysql_core2.varchar)({ length: 20 }),
    bankOperationCode: (0, import_mysql_core2.varchar)({ length: 10 }),
    holderDocument: (0, import_mysql_core2.varchar)({ length: 15 }),
    holderOpeningDate: (0, import_mysql_core2.date)({ mode: "date" }),
    holderName: (0, import_mysql_core2.varchar)({ length: 150 }),
    holderTradingName: (0, import_mysql_core2.varchar)({ length: 150 }),
    isPersonAccount: (0, import_mysql_core2.tinyint)().notNull(),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    nationalDocument: (0, import_mysql_core2.varchar)({ length: 50 }),
    recordEmployment: (0, import_mysql_core2.varchar)({ length: 50 }),
    companyName: (0, import_mysql_core2.varchar)({ length: 150 }),
    fantasyName: (0, import_mysql_core2.varchar)({ length: 100 }),
    companyOpeningDate: (0, import_mysql_core2.date)({ mode: "date" }),
    typeOfBusiness: (0, import_mysql_core2.varchar)({ length: 150 }),
    paymentType: (0, import_mysql_core2.mysqlEnum)("paymentType", ["nf", "rpa"]).notNull(),
    companyUf: (0, import_mysql_core2.varchar)({ length: 2 }),
    companyCity: (0, import_mysql_core2.varchar)({ length: 100 }),
    companyLegalNature: (0, import_mysql_core2.varchar)({ length: 100 }),
    companyDocument: (0, import_mysql_core2.varchar)({ length: 50 }),
    bankAccountAgencyDigit: (0, import_mysql_core2.varchar)({ length: 15 }),
    verificationStatus: (0, import_mysql_core2.float)(),
    verificationId: (0, import_mysql_core2.char)({ length: 36 }),
    verificatedAt: (0, import_mysql_core2.datetime)({ mode: "date" })
  },
  (table) => {
    return {
      profileAdditionalInfoBanksId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "profileAdditionalInfoBanks_id" }),
      profileIdUnique: (0, import_mysql_core2.unique)("profileId_UNIQUE").on(table.profileId),
      profileId: (0, import_mysql_core2.unique)("profileId").on(table.profileId, table.bankCode, table.bankAccountNumber)
    };
  }
);
var profileAdditionalInfos = (0, import_mysql_core2.mysqlTable)(
  "profileAdditionalInfos",
  {
    profileId: (0, import_mysql_core2.varchar)({ length: 36 }).notNull().references(() => profiles.id),
    loginUid: (0, import_mysql_core2.varchar)({ length: 45 }),
    email: (0, import_mysql_core2.varchar)({ length: 255 }).notNull(),
    document: (0, import_mysql_core2.varchar)({ length: 50 }),
    name: (0, import_mysql_core2.varchar)({ length: 255 }).notNull(),
    blog: (0, import_mysql_core2.varchar)({ length: 255 }),
    birthday: (0, import_mysql_core2.date)({ mode: "date" }).notNull(),
    gender: (0, import_mysql_core2.char)({ length: 1 }),
    phone: (0, import_mysql_core2.varchar)({ length: 25 }),
    zipcode: (0, import_mysql_core2.varchar)({ length: 15 }),
    address: (0, import_mysql_core2.varchar)({ length: 255 }),
    addressNumber: (0, import_mysql_core2.varchar)({ length: 150 }),
    complement: (0, import_mysql_core2.varchar)({ length: 255 }),
    city: (0, import_mysql_core2.varchar)({ length: 255 }),
    neighborhood: (0, import_mysql_core2.varchar)({ length: 255 }),
    uf: (0, import_mysql_core2.varchar)({ length: 255 }),
    country: (0, import_mysql_core2.varchar)({ length: 255 }).default("BR"),
    lat: (0, import_mysql_core2.double)(),
    lng: (0, import_mysql_core2.double)(),
    registeredFromSource: (0, import_mysql_core2.varchar)({ length: 255 }),
    registeredFromCampaign: (0, import_mysql_core2.varchar)({ length: 255 }),
    registeredFromMedium: (0, import_mysql_core2.varchar)({ length: 255 }),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).notNull(),
    allowSms: (0, import_mysql_core2.tinyint)().default(0),
    allowWhatsapp: (0, import_mysql_core2.tinyint)().default(1),
    allowSuggestionEmail: (0, import_mysql_core2.tinyint)().default(1),
    isPersonAccount: (0, import_mysql_core2.tinyint)().notNull(),
    documentType: (0, import_mysql_core2.varchar)({ length: 13 }).notNull(),
    hasSkip: (0, import_mysql_core2.tinyint)().default(0),
    language: (0, import_mysql_core2.varchar)({ length: 10 }).default("pt-br").notNull(),
    phoneValid: (0, import_mysql_core2.tinyint)().default(0),
    phoneValidCode: (0, import_mysql_core2.varchar)({ length: 15 }),
    phoneValidCodeCreatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }),
    race: (0, import_mysql_core2.int)(),
    registeredFromAdId: (0, import_mysql_core2.varchar)({ length: 255 }),
    registeredFromContent: (0, import_mysql_core2.varchar)({ length: 255 }),
    registeredFromAdName: (0, import_mysql_core2.varchar)({ length: 255 }),
    portalRegistration: (0, import_mysql_core2.tinyint)().default(0),
    agent: (0, import_mysql_core2.tinyint)().default(0),
    showWarning: (0, import_mysql_core2.tinyint)().default(0),
    scenario: (0, import_mysql_core2.varchar)({ length: 10 }),
    updateAddress: (0, import_mysql_core2.tinyint)(),
    nationality: (0, import_mysql_core2.varchar)({ length: 255 }),
    allowBrandLovers: (0, import_mysql_core2.tinyint)().default(1),
    allowAffiliates: (0, import_mysql_core2.tinyint)().default(1),
    allowResearch: (0, import_mysql_core2.tinyint)().default(1),
    allowEmail: (0, import_mysql_core2.tinyint)().default(1),
    socialName: (0, import_mysql_core2.varchar)({ length: 50 }),
    descriptionCreatorsInsights: (0, import_mysql_core2.varchar)({ length: 255 }),
    recruitmentSyncedAt: (0, import_mysql_core2.datetime)({ mode: "date" })
  },
  (table) => {
    return {
      profileAdditionalInfosProfileId: (0, import_mysql_core2.primaryKey)({ columns: [table.profileId], name: "profileAdditionalInfos_profileId" }),
      emailUnique: (0, import_mysql_core2.unique)("EMAIL_UNIQUE").on(table.email),
      auth0: (0, import_mysql_core2.unique)("AUTH0").on(table.loginUid)
    };
  }
);
var profileAdditionalInfosOld = (0, import_mysql_core2.mysqlTable)(
  "profileAdditionalInfos_old",
  {
    profileId: (0, import_mysql_core2.varchar)({ length: 36 }).notNull().references(() => profiles.id),
    document: (0, import_mysql_core2.varchar)({ length: 50 }),
    name: (0, import_mysql_core2.varchar)({ length: 255 }).notNull(),
    email: (0, import_mysql_core2.varchar)({ length: 255 }).notNull(),
    blog: (0, import_mysql_core2.varchar)({ length: 255 }),
    birthday: (0, import_mysql_core2.date)({ mode: "date" }).notNull(),
    gender: (0, import_mysql_core2.char)({ length: 3 }).notNull(),
    phone: (0, import_mysql_core2.varchar)({ length: 25 }).notNull(),
    zipcode: (0, import_mysql_core2.varchar)({ length: 15 }).notNull(),
    address: (0, import_mysql_core2.varchar)({ length: 255 }).notNull(),
    addressNumber: (0, import_mysql_core2.varchar)({ length: 255 }),
    complement: (0, import_mysql_core2.varchar)({ length: 255 }),
    city: (0, import_mysql_core2.varchar)({ length: 255 }).notNull(),
    neighborhood: (0, import_mysql_core2.varchar)({ length: 255 }),
    uf: (0, import_mysql_core2.varchar)({ length: 255 }).default("").notNull(),
    country: (0, import_mysql_core2.varchar)({ length: 255 }).default("BR"),
    registeredFromSource: (0, import_mysql_core2.varchar)({ length: 255 }),
    registeredFromCampaign: (0, import_mysql_core2.varchar)({ length: 255 }),
    registeredFromMedium: (0, import_mysql_core2.varchar)({ length: 255 }),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).notNull(),
    allowSms: (0, import_mysql_core2.tinyint)().default(0),
    allowWhatsapp: (0, import_mysql_core2.tinyint)().default(1),
    allowSuggestionEmail: (0, import_mysql_core2.tinyint)().default(1),
    isPersonAccount: (0, import_mysql_core2.tinyint)().notNull(),
    documentType: (0, import_mysql_core2.varchar)({ length: 13 }).default("CPF").notNull(),
    hasSkip: (0, import_mysql_core2.tinyint)().default(0),
    auth0: (0, import_mysql_core2.varchar)({ length: 45 }),
    language: (0, import_mysql_core2.varchar)({ length: 5 }).default("pt-br").notNull(),
    phoneValid: (0, import_mysql_core2.tinyint)().default(0),
    phoneValidCode: (0, import_mysql_core2.varchar)({ length: 15 }),
    phoneValidCodeCreatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }),
    race: (0, import_mysql_core2.int)(),
    registeredFromAdId: (0, import_mysql_core2.varchar)({ length: 255 }),
    registeredFromContent: (0, import_mysql_core2.varchar)({ length: 255 }),
    registeredFromAdName: (0, import_mysql_core2.varchar)({ length: 255 }),
    portalRegistration: (0, import_mysql_core2.tinyint)().default(0),
    agent: (0, import_mysql_core2.tinyint)().default(0)
  },
  (table) => {
    return {
      profileAdditionalInfosOldProfileId: (0, import_mysql_core2.primaryKey)({ columns: [table.profileId], name: "profileAdditionalInfos_old_profileId" }),
      emailUnique: (0, import_mysql_core2.unique)("EMAIL_UNIQUE").on(table.email)
    };
  }
);
var profileAdditionalInfosWhitelabels = (0, import_mysql_core2.mysqlTable)(
  "profileAdditionalInfos_whitelabels",
  {
    profileId: (0, import_mysql_core2.varchar)({ length: 36 }).notNull(),
    whitelabel: (0, import_mysql_core2.varchar)({ length: 24 }).default("-").notNull(),
    organization: (0, import_mysql_core2.varchar)({ length: 24 }).default("-").notNull(),
    auth0: (0, import_mysql_core2.varchar)({ length: 45 }),
    communityId: (0, import_mysql_core2.varchar)("community_id", { length: 45 }),
    email: (0, import_mysql_core2.varchar)({ length: 255 }).notNull(),
    document: (0, import_mysql_core2.varchar)({ length: 50 }).notNull(),
    name: (0, import_mysql_core2.varchar)({ length: 255 }).notNull(),
    blog: (0, import_mysql_core2.varchar)({ length: 255 }),
    birthday: (0, import_mysql_core2.date)({ mode: "date" }).notNull(),
    gender: (0, import_mysql_core2.char)({ length: 1 }),
    phone: (0, import_mysql_core2.varchar)({ length: 25 }).notNull(),
    zipcode: (0, import_mysql_core2.varchar)({ length: 15 }),
    address: (0, import_mysql_core2.varchar)({ length: 255 }),
    addressNumber: (0, import_mysql_core2.varchar)({ length: 150 }),
    complement: (0, import_mysql_core2.varchar)({ length: 255 }),
    city: (0, import_mysql_core2.varchar)({ length: 255 }),
    neighborhood: (0, import_mysql_core2.varchar)({ length: 255 }),
    uf: (0, import_mysql_core2.varchar)({ length: 255 }),
    country: (0, import_mysql_core2.varchar)({ length: 255 }).default("BR"),
    nationality: (0, import_mysql_core2.varchar)({ length: 255 }),
    registeredFromSource: (0, import_mysql_core2.varchar)({ length: 255 }),
    registeredFromCampaign: (0, import_mysql_core2.varchar)({ length: 255 }),
    registeredFromMedium: (0, import_mysql_core2.varchar)({ length: 255 }),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).notNull(),
    allowSms: (0, import_mysql_core2.tinyint)().default(0),
    allowWhatsapp: (0, import_mysql_core2.tinyint)().default(1),
    allowSuggestionEmail: (0, import_mysql_core2.tinyint)().default(1),
    isPersonAccount: (0, import_mysql_core2.tinyint)().notNull(),
    documentType: (0, import_mysql_core2.varchar)({ length: 13 }).notNull(),
    hasSkip: (0, import_mysql_core2.tinyint)().default(0),
    language: (0, import_mysql_core2.varchar)({ length: 10 }).default("pt-br").notNull(),
    phoneValid: (0, import_mysql_core2.tinyint)().default(0),
    phoneValidCode: (0, import_mysql_core2.varchar)({ length: 15 }),
    phoneValidCodeCreatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }),
    race: (0, import_mysql_core2.int)(),
    registeredFromAdId: (0, import_mysql_core2.varchar)({ length: 255 }),
    registeredFromContent: (0, import_mysql_core2.varchar)({ length: 255 }),
    registeredFromAdName: (0, import_mysql_core2.varchar)({ length: 255 }),
    portalRegistration: (0, import_mysql_core2.tinyint)().default(0),
    agent: (0, import_mysql_core2.tinyint)().default(0),
    showWarning: (0, import_mysql_core2.tinyint)().default(0)
  },
  (table) => {
    return {
      profileAdditionalInfosWhitelabelsProfileIdWhitelabel: (0, import_mysql_core2.primaryKey)({ columns: [table.profileId, table.whitelabel], name: "profileAdditionalInfos_whitelabels_profileId_whitelabel" }),
      emailUnique: (0, import_mysql_core2.unique)("EMAIL_UNIQUE").on(table.email, table.whitelabel),
      auth0: (0, import_mysql_core2.unique)("AUTH0").on(table.auth0)
    };
  }
);
var profileCategories = (0, import_mysql_core2.mysqlTable)(
  "profileCategories",
  {
    id: (0, import_mysql_core2.int)().autoincrement().notNull(),
    parentId: (0, import_mysql_core2.int)(),
    description: (0, import_mysql_core2.varchar)({ length: 50 }).default("").notNull(),
    descriptionEn: (0, import_mysql_core2.varchar)("description_en", { length: 255 }).notNull(),
    descriptionEs: (0, import_mysql_core2.varchar)("description_es", { length: 255 }),
    emoji: (0, import_mysql_core2.text)(),
    percentageBase: (0, import_mysql_core2.float)("percentage_base"),
    cacheVariation: (0, import_mysql_core2.float)("cache_variation").default(1)
  },
  (table) => {
    return {
      profileCategoriesId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "profileCategories_id" }),
      description: (0, import_mysql_core2.unique)("description").on(table.description)
    };
  }
);
var profileWhitelabels = (0, import_mysql_core2.mysqlTable)(
  "profileWhitelabels",
  {
    id: (0, import_mysql_core2.varchar)({ length: 36 }).notNull(),
    profileId: (0, import_mysql_core2.varchar)({ length: 36 }).notNull().references(() => profiles.id, { onUpdate: "cascade" }),
    whitelabel: (0, import_mysql_core2.varchar)({ length: 24 }),
    createdAt: (0, import_mysql_core2.timestamp)("created_at", { mode: "date" }).defaultNow().notNull(),
    registeredFromSource: (0, import_mysql_core2.varchar)({ length: 255 }),
    registeredFromCampaign: (0, import_mysql_core2.varchar)({ length: 255 }),
    registeredFromMedium: (0, import_mysql_core2.varchar)({ length: 255 }),
    registeredFromContent: (0, import_mysql_core2.varchar)({ length: 255 }),
    registeredFromAdId: (0, import_mysql_core2.varchar)({ length: 255 }),
    registeredFromAdName: (0, import_mysql_core2.varchar)({ length: 255 })
  },
  (table) => {
    return {
      index3: (0, import_mysql_core2.index)("profileWhitelabels_index_3").on(table.whitelabel),
      profileWhitelabelsId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "profileWhitelabels_id" })
    };
  }
);
var profiles = (0, import_mysql_core2.mysqlTable)(
  "profiles",
  {
    id: (0, import_mysql_core2.varchar)({ length: 36 }).notNull(),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    deletedNetworks: (0, import_mysql_core2.varchar)({ length: 100 }),
    deletedAt: (0, import_mysql_core2.datetime)({ mode: "date" })
  },
  (table) => {
    return {
      id: (0, import_mysql_core2.index)("id").on(table.id),
      profilesId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "profiles_id" })
    };
  }
);
var progressiveRegistrationAnswers = (0, import_mysql_core2.mysqlTable)(
  "progressive_registration_answers",
  {
    id: (0, import_mysql_core2.varchar)({ length: 36 }).notNull(),
    question: (0, import_mysql_core2.varchar)({ length: 36 }).notNull().references(() => progressiveRegistrationQuestions.id, { onDelete: "cascade" }),
    squidId: (0, import_mysql_core2.varchar)({ length: 50 }).notNull().references(() => profiles.id),
    answer: (0, import_mysql_core2.varchar)({ length: 255 }),
    answerOption: (0, import_mysql_core2.varchar)("answer_option", { length: 36 }).references(() => progressiveRegistrationQuestionOptions.id, { onDelete: "cascade" }),
    createdAt: (0, import_mysql_core2.timestamp)("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: (0, import_mysql_core2.timestamp)("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: (0, import_mysql_core2.timestamp)("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      fkProgressiveRegistrationIdx1: (0, import_mysql_core2.index)("fk_progressive_registration_idx1").on(table.question),
      fkProgressiveRegistrationIdx2: (0, import_mysql_core2.index)("fk_progressive_registration_idx2").on(table.squidId),
      answersIdx: (0, import_mysql_core2.index)("answers_idx").on(table.id),
      progressiveRegistrationAnswersId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "progressive_registration_answers_id" }),
      id: (0, import_mysql_core2.unique)("id").on(table.id)
    };
  }
);
var progressiveRegistrationGroups = (0, import_mysql_core2.mysqlTable)(
  "progressive_registration_groups",
  {
    id: (0, import_mysql_core2.varchar)({ length: 36 }).notNull(),
    label: (0, import_mysql_core2.varchar)({ length: 36 }).notNull().references(() => progressiveRegistrationLabels.id, { onDelete: "cascade", onUpdate: "cascade" }),
    icon: (0, import_mysql_core2.varchar)({ length: 255 }).default("poll-people").notNull(),
    order: (0, import_mysql_core2.int)().default(1).notNull(),
    createdAt: (0, import_mysql_core2.timestamp)("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: (0, import_mysql_core2.timestamp)("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: (0, import_mysql_core2.timestamp)("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      label: (0, import_mysql_core2.index)("LABEL").on(table.label),
      groupIdx: (0, import_mysql_core2.index)("group_idx").on(table.id),
      progressiveRegistrationGroupsId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "progressive_registration_groups_id" }),
      id: (0, import_mysql_core2.unique)("id").on(table.id)
    };
  }
);
var progressiveRegistrationLabels = (0, import_mysql_core2.mysqlTable)(
  "progressive_registration_labels",
  {
    id: (0, import_mysql_core2.varchar)({ length: 36 }).notNull(),
    pt: (0, import_mysql_core2.varchar)({ length: 255 }),
    en: (0, import_mysql_core2.varchar)({ length: 255 }),
    es: (0, import_mysql_core2.varchar)({ length: 255 }),
    createdAt: (0, import_mysql_core2.timestamp)("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: (0, import_mysql_core2.timestamp)("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: (0, import_mysql_core2.timestamp)("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      labelIdx: (0, import_mysql_core2.index)("label_idx").on(table.id),
      progressiveRegistrationLabelsId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "progressive_registration_labels_id" }),
      id: (0, import_mysql_core2.unique)("id").on(table.id)
    };
  }
);
var progressiveRegistrationQuestionOptions = (0, import_mysql_core2.mysqlTable)(
  "progressive_registration_question_options",
  {
    id: (0, import_mysql_core2.varchar)({ length: 36 }).notNull(),
    question: (0, import_mysql_core2.varchar)({ length: 255 }).notNull().references(() => progressiveRegistrationQuestions.id, { onDelete: "cascade" }),
    label: (0, import_mysql_core2.varchar)({ length: 36 }).notNull().references(() => progressiveRegistrationLabels.id, { onDelete: "cascade" }),
    createdAt: (0, import_mysql_core2.timestamp)("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: (0, import_mysql_core2.timestamp)("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: (0, import_mysql_core2.timestamp)("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      fkProgressiveRegistrationQuestionOptionsProgressiveReIdx: (0, import_mysql_core2.index)("fk_progressive_registration_question_options_progressive_re_idx").on(table.question),
      label: (0, import_mysql_core2.index)("label").on(table.label),
      optionsIdx: (0, import_mysql_core2.index)("options_idx").on(table.id),
      progressiveRegistrationQuestionOptionsId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "progressive_registration_question_options_id" }),
      id: (0, import_mysql_core2.unique)("id").on(table.id)
    };
  }
);
var progressiveRegistrationQuestions = (0, import_mysql_core2.mysqlTable)(
  "progressive_registration_questions",
  {
    id: (0, import_mysql_core2.varchar)({ length: 36 }).notNull(),
    label: (0, import_mysql_core2.varchar)({ length: 36 }).notNull().references(() => progressiveRegistrationLabels.id, { onDelete: "cascade" }),
    type: (0, import_mysql_core2.varchar)({ length: 255 }).default("text").notNull(),
    group: (0, import_mysql_core2.varchar)({ length: 255 }).notNull().references(() => progressiveRegistrationGroups.id, { onDelete: "cascade" }),
    createdAt: (0, import_mysql_core2.timestamp)("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: (0, import_mysql_core2.timestamp)("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: (0, import_mysql_core2.timestamp)("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      fkProgressiveRegistrationQuestionsProgressiveRegistratIdx: (0, import_mysql_core2.index)("fk_progressive_registration_questions_progressive_registrat_idx").on(table.group),
      label: (0, import_mysql_core2.index)("LABEL").on(table.label),
      questionsIdx: (0, import_mysql_core2.index)("questions_idx").on(table.id),
      progressiveRegistrationQuestionsId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "progressive_registration_questions_id" }),
      id: (0, import_mysql_core2.unique)("id").on(table.id)
    };
  }
);
var progressiveRegistrationWhitelabels = (0, import_mysql_core2.mysqlTable)(
  "progressive_registration_whitelabels",
  {
    whitelabel: (0, import_mysql_core2.varchar)({ length: 24 }).default("hub").notNull(),
    question: (0, import_mysql_core2.varchar)({ length: 255 }).notNull().references(() => progressiveRegistrationQuestions.id, { onDelete: "cascade", onUpdate: "cascade" }),
    group: (0, import_mysql_core2.varchar)({ length: 255 }).notNull().references(() => progressiveRegistrationGroups.id, { onDelete: "cascade" }),
    active: (0, import_mysql_core2.tinyint)().default(0).notNull(),
    order: (0, import_mysql_core2.int)().default(1).notNull(),
    required: (0, import_mysql_core2.tinyint)().default(0).notNull(),
    createdAt: (0, import_mysql_core2.timestamp)("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: (0, import_mysql_core2.timestamp)("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: (0, import_mysql_core2.timestamp)("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      fkProgressiveRegistrationWhitelabelsProgressiveRegistrIdx: (0, import_mysql_core2.index)("fk_progressive_registration_whitelabels_progressive_registr_idx").on(table.question),
      progressiveRegistrationWhitelabelsWhitelabelQuestionGroup: (0, import_mysql_core2.primaryKey)({ columns: [table.whitelabel, table.question, table.group], name: "progressive_registration_whitelabels_whitelabel_question_group" })
    };
  }
);
var races = (0, import_mysql_core2.mysqlTable)(
  "races",
  {
    id: (0, import_mysql_core2.int)().autoincrement().notNull(),
    description: (0, import_mysql_core2.varchar)({ length: 45 }).notNull(),
    descriptionEn: (0, import_mysql_core2.varchar)("description_en", { length: 45 }).notNull(),
    descriptionEs: (0, import_mysql_core2.varchar)("description_es", { length: 255 })
  },
  (table) => {
    return {
      racesId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "races_id" })
    };
  }
);
var scopesToken = (0, import_mysql_core2.mysqlTable)(
  "scopesToken",
  {
    scopeType: (0, import_mysql_core2.varchar)({ length: 64 }).notNull(),
    profileId: (0, import_mysql_core2.varchar)({ length: 50 }).notNull(),
    socialNetwork: (0, import_mysql_core2.varchar)({ length: 45 }).notNull()
  },
  (table) => {
    return {
      scopesTokenScopeTypeProfileIdSocialNetwork: (0, import_mysql_core2.primaryKey)({ columns: [table.scopeType, table.profileId, table.socialNetwork], name: "scopesToken_scopeType_profileId_socialNetwork" })
    };
  }
);
var socialNetworkProfiles = (0, import_mysql_core2.mysqlTable)(
  "socialNetworkProfiles",
  {
    id: (0, import_mysql_core2.varchar)({ length: 50 }).notNull(),
    squidId: (0, import_mysql_core2.varchar)({ length: 36 }).references(() => profiles.id, { onDelete: "cascade", onUpdate: "cascade" }),
    socialNetwork: (0, import_mysql_core2.varchar)({ length: 45 }).notNull(),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      socialNetworkProfilesIdSocialNetwork: (0, import_mysql_core2.primaryKey)({ columns: [table.id, table.socialNetwork], name: "socialNetworkProfiles_id_socialNetwork" })
    };
  }
);
var socialNetworkProfilesCache = (0, import_mysql_core2.mysqlTable)(
  "socialNetworkProfilesCache",
  {
    profileId: (0, import_mysql_core2.varchar)({ length: 255 }).notNull(),
    contentType: (0, import_mysql_core2.varchar)({ length: 50 }).notNull(),
    contentValue: (0, import_mysql_core2.decimal)({ precision: 10, scale: 2 }),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      socialNetworkProfilesCacheProfileIdContentType: (0, import_mysql_core2.primaryKey)({ columns: [table.profileId, table.contentType], name: "socialNetworkProfilesCache_profileId_contentType" }),
      socialNetworkProfilesCacheProfileIdIdx: (0, import_mysql_core2.unique)("socialNetworkProfilesCache_profileId_IDX").on(table.profileId, table.contentType)
    };
  }
);
var socialNetworkProfilesCacheNew = (0, import_mysql_core2.mysqlTable)("socialNetworkProfilesCache_new", {
  profileId: (0, import_mysql_core2.varchar)({ length: 50 }).notNull(),
  contentType: (0, import_mysql_core2.varchar)("ContentType", { length: 100 }).notNull(),
  contentValue: (0, import_mysql_core2.decimal)({ precision: 10, scale: 2 }),
  createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`),
  updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`)
});
var socialNetworkProfilesCategories = (0, import_mysql_core2.mysqlTable)(
  "socialNetworkProfilesCategories",
  {
    id: (0, import_mysql_core2.int)().autoincrement().notNull(),
    categoryId: (0, import_mysql_core2.int)().notNull().references(() => profileCategories.id, { onUpdate: "cascade" }),
    profileId: (0, import_mysql_core2.varchar)({ length: 50 }).notNull().references(() => socialNetworkProfiles.id, { onUpdate: "cascade" }),
    socialNetwork: (0, import_mysql_core2.varchar)({ length: 45 }).notNull(),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`),
    recruitmentSyncedAt: (0, import_mysql_core2.datetime)({ mode: "date" })
  },
  (table) => {
    return {
      socialNetwork: (0, import_mysql_core2.index)("socialNetwork").on(table.socialNetwork),
      socialNetworkProfilesCategoriesId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "socialNetworkProfilesCategories_id" })
    };
  }
);
var socialNetworkProfilesCategoriesWhitelabels = (0, import_mysql_core2.mysqlTable)(
  "socialNetworkProfilesCategories_whitelabels",
  {
    id: (0, import_mysql_core2.int)().autoincrement().notNull(),
    categoryId: (0, import_mysql_core2.int)(),
    profileId: (0, import_mysql_core2.varchar)({ length: 36 }),
    socialNetwork: (0, import_mysql_core2.varchar)({ length: 45 }),
    whitelabel: (0, import_mysql_core2.varchar)({ length: 24 }),
    organization: (0, import_mysql_core2.varchar)({ length: 24 }),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`)
  },
  (table) => {
    return {
      socialNetworkProfilesCategoriesWhitelabelsId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "socialNetworkProfilesCategories_whitelabels_id" }),
      socialNetworkProfilesCategoriesUn: (0, import_mysql_core2.unique)("socialNetworkProfilesCategories_UN").on(table.categoryId, table.profileId, table.socialNetwork, table.whitelabel, table.organization)
    };
  }
);
var socialNetworkProfilesWhitelabels = (0, import_mysql_core2.mysqlTable)(
  "socialNetworkProfiles_whitelabels",
  {
    id: (0, import_mysql_core2.varchar)({ length: 50 }).notNull(),
    squidId: (0, import_mysql_core2.varchar)({ length: 36 }).references(() => profiles.id),
    socialNetwork: (0, import_mysql_core2.varchar)({ length: 45 }).notNull(),
    whitelabel: (0, import_mysql_core2.varchar)({ length: 24 }).default("-").notNull(),
    organization: (0, import_mysql_core2.varchar)({ length: 24 }).default("-").notNull(),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      socialNetworkProfilesWhitelabelsIdSocialNetworkWhitelabel: (0, import_mysql_core2.primaryKey)({ columns: [table.id, table.socialNetwork, table.whitelabel], name: "socialNetworkProfiles_whitelabels_id_socialNetwork_whitelabel" })
    };
  }
);
var stopWords = (0, import_mysql_core2.mysqlTable)(
  "stopWords",
  {
    id: (0, import_mysql_core2.int)().autoincrement().notNull(),
    word: (0, import_mysql_core2.varchar)({ length: 255 }).notNull()
  },
  (table) => {
    return {
      stopWordsId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "stopWords_id" })
    };
  }
);
var tiktokProfiles = (0, import_mysql_core2.mysqlTable)(
  "tiktokProfiles",
  {
    id: (0, import_mysql_core2.varchar)({ length: 50 }).notNull(),
    openId: (0, import_mysql_core2.varchar)({ length: 50 }),
    unionId: (0, import_mysql_core2.varchar)({ length: 50 }),
    exists: (0, import_mysql_core2.tinyint)().default(1),
    verified: (0, import_mysql_core2.tinyint)().default(1),
    username: (0, import_mysql_core2.varchar)({ length: 255 }).default("Processando"),
    nickname: (0, import_mysql_core2.varchar)({ length: 255 }).default("Processando"),
    macro: (0, import_mysql_core2.tinyint)().default(0),
    brandUser: (0, import_mysql_core2.tinyint)().default(0),
    picture: (0, import_mysql_core2.text)(),
    bio: (0, import_mysql_core2.text)(),
    engagementRate: (0, import_mysql_core2.float)(),
    followers: (0, import_mysql_core2.int)().default(0),
    following: (0, import_mysql_core2.int)().default(0),
    likes: (0, import_mysql_core2.float)(),
    averageLikes: (0, import_mysql_core2.float)(),
    comments: (0, import_mysql_core2.float)(),
    averageComments: (0, import_mysql_core2.float)(),
    shares: (0, import_mysql_core2.float)(),
    averageShares: (0, import_mysql_core2.float)(),
    views: (0, import_mysql_core2.float)(),
    averageViews: (0, import_mysql_core2.float)(),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    lastPictureUpdatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }),
    tcmStatus: (0, import_mysql_core2.varchar)({ length: 15 }),
    insertOrigin: (0, import_mysql_core2.varchar)({ length: 50 }),
    processAt: (0, import_mysql_core2.datetime)({ mode: "date" }),
    hasCreatorsInsights: (0, import_mysql_core2.tinyint)().default(0),
    isSharedCreatorsInsights: (0, import_mysql_core2.tinyint)().default(0)
  },
  (table) => {
    return {
      usernameIdx: (0, import_mysql_core2.index)("tiktokProfiles_username_IDX").on(table.username),
      processAtIdx: (0, import_mysql_core2.index)("tiktokProfiles_processAt_IDX").on(table.processAt),
      tiktokProfilesId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "tiktokProfiles_id" })
    };
  }
);
var tiktokTokens = (0, import_mysql_core2.mysqlTable)(
  "tiktokTokens",
  {
    profileId: (0, import_mysql_core2.varchar)({ length: 50 }).notNull(),
    valid: (0, import_mysql_core2.tinyint)().default(1),
    status: (0, import_mysql_core2.varchar)({ length: 1e3 }),
    accessToken: (0, import_mysql_core2.varchar)({ length: 512 }),
    refreshToken: (0, import_mysql_core2.varchar)({ length: 128 }),
    expiresAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`)
  },
  (table) => {
    return {
      validIdx: (0, import_mysql_core2.index)("tiktokTokens_valid_IDX").on(table.valid),
      tiktokTokensProfileId: (0, import_mysql_core2.primaryKey)({ columns: [table.profileId], name: "tiktokTokens_profileId" })
    };
  }
);
var twitterProfiles = (0, import_mysql_core2.mysqlTable)(
  "twitterProfiles",
  {
    id: (0, import_mysql_core2.varchar)({ length: 50 }).notNull(),
    username: (0, import_mysql_core2.varchar)({ length: 255 }).default("Processando").notNull(),
    fullName: (0, import_mysql_core2.varchar)({ length: 255 }).default("").notNull(),
    picture: (0, import_mysql_core2.varchar)({ length: 255 }).default("Processando").notNull(),
    followers: (0, import_mysql_core2.int)().default(0).notNull(),
    follows: (0, import_mysql_core2.int)().default(0).notNull(),
    bio: (0, import_mysql_core2.text)(),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    brandUser: (0, import_mysql_core2.tinyint)().default(0).notNull(),
    exists: (0, import_mysql_core2.tinyint)().default(1).notNull(),
    macro: (0, import_mysql_core2.tinyint)().default(0),
    engagementRate: (0, import_mysql_core2.float)(),
    totalRetweets: (0, import_mysql_core2.float)(),
    totalLikes: (0, import_mysql_core2.float)(),
    totalRetweetsReceived: (0, import_mysql_core2.float)(),
    averageLikes: (0, import_mysql_core2.float)(),
    averageRetweets: (0, import_mysql_core2.float)(),
    totalTweets: (0, import_mysql_core2.float)(),
    averageRepliesByLikes: (0, import_mysql_core2.float)(),
    averageRepliesByTweet: (0, import_mysql_core2.float)(),
    repliesRate: (0, import_mysql_core2.float)(),
    effectiveImpressionReach: (0, import_mysql_core2.float)(),
    averageImpressions: (0, import_mysql_core2.float)(),
    countReplies: (0, import_mysql_core2.int)(),
    adTweetsCount: (0, import_mysql_core2.float)(),
    engagementRateAd: (0, import_mysql_core2.float)(),
    tweetPostAdPerformance: (0, import_mysql_core2.float)(),
    insertOrigin: (0, import_mysql_core2.varchar)({ length: 50 }),
    processAt: (0, import_mysql_core2.datetime)({ mode: "date" }),
    hasCreatorsInsights: (0, import_mysql_core2.tinyint)().default(0)
  },
  (table) => {
    return {
      processAtIdx: (0, import_mysql_core2.index)("twitterProfiles_processAt_IDX").on(table.processAt),
      twitterProfilesId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "twitterProfiles_id" })
    };
  }
);
var twitterTokens = (0, import_mysql_core2.mysqlTable)(
  "twitterTokens",
  {
    profileId: (0, import_mysql_core2.varchar)({ length: 50 }).notNull(),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`),
    valid: (0, import_mysql_core2.tinyint)(),
    accessToken: (0, import_mysql_core2.varchar)({ length: 256 }),
    oauthSecretToken: (0, import_mysql_core2.varchar)({ length: 256 }),
    refreshToken: (0, import_mysql_core2.varchar)({ length: 256 }),
    expiresIn: (0, import_mysql_core2.int)().default(0)
  },
  (table) => {
    return {
      valid: (0, import_mysql_core2.index)("twitterTokens_valid").on(table.valid),
      twitterTokensProfileId: (0, import_mysql_core2.primaryKey)({ columns: [table.profileId], name: "twitterTokens_profileId" })
    };
  }
);
var youtubeProfiles = (0, import_mysql_core2.mysqlTable)(
  "youtubeProfiles",
  {
    id: (0, import_mysql_core2.varchar)({ length: 50 }).notNull(),
    googleId: (0, import_mysql_core2.varchar)({ length: 255 }),
    exists: (0, import_mysql_core2.tinyint)().default(1).notNull(),
    searchable: (0, import_mysql_core2.tinyint)().default(1).notNull(),
    notSearchReason: (0, import_mysql_core2.varchar)({ length: 255 }),
    email: (0, import_mysql_core2.varchar)({ length: 255 }),
    channelTitle: (0, import_mysql_core2.varchar)({ length: 255 }).default("Processando").notNull(),
    username: (0, import_mysql_core2.varchar)({ length: 255 }).default("Processando").notNull(),
    picture: (0, import_mysql_core2.varchar)({ length: 255 }).default("Processando").notNull(),
    fullName: (0, import_mysql_core2.varchar)({ length: 255 }),
    description: (0, import_mysql_core2.text)(),
    bio: (0, import_mysql_core2.text)(),
    customUrl: (0, import_mysql_core2.varchar)({ length: 255 }).default("Processando"),
    country: (0, import_mysql_core2.varchar)({ length: 36 }).default("Processando").notNull(),
    since: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    followers: (0, import_mysql_core2.int)().default(0).notNull(),
    subscribers: (0, import_mysql_core2.int)().default(0).notNull(),
    engagementRate: (0, import_mysql_core2.float)(),
    engagementRatePositive: (0, import_mysql_core2.float)(),
    engagementRateNegative: (0, import_mysql_core2.float)(),
    viewsRate: (0, import_mysql_core2.float)(),
    viewsMedian: (0, import_mysql_core2.float)(),
    comments: (0, import_mysql_core2.int)().default(0),
    identificationComments: (0, import_mysql_core2.int)().default(0),
    identificationLikes: (0, import_mysql_core2.int)().default(0),
    identificationDislikes: (0, import_mysql_core2.int)().default(0),
    averageComments: (0, import_mysql_core2.float)(),
    averageLikes: (0, import_mysql_core2.float)(),
    averageDislikes: (0, import_mysql_core2.float)(),
    shares: (0, import_mysql_core2.int)().default(0),
    averageShares: (0, import_mysql_core2.float)(),
    commentLikesRate: (0, import_mysql_core2.float)(),
    commentViewsRate: (0, import_mysql_core2.float)(),
    averageViewsDuration: (0, import_mysql_core2.int)().default(0),
    averageViewPercentage: (0, import_mysql_core2.float)(),
    averageVideoDuration: (0, import_mysql_core2.float)(),
    videoEffectiveReach: (0, import_mysql_core2.float)(),
    videos: (0, import_mysql_core2.int)().default(0),
    identificationVideos: (0, import_mysql_core2.int)().default(0),
    views: (0, import_mysql_core2.bigint)({ mode: "number" }),
    identificationViews: (0, import_mysql_core2.int)().default(0),
    privacyStatus: (0, import_mysql_core2.varchar)({ length: 36 }).default("Processando").notNull(),
    language: (0, import_mysql_core2.varchar)({ length: 36 }),
    createdAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core2.datetime)({ mode: "date" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    logstashProcessedAt: (0, import_mysql_core2.datetime)({ mode: "date" }),
    macro: (0, import_mysql_core2.tinyint)().default(0),
    brandUser: (0, import_mysql_core2.tinyint)().default(0),
    insertOrigin: (0, import_mysql_core2.varchar)({ length: 50 }),
    processAt: (0, import_mysql_core2.datetime)({ mode: "date" }),
    hasCreatorsInsights: (0, import_mysql_core2.tinyint)().default(0),
    isSharedCreatorsInsights: (0, import_mysql_core2.tinyint)().default(0)
  },
  (table) => {
    return {
      youtuberofilesSearchableIdx: (0, import_mysql_core2.index)("youtuberofiles_searchable_index").on(table.searchable),
      googleIdIdx: (0, import_mysql_core2.index)("youtubeProfiles_googleId_IDX").on(table.googleId),
      processAtIdx: (0, import_mysql_core2.index)("youtubeProfiles_processAt_IDX").on(table.processAt),
      youtubeProfilesId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "youtubeProfiles_id" })
    };
  }
);
var fullInstagramProfileAll = (0, import_mysql_core2.mysqlView)("full_instagram_profile_all", {
  id: (0, import_mysql_core2.int)().default(0).notNull(),
  squidid: (0, import_mysql_core2.int)().default(0).notNull(),
  username: (0, import_mysql_core2.int)().default(0).notNull(),
  identifiedat: (0, import_mysql_core2.int)().default(0).notNull(),
  followers: (0, import_mysql_core2.int)().default(0).notNull(),
  following: (0, import_mysql_core2.int)().default(0).notNull(),
  picture: (0, import_mysql_core2.int)().default(0).notNull(),
  engagementrate: (0, import_mysql_core2.int)().default(0).notNull(),
  isbusiness: (0, import_mysql_core2.int)().default(0).notNull(),
  searchable: (0, import_mysql_core2.int)().default(0).notNull(),
  facebooklinked: (0, import_mysql_core2.int)().default(0).notNull(),
  name: (0, import_mysql_core2.int)().default(0).notNull(),
  email: (0, import_mysql_core2.int)().default(0).notNull(),
  birthday: (0, import_mysql_core2.int)().default(0).notNull(),
  gender: (0, import_mysql_core2.int)().default(0).notNull(),
  phone: (0, import_mysql_core2.int)().default(0).notNull(),
  address: (0, import_mysql_core2.int)().default(0).notNull(),
  addressNumber: (0, import_mysql_core2.int)().default(0).notNull(),
  complement: (0, import_mysql_core2.int)().default(0).notNull(),
  city: (0, import_mysql_core2.int)().default(0).notNull(),
  uf: (0, import_mysql_core2.int)().default(0).notNull(),
  zipcode: (0, import_mysql_core2.int)().default(0).notNull(),
  document: (0, import_mysql_core2.int)().default(0).notNull(),
  loginUid: (0, import_mysql_core2.int)().default(0).notNull(),
  recordEmployment: (0, import_mysql_core2.int)().default(0).notNull(),
  isPersonAccount: (0, import_mysql_core2.int)().default(0).notNull(),
  registeredat: (0, import_mysql_core2.int)().default(0).notNull(),
  race: (0, import_mysql_core2.int)().default(0).notNull(),
  blackuser: (0, import_mysql_core2.int)().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm2.sql`select 1 AS \`id\`,1 AS \`squidid\`,1 AS \`username\`,1 AS \`identifiedat\`,1 AS \`followers\`,1 AS \`following\`,1 AS \`picture\`,1 AS \`engagementrate\`,1 AS \`isbusiness\`,1 AS \`searchable\`,1 AS \`facebooklinked\`,1 AS \`name\`,1 AS \`email\`,1 AS \`birthday\`,1 AS \`gender\`,1 AS \`phone\`,1 AS \`address\`,1 AS \`addressNumber\`,1 AS \`complement\`,1 AS \`city\`,1 AS \`uf\`,1 AS \`zipcode\`,1 AS \`document\`,1 AS \`loginUid\`,1 AS \`recordEmployment\`,1 AS \`isPersonAccount\`,1 AS \`registeredat\`,1 AS \`race\`,1 AS \`blackuser\``);
var vwProgressiveRegistrationAnswers = (0, import_mysql_core2.mysqlView)("vw_progressive_registration_answers", {
  squidId: (0, import_mysql_core2.int)().default(0).notNull(),
  groupId: (0, import_mysql_core2.int)("group_id").default(0).notNull(),
  groupPt: (0, import_mysql_core2.int)("group_pt").default(0).notNull(),
  groupEn: (0, import_mysql_core2.int)("group_en").default(0).notNull(),
  groupEs: (0, import_mysql_core2.int)("group_es").default(0).notNull(),
  questionId: (0, import_mysql_core2.int)("question_id").default(0).notNull(),
  questionPt: (0, import_mysql_core2.int)("question_pt").default(0).notNull(),
  questionEn: (0, import_mysql_core2.int)("question_en").default(0).notNull(),
  questionEs: (0, import_mysql_core2.int)("question_es").default(0).notNull(),
  questionType: (0, import_mysql_core2.int)("question_type").default(0).notNull(),
  answerOptionId: (0, import_mysql_core2.int)("answer_option_id").default(0).notNull(),
  answerPt: (0, import_mysql_core2.int)("answer_pt").default(0).notNull(),
  answerEs: (0, import_mysql_core2.int)("answer_es").default(0).notNull(),
  answerEn: (0, import_mysql_core2.int)("answer_en").default(0).notNull(),
  answer: (0, import_mysql_core2.int)().default(0).notNull(),
  whitelabel: (0, import_mysql_core2.int)().default(0).notNull(),
  whitelabelQuestionActive: (0, import_mysql_core2.int)("whitelabel_question_active").default(0).notNull(),
  whitelabelQuestionRequired: (0, import_mysql_core2.int)("whitelabel_question_required").default(0).notNull(),
  createdAt: (0, import_mysql_core2.int)("created_at").default(0).notNull(),
  updatedAt: (0, import_mysql_core2.int)("updated_at").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm2.sql`select 1 AS \`squidId\`,1 AS \`group_id\`,1 AS \`group_pt\`,1 AS \`group_en\`,1 AS \`group_es\`,1 AS \`question_id\`,1 AS \`question_pt\`,1 AS \`question_en\`,1 AS \`question_es\`,1 AS \`question_type\`,1 AS \`answer_option_id\`,1 AS \`answer_pt\`,1 AS \`answer_es\`,1 AS \`answer_en\`,1 AS \`answer\`,1 AS \`whitelabel\`,1 AS \`whitelabel_question_active\`,1 AS \`whitelabel_question_required\`,1 AS \`created_at\`,1 AS \`updated_at\``);
var fullInstagramProfile = (0, import_mysql_core2.mysqlView)("full_instagram_profile", {
  id: (0, import_mysql_core2.int)().default(0).notNull(),
  squidid: (0, import_mysql_core2.int)().default(0).notNull(),
  username: (0, import_mysql_core2.int)().default(0).notNull(),
  identifiedat: (0, import_mysql_core2.int)().default(0).notNull(),
  followers: (0, import_mysql_core2.int)().default(0).notNull(),
  following: (0, import_mysql_core2.int)().default(0).notNull(),
  engagementrate: (0, import_mysql_core2.int)().default(0).notNull(),
  score: (0, import_mysql_core2.int)().default(0).notNull(),
  isbusiness: (0, import_mysql_core2.int)().default(0).notNull(),
  facebooklinked: (0, import_mysql_core2.int)().default(0).notNull(),
  name: (0, import_mysql_core2.int)().default(0).notNull(),
  email: (0, import_mysql_core2.int)().default(0).notNull(),
  birthday: (0, import_mysql_core2.int)().default(0).notNull(),
  gender: (0, import_mysql_core2.int)().default(0).notNull(),
  phone: (0, import_mysql_core2.int)().default(0).notNull(),
  address: (0, import_mysql_core2.int)().default(0).notNull(),
  complement: (0, import_mysql_core2.int)().default(0).notNull(),
  city: (0, import_mysql_core2.int)().default(0).notNull(),
  uf: (0, import_mysql_core2.int)().default(0).notNull(),
  country: (0, import_mysql_core2.int)().default(0).notNull(),
  zipcode: (0, import_mysql_core2.int)().default(0).notNull(),
  document: (0, import_mysql_core2.int)().default(0).notNull(),
  isPersonAccount: (0, import_mysql_core2.int)().default(0).notNull(),
  registeredat: (0, import_mysql_core2.int)().default(0).notNull(),
  allowSuggestionEmail: (0, import_mysql_core2.int)().default(0).notNull(),
  race: (0, import_mysql_core2.int)().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm2.sql`select 1 AS \`id\`,1 AS \`squidid\`,1 AS \`username\`,1 AS \`identifiedat\`,1 AS \`followers\`,1 AS \`following\`,1 AS \`engagementrate\`,1 AS \`score\`,1 AS \`isbusiness\`,1 AS \`facebooklinked\`,1 AS \`name\`,1 AS \`email\`,1 AS \`birthday\`,1 AS \`gender\`,1 AS \`phone\`,1 AS \`address\`,1 AS \`complement\`,1 AS \`city\`,1 AS \`uf\`,1 AS \`country\`,1 AS \`zipcode\`,1 AS \`document\`,1 AS \`isPersonAccount\`,1 AS \`registeredat\`,1 AS \`allowSuggestionEmail\`,1 AS \`race\``);
var instagramProfileMetrics = (0, import_mysql_core2.mysqlView)("instagram_profile_metrics", {
  id: (0, import_mysql_core2.int)().default(0).notNull(),
  squidId: (0, import_mysql_core2.int)().default(0).notNull(),
  username: (0, import_mysql_core2.int)().default(0).notNull(),
  exists: (0, import_mysql_core2.int)().default(0).notNull(),
  searchable: (0, import_mysql_core2.int)().default(0).notNull(),
  followers: (0, import_mysql_core2.int)().default(0).notNull(),
  isBusiness: (0, import_mysql_core2.int)().default(0).notNull(),
  scrapperEngagementRate: (0, import_mysql_core2.int)().default(0).notNull(),
  totalMedias: (0, import_mysql_core2.int)().default(0).notNull(),
  medias: (0, import_mysql_core2.int)().default(0).notNull(),
  follows: (0, import_mysql_core2.int)().default(0).notNull(),
  likes: (0, import_mysql_core2.int)().default(0).notNull(),
  comments: (0, import_mysql_core2.int)().default(0).notNull(),
  tier: (0, import_mysql_core2.int)().default(0).notNull(),
  score: (0, import_mysql_core2.int)().default(0).notNull(),
  score1: (0, import_mysql_core2.int)().default(0).notNull(),
  score2: (0, import_mysql_core2.int)().default(0).notNull(),
  score3: (0, import_mysql_core2.int)().default(0).notNull(),
  score4: (0, import_mysql_core2.int)().default(0).notNull(),
  score5: (0, import_mysql_core2.int)().default(0).notNull(),
  storiesEffectiveReach: (0, import_mysql_core2.int)().default(0).notNull(),
  profileViews: (0, import_mysql_core2.int)().default(0).notNull(),
  hasMediaKit: (0, import_mysql_core2.int)().default(0).notNull(),
  totalStoriesImpressions: (0, import_mysql_core2.int)().default(0).notNull(),
  totalStoriesReach: (0, import_mysql_core2.int)().default(0).notNull(),
  totalStoriesReplies: (0, import_mysql_core2.int)().default(0).notNull(),
  totalStoriesTapBacks: (0, import_mysql_core2.int)().default(0).notNull(),
  totalPostsReach: (0, import_mysql_core2.int)().default(0).notNull(),
  totalPostsSaves: (0, import_mysql_core2.int)().default(0).notNull(),
  totalPostsImpressions: (0, import_mysql_core2.int)().default(0).notNull(),
  numberPostsActivityScore: (0, import_mysql_core2.int)().default(0).notNull(),
  numberStoriesScore: (0, import_mysql_core2.int)().default(0).notNull(),
  daysPostsScore: (0, import_mysql_core2.int)().default(0).notNull(),
  daysStoriesScore: (0, import_mysql_core2.int)().default(0).notNull(),
  advertisingPostsEngagementRate: (0, import_mysql_core2.int)().default(0).notNull(),
  noAdvertisingPostsEngagementRate: (0, import_mysql_core2.int)().default(0).notNull(),
  advertisingStoriesEngagementRate: (0, import_mysql_core2.int)().default(0).notNull(),
  noAdvertisingStoriesEngagementRate: (0, import_mysql_core2.int)().default(0).notNull(),
  advertisingContentPercentage: (0, import_mysql_core2.int)().default(0).notNull(),
  advertisingPostsPercentage: (0, import_mysql_core2.int)().default(0).notNull(),
  advertisingStoriesPercentage: (0, import_mysql_core2.int)().default(0).notNull(),
  postImageEngagementRate: (0, import_mysql_core2.int)().default(0).notNull(),
  postCarouselEngagementRate: (0, import_mysql_core2.int)().default(0).notNull(),
  postVideoEngagementRate: (0, import_mysql_core2.int)().default(0).notNull(),
  storiesVideoEngagementRate: (0, import_mysql_core2.int)().default(0).notNull(),
  storiesImageEngagementRate: (0, import_mysql_core2.int)().default(0).notNull(),
  storiesCompleteEngagementRate: (0, import_mysql_core2.int)().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm2.sql`select 1 AS \`id\`,1 AS \`squidId\`,1 AS \`username\`,1 AS \`exists\`,1 AS \`searchable\`,1 AS \`followers\`,1 AS \`isBusiness\`,1 AS \`scrapperEngagementRate\`,1 AS \`totalMedias\`,1 AS \`medias\`,1 AS \`follows\`,1 AS \`likes\`,1 AS \`comments\`,1 AS \`tier\`,1 AS \`score\`,1 AS \`score1\`,1 AS \`score2\`,1 AS \`score3\`,1 AS \`score4\`,1 AS \`score5\`,1 AS \`storiesEffectiveReach\`,1 AS \`profileViews\`,1 AS \`hasMediaKit\`,1 AS \`totalStoriesImpressions\`,1 AS \`totalStoriesReach\`,1 AS \`totalStoriesReplies\`,1 AS \`totalStoriesTapBacks\`,1 AS \`totalPostsReach\`,1 AS \`totalPostsSaves\`,1 AS \`totalPostsImpressions\`,1 AS \`numberPostsActivityScore\`,1 AS \`numberStoriesScore\`,1 AS \`daysPostsScore\`,1 AS \`daysStoriesScore\`,1 AS \`advertisingPostsEngagementRate\`,1 AS \`noAdvertisingPostsEngagementRate\`,1 AS \`advertisingStoriesEngagementRate\`,1 AS \`noAdvertisingStoriesEngagementRate\`,1 AS \`advertisingContentPercentage\`,1 AS \`advertisingPostsPercentage\`,1 AS \`advertisingStoriesPercentage\`,1 AS \`postImageEngagementRate\`,1 AS \`postCarouselEngagementRate\`,1 AS \`postVideoEngagementRate\`,1 AS \`storiesVideoEngagementRate\`,1 AS \`storiesImageEngagementRate\`,1 AS \`storiesCompleteEngagementRate\``);
var vwInfluencersToValidateBankAccount = (0, import_mysql_core2.mysqlView)("VW_INFLUENCERS_TO_VALIDATE_BANK_ACCOUNT", {
  profileId: (0, import_mysql_core2.int)().default(0).notNull(),
  updatedAt: (0, import_mysql_core2.int)().default(0).notNull(),
  verificationStatus: (0, import_mysql_core2.int)().default(0).notNull(),
  verificationId: (0, import_mysql_core2.int)().default(0).notNull(),
  verificatedAt: (0, import_mysql_core2.int)().default(0).notNull(),
  bankName: (0, import_mysql_core2.int)().default(0).notNull(),
  bankCode: (0, import_mysql_core2.int)().default(0).notNull(),
  bankAccountType: (0, import_mysql_core2.int)().default(0).notNull(),
  bankAccountAgency: (0, import_mysql_core2.int)().default(0).notNull(),
  bankAccountNumber: (0, import_mysql_core2.int)().default(0).notNull(),
  bankAccountDigit: (0, import_mysql_core2.int)().default(0).notNull(),
  socialNetwork: (0, import_mysql_core2.int)().default(0).notNull(),
  valid: (0, import_mysql_core2.int)().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm2.sql`select 1 AS \`profileId\`,1 AS \`updatedAt\`,1 AS \`verificationStatus\`,1 AS \`verificationId\`,1 AS \`verificatedAt\`,1 AS \`bankName\`,1 AS \`bankCode\`,1 AS \`bankAccountType\`,1 AS \`bankAccountAgency\`,1 AS \`bankAccountNumber\`,1 AS \`bankAccountDigit\`,1 AS \`socialNetwork\`,1 AS \`valid\``);
var vwInfluencersCanAnticipate = (0, import_mysql_core2.mysqlView)("VW_INFLUENCERS_CAN_ANTICIPATE", {
  id: (0, import_mysql_core2.int)().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm2.sql`select 1 AS \`id\``);
var vwProgressiveRegistrationQuestions = (0, import_mysql_core2.mysqlView)("vw_progressive_registration_questions", {
  questionId: (0, import_mysql_core2.int)("question_id").default(0).notNull(),
  questionPt: (0, import_mysql_core2.int)("question_pt").default(0).notNull(),
  questionEn: (0, import_mysql_core2.int)("question_en").default(0).notNull(),
  questionEs: (0, import_mysql_core2.int)("question_es").default(0).notNull(),
  questionType: (0, import_mysql_core2.int)("question_type").default(0).notNull(),
  groupId: (0, import_mysql_core2.int)("group_id").default(0).notNull(),
  groupPt: (0, import_mysql_core2.int)("group_pt").default(0).notNull(),
  groupEn: (0, import_mysql_core2.int)("group_en").default(0).notNull(),
  groupEs: (0, import_mysql_core2.int)("group_es").default(0).notNull(),
  answerOptionId: (0, import_mysql_core2.int)("answer_option_id").default(0).notNull(),
  answerPt: (0, import_mysql_core2.int)("answer_pt").default(0).notNull(),
  answerEs: (0, import_mysql_core2.int)("answer_es").default(0).notNull(),
  answerEn: (0, import_mysql_core2.int)("answer_en").default(0).notNull(),
  whitelabel: (0, import_mysql_core2.int)().default(0).notNull(),
  whitelabelQuestionActive: (0, import_mysql_core2.int)("whitelabel_question_active").default(0).notNull(),
  whitelabelQuestionRequired: (0, import_mysql_core2.int)("whitelabel_question_required").default(0).notNull(),
  whitelabelQuestionCreatedAt: (0, import_mysql_core2.int)("whitelabel_question_created_at").default(0).notNull(),
  whitelabelQuestionUpdatedAt: (0, import_mysql_core2.int)("whitelabel_question_updated_at").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm2.sql`select 1 AS \`question_id\`,1 AS \`question_pt\`,1 AS \`question_en\`,1 AS \`question_es\`,1 AS \`question_type\`,1 AS \`group_id\`,1 AS \`group_pt\`,1 AS \`group_en\`,1 AS \`group_es\`,1 AS \`answer_option_id\`,1 AS \`answer_pt\`,1 AS \`answer_es\`,1 AS \`answer_en\`,1 AS \`whitelabel\`,1 AS \`whitelabel_question_active\`,1 AS \`whitelabel_question_required\`,1 AS \`whitelabel_question_created_at\`,1 AS \`whitelabel_question_updated_at\``);

// src/databases/nps/schema.ts
var schema_exports3 = {};
__export(schema_exports3, {
  research: () => research,
  researchAnswer: () => researchAnswer,
  researchQuestion: () => researchQuestion,
  researchQuestionGroup: () => researchQuestionGroup
});
var import_drizzle_orm3 = require("drizzle-orm");
var import_mysql_core3 = require("drizzle-orm/mysql-core");
var research = (0, import_mysql_core3.mysqlTable)(
  "research",
  {
    id: (0, import_mysql_core3.varchar)({ length: 36 }).notNull(),
    userId: (0, import_mysql_core3.varchar)("user_id", { length: 255 }).notNull(),
    userName: (0, import_mysql_core3.varchar)("user_name", { length: 150 }),
    userEmail: (0, import_mysql_core3.varchar)("user_email", { length: 100 }),
    campaignId: (0, import_mysql_core3.varchar)("campaign_id", { length: 255 }).notNull(),
    campaignTitle: (0, import_mysql_core3.varchar)("campaign_title", { length: 150 }),
    organizationId: (0, import_mysql_core3.varchar)("organization_id", { length: 255 }),
    organizationName: (0, import_mysql_core3.varchar)("organization_name", { length: 255 }),
    systemType: (0, import_mysql_core3.varchar)("system_type", { length: 50 }).notNull(),
    questionGroupId: (0, import_mysql_core3.varchar)("question_group_id", { length: 36 }).notNull().references(() => researchQuestionGroup.id),
    seenTime: (0, import_mysql_core3.int)("seen_time").default(0).notNull(),
    done: (0, import_mysql_core3.tinyint)().default(0).notNull(),
    createdAt: (0, import_mysql_core3.datetime)("created_at", { mode: "string", fsp: 3 }).notNull(),
    updatedAt: (0, import_mysql_core3.datetime)("updated_at", { mode: "string" }),
    deletedAt: (0, import_mysql_core3.datetime)("deleted_at", { mode: "string" })
  },
  (table) => {
    return {
      questionGroupId: (0, import_mysql_core3.index)("question_group_id").on(table.questionGroupId),
      researchId: (0, import_mysql_core3.primaryKey)({ columns: [table.id], name: "research_id" }),
      userId: (0, import_mysql_core3.unique)("user_id").on(table.userId, table.campaignId, table.questionGroupId)
    };
  }
);
var researchAnswer = (0, import_mysql_core3.mysqlTable)(
  "research_answer",
  {
    id: (0, import_mysql_core3.varchar)({ length: 36 }).notNull(),
    researchAnswer: (0, import_mysql_core3.varchar)("research_answer", { length: 255 }),
    score: (0, import_mysql_core3.int)(),
    sharedQuestionId: (0, import_mysql_core3.varchar)("shared_question_id", { length: 36 }).references(() => researchQuestion.sharedQuestionId),
    researchId: (0, import_mysql_core3.varchar)("research_id", { length: 36 }).references(() => research.id, { onDelete: "cascade" }),
    createdAt: (0, import_mysql_core3.datetime)("created_at", { mode: "string" }).default(import_drizzle_orm3.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core3.datetime)("updated_at", { mode: "string" }),
    deletedAt: (0, import_mysql_core3.datetime)("deleted_at", { mode: "string" }),
    optionalQuestion: (0, import_mysql_core3.int)("optional_question").default(0)
  },
  (table) => {
    return {
      sharedQuestionId: (0, import_mysql_core3.index)("shared_question_id").on(table.sharedQuestionId),
      researchAnswerId: (0, import_mysql_core3.primaryKey)({ columns: [table.id], name: "research_answer_id" })
    };
  }
);
var researchQuestion = (0, import_mysql_core3.mysqlTable)(
  "research_question",
  {
    id: (0, import_mysql_core3.varchar)({ length: 36 }).notNull(),
    sharedQuestionId: (0, import_mysql_core3.varchar)("shared_question_id", { length: 36 }),
    question: (0, import_mysql_core3.varchar)({ length: 255 }),
    questionType: (0, import_mysql_core3.varchar)("question_type", { length: 50 }),
    questionGroupId: (0, import_mysql_core3.varchar)("question_group_id", { length: 36 }).references(() => researchQuestionGroup.id),
    language: (0, import_mysql_core3.varchar)({ length: 5 }).default("pt-br").notNull(),
    createdAt: (0, import_mysql_core3.datetime)("created_at", { mode: "string" }).default(import_drizzle_orm3.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core3.datetime)("updated_at", { mode: "string" }),
    deletedAt: (0, import_mysql_core3.datetime)("deleted_at", { mode: "string" }),
    optional: (0, import_mysql_core3.int)().default(0)
  },
  (table) => {
    return {
      questionGroupId: (0, import_mysql_core3.index)("question_group_id").on(table.questionGroupId),
      researchQuestionId: (0, import_mysql_core3.primaryKey)({ columns: [table.id], name: "research_question_id" }),
      sharedQuestionId: (0, import_mysql_core3.unique)("shared_question_id").on(table.sharedQuestionId, table.language)
    };
  }
);
var researchQuestionGroup = (0, import_mysql_core3.mysqlTable)(
  "research_question_group",
  {
    id: (0, import_mysql_core3.varchar)({ length: 36 }).notNull(),
    name: (0, import_mysql_core3.varchar)({ length: 255 }),
    tag: (0, import_mysql_core3.varchar)({ length: 100 }).notNull(),
    createdAt: (0, import_mysql_core3.datetime)("created_at", { mode: "string" }).default(import_drizzle_orm3.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core3.datetime)("updated_at", { mode: "string" }),
    deletedAt: (0, import_mysql_core3.datetime)("deleted_at", { mode: "string" })
  },
  (table) => {
    return {
      researchQuestionGroupId: (0, import_mysql_core3.primaryKey)({ columns: [table.id], name: "research_question_group_id" }),
      tag: (0, import_mysql_core3.unique)("tag").on(table.tag)
    };
  }
);

// src/databases/payment/schema.ts
var schema_exports4 = {};
__export(schema_exports4, {
  anoMesDueDateTransactions: () => anoMesDueDateTransactions,
  campaignsTransactions: () => campaignsTransactions,
  charges: () => charges,
  companyFiles: () => companyFiles,
  compositions: () => compositions,
  customerPayments: () => customerPayments,
  dueDateTransactions: () => dueDateTransactions,
  influencerPayments: () => influencerPayments,
  influencerZoopBankAccounts: () => influencerZoopBankAccounts,
  influencersTotalTransactions: () => influencersTotalTransactions,
  nfCnaes: () => nfCnaes,
  nfImport: () => nfImport,
  nfs: () => nfs,
  pagamentosForaDoPrazo: () => pagamentosForaDoPrazo,
  transactionBankAccounts: () => transactionBankAccounts,
  transactionBeneficiaries: () => transactionBeneficiaries,
  transactionConsolidated: () => transactionConsolidated,
  transactions: () => transactions,
  transactionsHistory: () => transactionsHistory,
  transactionsSchedule: () => transactionsSchedule,
  transfeeraRawDataCallback: () => transfeeraRawDataCallback,
  vmTransactionsReadyToPayInCurrentMonth: () => vmTransactionsReadyToPayInCurrentMonth,
  vwTransactionsWithoutInfluencerPayment: () => vwTransactionsWithoutInfluencerPayment,
  vwTransfeeraWebhookReturn: () => vwTransfeeraWebhookReturn,
  webhooksLogs: () => webhooksLogs
});
var import_drizzle_orm4 = require("drizzle-orm");
var import_mysql_core4 = require("drizzle-orm/mysql-core");
var charges = (0, import_mysql_core4.mysqlTable)(
  "charges",
  {
    seqId: (0, import_mysql_core4.bigint)({ mode: "number" }).autoincrement().notNull(),
    createdAt: (0, import_mysql_core4.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core4.datetime)({ mode: "date" }),
    deletedAt: (0, import_mysql_core4.datetime)({ mode: "date" }),
    amount: (0, import_mysql_core4.double)({ precision: 10, scale: 2 }).notNull(),
    totalAmount: (0, import_mysql_core4.double)({ precision: 10, scale: 2 }).notNull(),
    fees: (0, import_mysql_core4.double)({ precision: 10, scale: 2 }).notNull(),
    dueDate: (0, import_mysql_core4.date)({ mode: "date" }),
    currency: (0, import_mysql_core4.varchar)({ length: 3 }).default("BRL").notNull(),
    paymentOrderUrl: (0, import_mysql_core4.longtext)(),
    paymentGatewayTransactionId: (0, import_mysql_core4.longtext)()
  },
  (table) => {
    return {
      chargesSeqId: (0, import_mysql_core4.primaryKey)({ columns: [table.seqId], name: "charges_seqId" })
    };
  }
);
var companyFiles = (0, import_mysql_core4.mysqlTable)(
  "companyFiles",
  {
    seqId: (0, import_mysql_core4.bigint)({ mode: "number" }).autoincrement().notNull(),
    squidId: (0, import_mysql_core4.varchar)({ length: 36 }).notNull(),
    companyDocument: (0, import_mysql_core4.varchar)({ length: 50 }).notNull(),
    urlStorage: (0, import_mysql_core4.text)(),
    status: (0, import_mysql_core4.varchar)({ length: 40 }).notNull(),
    reason: (0, import_mysql_core4.varchar)({ length: 100 }),
    uploadedAt: (0, import_mysql_core4.date)({ mode: "date" }),
    validatedAt: (0, import_mysql_core4.date)({ mode: "date" }),
    deletedAt: (0, import_mysql_core4.date)({ mode: "date" })
  },
  (table) => {
    return {
      companyFilesSeqId: (0, import_mysql_core4.primaryKey)({ columns: [table.seqId], name: "companyFiles_seqId" })
    };
  }
);
var compositions = (0, import_mysql_core4.mysqlTable)(
  "compositions",
  {
    seqId: (0, import_mysql_core4.int)().autoincrement().notNull(),
    chargeId: (0, import_mysql_core4.int)().notNull(),
    squidId: (0, import_mysql_core4.varchar)({ length: 36 }),
    username: (0, import_mysql_core4.varchar)({ length: 255 }),
    paymentType: (0, import_mysql_core4.varchar)({ length: 5 }),
    document: (0, import_mysql_core4.varchar)({ length: 50 }),
    fullName: (0, import_mysql_core4.varchar)({ length: 255 }),
    birthday: (0, import_mysql_core4.date)({ mode: "date" }),
    transactionId: (0, import_mysql_core4.varchar)({ length: 60 }),
    dueDate: (0, import_mysql_core4.date)({ mode: "date" }),
    transactionStatus: (0, import_mysql_core4.varchar)({ length: 50 }),
    netValue: (0, import_mysql_core4.float)(),
    grossValue: (0, import_mysql_core4.float)(),
    nf: (0, import_mysql_core4.varchar)({ length: 255 }),
    pis: (0, import_mysql_core4.varchar)({ length: 50 }),
    address: (0, import_mysql_core4.varchar)({ length: 255 }),
    addressNumber: (0, import_mysql_core4.varchar)({ length: 45 }),
    neighborhood: (0, import_mysql_core4.varchar)({ length: 255 }),
    zipcode: (0, import_mysql_core4.varchar)({ length: 15 }),
    city: (0, import_mysql_core4.varchar)({ length: 255 }),
    uf: (0, import_mysql_core4.varchar)({ length: 255 }),
    country: (0, import_mysql_core4.varchar)({ length: 255 }),
    bankAccountNumber: (0, import_mysql_core4.varchar)({ length: 50 }),
    bankAccountDigit: (0, import_mysql_core4.varchar)({ length: 5 }),
    bankAccountAgency: (0, import_mysql_core4.varchar)({ length: 11 }),
    bankCode: (0, import_mysql_core4.varchar)({ length: 10 }),
    bankName: (0, import_mysql_core4.varchar)({ length: 100 }),
    bankAccountType: (0, import_mysql_core4.varchar)({ length: 20 })
  },
  (table) => {
    return {
      compositionsSeqId: (0, import_mysql_core4.primaryKey)({ columns: [table.seqId], name: "compositions_seqId" }),
      transactionId: (0, import_mysql_core4.unique)("transactionId").on(table.transactionId)
    };
  }
);
var customerPayments = (0, import_mysql_core4.mysqlTable)(
  "customerPayments",
  {
    seqId: (0, import_mysql_core4.bigint)({ mode: "number" }).autoincrement().notNull(),
    transactionId: (0, import_mysql_core4.varchar)({ length: 60 }).notNull().references(() => transactions.transactionId),
    createdAt: (0, import_mysql_core4.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core4.datetime)({ mode: "date" }),
    deletedAt: (0, import_mysql_core4.datetime)({ mode: "date" })
  },
  (table) => {
    return {
      transactionId: (0, import_mysql_core4.index)("transactionId").on(table.transactionId),
      customerPaymentsSeqId: (0, import_mysql_core4.primaryKey)({ columns: [table.seqId], name: "customerPayments_seqId" })
    };
  }
);
var influencerPayments = (0, import_mysql_core4.mysqlTable)(
  "influencerPayments",
  {
    seqId: (0, import_mysql_core4.bigint)({ mode: "number" }).autoincrement().notNull(),
    transactionId: (0, import_mysql_core4.varchar)({ length: 60 }).notNull().references(() => transactions.transactionId, { onDelete: "cascade", onUpdate: "cascade" }),
    recruitmentId: (0, import_mysql_core4.varchar)({ length: 60 }).notNull(),
    campaignId: (0, import_mysql_core4.varchar)({ length: 50 }).notNull(),
    campaignName: (0, import_mysql_core4.varchar)({ length: 150 }).notNull(),
    campaignEndDate: (0, import_mysql_core4.datetime)({ mode: "date" }),
    campaignTimezone: (0, import_mysql_core4.varchar)({ length: 100 }),
    dateUsedToCalculate: (0, import_mysql_core4.datetime)({ mode: "date" }),
    squidId: (0, import_mysql_core4.varchar)({ length: 60 }).notNull(),
    instagramUsername: (0, import_mysql_core4.varchar)({ length: 50 }),
    instagramProfileId: (0, import_mysql_core4.bigint)({ mode: "number" }),
    youtubeChannel: (0, import_mysql_core4.varchar)({ length: 50 }),
    youtubeChannelId: (0, import_mysql_core4.varchar)({ length: 36 }),
    pinterestUsername: (0, import_mysql_core4.varchar)({ length: 50 }),
    pinterestProfileId: (0, import_mysql_core4.varchar)({ length: 36 }),
    nfId: (0, import_mysql_core4.varchar)({ length: 60 }),
    whitelabelId: (0, import_mysql_core4.varchar)({ length: 24 }),
    whitelabelDomain: (0, import_mysql_core4.varchar)({ length: 150 }),
    createdAt: (0, import_mysql_core4.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core4.datetime)({ mode: "date" }),
    deletedAt: (0, import_mysql_core4.datetime)({ mode: "date" }),
    paymentStatus: (0, import_mysql_core4.varchar)({ length: 50 }).default("").notNull(),
    amount: (0, import_mysql_core4.float)().notNull(),
    sourceId: (0, import_mysql_core4.bigint)({ mode: "number" }),
    socialNetwork: (0, import_mysql_core4.varchar)({ length: 255 }),
    socialNetworkId: (0, import_mysql_core4.varchar)({ length: 255 }),
    socialNetworkUsername: (0, import_mysql_core4.varchar)({ length: 255 }),
    responsiblePayment: (0, import_mysql_core4.varchar)({ length: 200 }),
    responsibleId: (0, import_mysql_core4.varchar)({ length: 200 }),
    idPipefy: (0, import_mysql_core4.varchar)({ length: 60 }),
    description: (0, import_mysql_core4.varchar)({ length: 50 }),
    customDueDate: (0, import_mysql_core4.date)({ mode: "date" }),
    note: (0, import_mysql_core4.varchar)({ length: 1e3 }),
    scopeId: (0, import_mysql_core4.varchar)({ length: 32 })
  },
  (table) => {
    return {
      deletedAtIdx: (0, import_mysql_core4.index)("influencerPayments_deletedAt_IDX").on(table.deletedAt),
      idPipefyIdx: (0, import_mysql_core4.index)("influencerPayments_idPipefy_IDX").on(table.idPipefy, table.campaignId, table.seqId),
      influencerPaymentsSeqId: (0, import_mysql_core4.primaryKey)({ columns: [table.seqId], name: "influencerPayments_seqId" })
    };
  }
);
var influencerZoopBankAccounts = (0, import_mysql_core4.mysqlTable)(
  "influencerZoopBankAccounts",
  {
    seqId: (0, import_mysql_core4.bigint)({ mode: "number" }).autoincrement().notNull(),
    squidId: (0, import_mysql_core4.varchar)({ length: 60 }).notNull(),
    paymentGatewaySellerId: (0, import_mysql_core4.varchar)({ length: 60 }).notNull(),
    paymentGatewayBankAccountId: (0, import_mysql_core4.varchar)({ length: 60 }).notNull(),
    paymentGatewayBankAccountToken: (0, import_mysql_core4.varchar)({ length: 60 }).default(""),
    bankCode: (0, import_mysql_core4.varchar)({ length: 10 }).notNull(),
    bankName: (0, import_mysql_core4.varchar)({ length: 100 }).notNull(),
    bankAccountHolderName: (0, import_mysql_core4.varchar)({ length: 100 }),
    bankAccountHolderDocument: (0, import_mysql_core4.varchar)({ length: 15 }).notNull(),
    bankAccountHolderTradingName: (0, import_mysql_core4.varchar)({ length: 100 }),
    bankAccountRoutingNumber: (0, import_mysql_core4.varchar)({ length: 10 }).notNull(),
    bankAccountNumber: (0, import_mysql_core4.varchar)({ length: 50 }).notNull(),
    bankAccountVerificationNumber: (0, import_mysql_core4.varchar)({ length: 1 }).notNull(),
    bankAccountType: (0, import_mysql_core4.varchar)({ length: 20 }).notNull(),
    bankAccountHolderType: (0, import_mysql_core4.varchar)({ length: 20 }).notNull(),
    createdAt: (0, import_mysql_core4.datetime)({ mode: "date" }),
    updatedAt: (0, import_mysql_core4.datetime)({ mode: "date" }),
    deletedAt: (0, import_mysql_core4.datetime)({ mode: "date" })
  },
  (table) => {
    return {
      influencerZoopBankAccountsSeqId: (0, import_mysql_core4.primaryKey)({ columns: [table.seqId], name: "influencerZoopBankAccounts_seqId" }),
      squidId: (0, import_mysql_core4.unique)("squidId").on(table.squidId)
    };
  }
);
var nfCnaes = (0, import_mysql_core4.mysqlTable)(
  "nf_cnaes",
  {
    id: (0, import_mysql_core4.int)().autoincrement().notNull(),
    uf: (0, import_mysql_core4.char)({ length: 2 }).notNull(),
    codigo: (0, import_mysql_core4.varchar)({ length: 45 }).notNull(),
    createdAt: (0, import_mysql_core4.datetime)("created_at", { mode: "date" }).default(import_drizzle_orm4.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core4.datetime)("updated_at", { mode: "date" }).default(import_drizzle_orm4.sql`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      nfCnaesId: (0, import_mysql_core4.primaryKey)({ columns: [table.id], name: "nf_cnaes_id" }),
      idUnique: (0, import_mysql_core4.unique)("id_UNIQUE").on(table.id)
    };
  }
);
var nfImport = (0, import_mysql_core4.mysqlTable)(
  "nf_import",
  {
    id: (0, import_mysql_core4.int)().autoincrement().notNull(),
    objectId: (0, import_mysql_core4.varchar)({ length: 24 }).notNull(),
    numeroNf: (0, import_mysql_core4.varchar)("numero_nf", { length: 45 }).notNull(),
    dataEmissao: (0, import_mysql_core4.datetime)("data_emissao", { mode: "date" }).notNull(),
    ufGerador: (0, import_mysql_core4.char)("uf_gerador", { length: 2 }).notNull(),
    codigoMunicipio: (0, import_mysql_core4.varchar)("codigo_municipio", { length: 45 }),
    razaoSocial: (0, import_mysql_core4.varchar)("razao_social", { length: 450 }).notNull(),
    identificacaoPrestador: (0, import_mysql_core4.varchar)("identificacao_prestador", { length: 14 }).notNull(),
    inscricaoEstadual: (0, import_mysql_core4.varchar)("inscricao_estadual", { length: 14 }),
    inscricaoMunicipal: (0, import_mysql_core4.varchar)("inscricao_municipal", { length: 45 }),
    discriminacaoServico: (0, import_mysql_core4.longtext)("discriminacao_servico"),
    valorAliquota: (0, import_mysql_core4.float)("valor_aliquota"),
    valorServico: (0, import_mysql_core4.float)("valor_servico"),
    valorIss: (0, import_mysql_core4.float)("valor_iss"),
    issRetido: (0, import_mysql_core4.float)("iss_retido"),
    listaServico: (0, import_mysql_core4.varchar)("lista_servico", { length: 45 }),
    municipioServico: (0, import_mysql_core4.varchar)("municipio_servico", { length: 10 }),
    chave: (0, import_mysql_core4.varchar)({ length: 90 }).notNull(),
    nfStorageTmp: (0, import_mysql_core4.varchar)("nf_storage_tmp", { length: 150 }).notNull(),
    codigoVerificacao: (0, import_mysql_core4.varchar)("codigo_verificacao", { length: 45 }).notNull(),
    createdAt: (0, import_mysql_core4.datetime)("created_at", { mode: "date" }).default(import_drizzle_orm4.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core4.datetime)("updated_at", { mode: "date" }).default(import_drizzle_orm4.sql`(CURRENT_TIMESTAMP)`).notNull(),
    deletedAt: (0, import_mysql_core4.datetime)("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      nfImportId: (0, import_mysql_core4.primaryKey)({ columns: [table.id], name: "nf_import_id" }),
      idUnique: (0, import_mysql_core4.unique)("id_UNIQUE").on(table.id),
      chaveUnique: (0, import_mysql_core4.unique)("chave_UNIQUE").on(table.chave)
    };
  }
);
var nfs = (0, import_mysql_core4.mysqlTable)(
  "nfs",
  {
    seqId: (0, import_mysql_core4.bigint)({ mode: "number" }).autoincrement().notNull(),
    nfId: (0, import_mysql_core4.varchar)({ length: 60 }).notNull(),
    transactionId: (0, import_mysql_core4.varchar)({ length: 60 }).notNull().references(() => transactions.transactionId),
    squidId: (0, import_mysql_core4.varchar)({ length: 60 }).notNull(),
    serialnumber: (0, import_mysql_core4.varchar)({ length: 45 }),
    value: (0, import_mysql_core4.double)(),
    emissionDate: (0, import_mysql_core4.date)({ mode: "date" }),
    urlStorage: (0, import_mysql_core4.text)().notNull(),
    xmlUrlStorage: (0, import_mysql_core4.text)(),
    backofficeApproved: (0, import_mysql_core4.tinyint)().default(0).notNull(),
    parsedValue: (0, import_mysql_core4.double)(),
    parsedEmissionDate: (0, import_mysql_core4.date)({ mode: "date" }),
    parsedSerialNumber: (0, import_mysql_core4.varchar)({ length: 45 }),
    parsedCnae: (0, import_mysql_core4.varchar)({ length: 45 }),
    issValue: (0, import_mysql_core4.float)(),
    imported: (0, import_mysql_core4.varchar)({ length: 90 }),
    createdAt: (0, import_mysql_core4.datetime)({ mode: "date" }).default(import_drizzle_orm4.sql`(CURRENT_TIMESTAMP)`).notNull(),
    deletedAt: (0, import_mysql_core4.datetime)({ mode: "date" })
  },
  (table) => {
    return {
      transactionId: (0, import_mysql_core4.index)("transactionId").on(table.transactionId),
      nfsSeqId: (0, import_mysql_core4.primaryKey)({ columns: [table.seqId], name: "nfs_seqId" })
    };
  }
);
var transactionBankAccounts = (0, import_mysql_core4.mysqlTable)(
  "transactionBankAccounts",
  {
    seqId: (0, import_mysql_core4.bigint)({ mode: "number" }).autoincrement().notNull(),
    transactionId: (0, import_mysql_core4.varchar)({ length: 60 }).notNull().references(() => transactions.transactionId),
    bankCode: (0, import_mysql_core4.varchar)({ length: 20 }).notNull(),
    bankName: (0, import_mysql_core4.varchar)({ length: 100 }).notNull(),
    bankAccountHolderName: (0, import_mysql_core4.varchar)({ length: 150 }).notNull(),
    bankAccountHolderDocument: (0, import_mysql_core4.varchar)({ length: 100 }).notNull(),
    bankAccountHolderTradingName: (0, import_mysql_core4.varchar)({ length: 150 }),
    bankAccountRoutingNumber: (0, import_mysql_core4.varchar)({ length: 20 }).notNull(),
    bankAccountNumber: (0, import_mysql_core4.bigint)({ mode: "number" }).notNull(),
    bankAccountVerificationNumber: (0, import_mysql_core4.varchar)({ length: 3 }),
    bankAccountType: (0, import_mysql_core4.varchar)({ length: 20 }).default("checking").notNull(),
    bankAccountHolderType: (0, import_mysql_core4.varchar)({ length: 2 }).default("PF").notNull(),
    paymentGatewayToken: (0, import_mysql_core4.varchar)({ length: 60 }),
    createdAt: (0, import_mysql_core4.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core4.datetime)({ mode: "date" }),
    deletedAt: (0, import_mysql_core4.datetime)({ mode: "date" }),
    paymentGatewayWithdrawTransactionId: (0, import_mysql_core4.varchar)({ length: 60 }),
    paymentGatewayWithdrawAuthorizationCode: (0, import_mysql_core4.varchar)({ length: 100 })
  },
  (table) => {
    return {
      transactionBankAccountsSeqId: (0, import_mysql_core4.primaryKey)({ columns: [table.seqId], name: "transactionBankAccounts_seqId" }),
      transactionIdUnique: (0, import_mysql_core4.unique)("transactionId_UNIQUE").on(table.transactionId)
    };
  }
);
var transactionBeneficiaries = (0, import_mysql_core4.mysqlTable)(
  "transactionBeneficiaries",
  {
    seqId: (0, import_mysql_core4.bigint)({ mode: "number" }).autoincrement().notNull(),
    transactionId: (0, import_mysql_core4.varchar)({ length: 60 }).notNull().references(() => transactions.transactionId, { onDelete: "cascade", onUpdate: "cascade" }).references(() => transactions.transactionId),
    beneficiaryTradingName: (0, import_mysql_core4.varchar)({ length: 150 }),
    beneficiaryFirstName: (0, import_mysql_core4.varchar)({ length: 100 }),
    beneficiaryLastName: (0, import_mysql_core4.varchar)({ length: 100 }),
    beneficiaryEmail: (0, import_mysql_core4.varchar)({ length: 100 }).notNull(),
    beneficiaryDocumentNumber: (0, import_mysql_core4.varchar)({ length: 20 }).notNull(),
    beneficiaryBirthDate: (0, import_mysql_core4.date)({ mode: "date" }),
    paymentGatewayId: (0, import_mysql_core4.varchar)({ length: 60 }),
    createdAt: (0, import_mysql_core4.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core4.datetime)({ mode: "date" }),
    deletedAt: (0, import_mysql_core4.datetime)({ mode: "date" }),
    recordEmployment: (0, import_mysql_core4.varchar)({ length: 50 }),
    companyFileId: (0, import_mysql_core4.int)()
  },
  (table) => {
    return {
      transactionBeneficiariesSeqId: (0, import_mysql_core4.primaryKey)({ columns: [table.seqId], name: "transactionBeneficiaries_seqId" }),
      transactionIdUnique: (0, import_mysql_core4.unique)("transactionId_UNIQUE").on(table.transactionId)
    };
  }
);
var transactionStatusEnum = [
  "analyze",
  "blocked",
  "canceled",
  "failed",
  "new",
  "paid",
  "paidByFinance",
  "pending",
  "readyToPay",
  "retry",
  "review",
  "unblocked",
  "withdrawing"
];
var transactions = (0, import_mysql_core4.mysqlTable)(
  "transactions",
  {
    transactionId: (0, import_mysql_core4.varchar)({ length: 60 }).notNull(),
    squidId: (0, import_mysql_core4.varchar)({ length: 60 }).notNull(),
    transactionStatus: (0, import_mysql_core4.mysqlEnum)(transactionStatusEnum).notNull().default("new"),
    paymentType: (0, import_mysql_core4.mysqlEnum)(["nf", "rpa"]).notNull(),
    netValue: (0, import_mysql_core4.float)().notNull(),
    grossValue: (0, import_mysql_core4.float)().notNull(),
    inssAliquot: (0, import_mysql_core4.float)(),
    inssValue: (0, import_mysql_core4.float)(),
    irAliquot: (0, import_mysql_core4.float)(),
    irDeduct: (0, import_mysql_core4.float)(),
    irValue: (0, import_mysql_core4.float)(),
    nfId: (0, import_mysql_core4.varchar)({ length: 60 }),
    issAliquot: (0, import_mysql_core4.float)(),
    issValue: (0, import_mysql_core4.float)(),
    agent: (0, import_mysql_core4.tinyint)().default(0),
    credit: (0, import_mysql_core4.float)(),
    transactionStatusDetail: (0, import_mysql_core4.varchar)({ length: 450 }),
    amount: (0, import_mysql_core4.float)().notNull(),
    anticipationValue: (0, import_mysql_core4.float)(),
    anticipationAliquot: (0, import_mysql_core4.float)(),
    anticipationContractAccepted: (0, import_mysql_core4.varchar)({ length: 450 }),
    anticipationReceiptUrl: (0, import_mysql_core4.varchar)({ length: 450 }),
    anticipationIgnore: (0, import_mysql_core4.tinyint)().default(0).notNull(),
    inOrOut: (0, import_mysql_core4.varchar)({ length: 3 }).default("out").notNull(),
    currency: (0, import_mysql_core4.varchar)({ length: 3 }).default("BRL").notNull(),
    batchId: (0, import_mysql_core4.int)(),
    transactionIdSource: (0, import_mysql_core4.varchar)({ length: 60 }),
    transactionErrorDetail: (0, import_mysql_core4.varchar)({ length: 200 }),
    paymentGatewayTransactionId: (0, import_mysql_core4.varchar)({ length: 255 }),
    paymentGatewayReceiptUrl: (0, import_mysql_core4.varchar)({ length: 450 }),
    paymentGatewayReceiptBankUrl: (0, import_mysql_core4.varchar)({ length: 450 }),
    dueDate: (0, import_mysql_core4.date)({ mode: "date" }).notNull(),
    transactionDate: (0, import_mysql_core4.datetime)({ mode: "date" }).notNull(),
    paidedAt: (0, import_mysql_core4.datetime)({ mode: "date" }),
    withdrawingDate: (0, import_mysql_core4.datetime)({ mode: "date" }),
    createdAt: (0, import_mysql_core4.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core4.datetime)({ mode: "date" }),
    deletedAt: (0, import_mysql_core4.datetime)({ mode: "date" }),
    createdById: (0, import_mysql_core4.varchar)({ length: 255 }),
    updatedById: (0, import_mysql_core4.varchar)({ length: 255 }),
    createdByEmail: (0, import_mysql_core4.varchar)({ length: 255 }),
    updatedByEmail: (0, import_mysql_core4.varchar)({ length: 255 })
  },
  (table) => {
    return {
      transactionStatusIdx: (0, import_mysql_core4.index)("transactions_transactionStatus_IDX").on(table.transactionStatus),
      deletedAtIdx: (0, import_mysql_core4.index)("transactions_deletedAt_IDX").on(table.deletedAt),
      transactionsTransactionId: (0, import_mysql_core4.primaryKey)({ columns: [table.transactionId], name: "transactions_transactionId" })
    };
  }
);
var transactionsHistory = (0, import_mysql_core4.mysqlTable)("transactionsHistory", {
  transactionId: (0, import_mysql_core4.varchar)({ length: 60 }).notNull(),
  squidId: (0, import_mysql_core4.varchar)({ length: 60 }),
  transactionStatus: (0, import_mysql_core4.varchar)({ length: 50 }).default("pending").notNull(),
  paymentType: (0, import_mysql_core4.varchar)({ length: 5 }),
  netValue: (0, import_mysql_core4.float)().notNull(),
  grossValue: (0, import_mysql_core4.float)().notNull(),
  inssAliquot: (0, import_mysql_core4.float)(),
  inssValue: (0, import_mysql_core4.float)(),
  irAliquot: (0, import_mysql_core4.float)(),
  inOrOut: (0, import_mysql_core4.varchar)({ length: 3 }).default("out").notNull(),
  irDeduct: (0, import_mysql_core4.float)(),
  irValue: (0, import_mysql_core4.float)(),
  nfId: (0, import_mysql_core4.varchar)({ length: 60 }),
  issAliquot: (0, import_mysql_core4.float)(),
  issValue: (0, import_mysql_core4.float)(),
  anticipationAliquot: (0, import_mysql_core4.float)(),
  anticipationValue: (0, import_mysql_core4.float)(),
  anticipationContractAccepted: (0, import_mysql_core4.varchar)({ length: 450 }),
  paymentGatewayTransactionId: (0, import_mysql_core4.longtext)(),
  currency: (0, import_mysql_core4.varchar)({ length: 3 }).default("BRL").notNull(),
  batchId: (0, import_mysql_core4.int)(),
  amount: (0, import_mysql_core4.float)().notNull(),
  transactionStatusDetail: (0, import_mysql_core4.varchar)({ length: 450 }),
  transactionErrorDetail: (0, import_mysql_core4.varchar)({ length: 200 }),
  transactionDate: (0, import_mysql_core4.datetime)({ mode: "date" }).notNull(),
  dueDate: (0, import_mysql_core4.date)({ mode: "date" }),
  createdAt: (0, import_mysql_core4.datetime)({ mode: "date" }).notNull(),
  updatedAt: (0, import_mysql_core4.datetime)({ mode: "date" }),
  paidedAt: (0, import_mysql_core4.datetime)({ mode: "date" }),
  withdrawingDate: (0, import_mysql_core4.datetime)({ mode: "date" }),
  deletedAt: (0, import_mysql_core4.datetime)({ mode: "date" }),
  createdById: (0, import_mysql_core4.varchar)({ length: 255 }),
  createdByEmail: (0, import_mysql_core4.varchar)({ length: 255 })
});
var transactionsSchedule = (0, import_mysql_core4.mysqlTable)(
  "transactions_schedule",
  {
    id: (0, import_mysql_core4.int)().autoincrement().notNull(),
    scheduleDate: (0, import_mysql_core4.date)("schedule_date", { mode: "date" }).notNull(),
    flowId: (0, import_mysql_core4.int)("flow_id").notNull(),
    description: (0, import_mysql_core4.varchar)({ length: 45 }),
    createdAt: (0, import_mysql_core4.datetime)("created_at", { mode: "date" }).default(import_drizzle_orm4.sql`(CURRENT_TIMESTAMP)`),
    updatedAt: (0, import_mysql_core4.datetime)("updated_at", { mode: "date" }).default(import_drizzle_orm4.sql`(CURRENT_TIMESTAMP)`)
  },
  (table) => {
    return {
      transactionsScheduleId: (0, import_mysql_core4.primaryKey)({ columns: [table.id], name: "transactions_schedule_id" }),
      idUnique: (0, import_mysql_core4.unique)("id_UNIQUE").on(table.id)
    };
  }
);
var transfeeraRawDataCallback = (0, import_mysql_core4.mysqlTable)(
  "transfeeraRawDataCallback",
  {
    id: (0, import_mysql_core4.int)({ unsigned: true }).autoincrement().notNull(),
    header: (0, import_mysql_core4.mediumtext)().notNull(),
    payload: (0, import_mysql_core4.json)(),
    validationTest: (0, import_mysql_core4.json)(),
    createdAt: (0, import_mysql_core4.datetime)("created_at", { mode: "date" }).default(import_drizzle_orm4.sql`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      transfeeraRawDataCallbackId: (0, import_mysql_core4.primaryKey)({ columns: [table.id], name: "transfeeraRawDataCallback_id" })
    };
  }
);
var webhooksLogs = (0, import_mysql_core4.mysqlTable)(
  "webhooks_logs",
  {
    id: (0, import_mysql_core4.int)().autoincrement().notNull(),
    header: (0, import_mysql_core4.longtext)(),
    payload: (0, import_mysql_core4.longtext)(),
    querystring: (0, import_mysql_core4.varchar)({ length: 255 }),
    service: (0, import_mysql_core4.varchar)({ length: 45 }).notNull(),
    authentication: (0, import_mysql_core4.longtext)(),
    createdAt: (0, import_mysql_core4.datetime)("created_at", { mode: "date" }).default(import_drizzle_orm4.sql`(CURRENT_TIMESTAMP)`)
  },
  (table) => {
    return {
      webhooksLogsId: (0, import_mysql_core4.primaryKey)({ columns: [table.id], name: "webhooks_logs_id" }),
      idUnique: (0, import_mysql_core4.unique)("id_UNIQUE").on(table.id)
    };
  }
);
var dueDateTransactions = (0, import_mysql_core4.mysqlView)("dueDate_transactions", {
  dueDate: (0, import_mysql_core4.int)().default(0).notNull(),
  minCreatedAt: (0, import_mysql_core4.int)("min_createdAt").default(0).notNull(),
  maxCreatedAt: (0, import_mysql_core4.int)("max_createdAt").default(0).notNull(),
  countTotal: (0, import_mysql_core4.int)("count_total").default(0).notNull(),
  sumTotal: (0, import_mysql_core4.int)("sum_total").default(0).notNull(),
  countPaid: (0, import_mysql_core4.int)("count_paid").default(0).notNull(),
  somaPaid: (0, import_mysql_core4.int)("soma_paid").default(0).notNull(),
  countNew: (0, import_mysql_core4.int)("count_new").default(0).notNull(),
  somaNew: (0, import_mysql_core4.int)("soma_new").default(0).notNull(),
  countPending: (0, import_mysql_core4.int)("count_pending").default(0).notNull(),
  somaPending: (0, import_mysql_core4.int)("soma_pending").default(0).notNull(),
  countProcessing: (0, import_mysql_core4.int)("count_processing").default(0).notNull(),
  somaProcessing: (0, import_mysql_core4.int)("soma_processing").default(0).notNull(),
  countReadyToPay: (0, import_mysql_core4.int)("count_readyToPay").default(0).notNull(),
  somaReadyToPay: (0, import_mysql_core4.int)("soma_readyToPay").default(0).notNull(),
  countWithdrawing: (0, import_mysql_core4.int)("count_withdrawing").default(0).notNull(),
  somaWithdrawing: (0, import_mysql_core4.int)("soma_withdrawing").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm4.sql`select 1 AS \`dueDate\`,1 AS \`min_createdAt\`,1 AS \`max_createdAt\`,1 AS \`count_total\`,1 AS \`sum_total\`,1 AS \`count_paid\`,1 AS \`soma_paid\`,1 AS \`count_new\`,1 AS \`soma_new\`,1 AS \`count_pending\`,1 AS \`soma_pending\`,1 AS \`count_processing\`,1 AS \`soma_processing\`,1 AS \`count_readyToPay\`,1 AS \`soma_readyToPay\`,1 AS \`count_withdrawing\`,1 AS \`soma_withdrawing\``);
var transactionConsolidated = (0, import_mysql_core4.mysqlView)("transaction_consolidated", {
  transactionId: (0, import_mysql_core4.int)().default(0).notNull(),
  recruitmentId: (0, import_mysql_core4.int)().default(0).notNull(),
  campaignId: (0, import_mysql_core4.int)().default(0).notNull(),
  campaignName: (0, import_mysql_core4.int)().default(0).notNull(),
  squidId: (0, import_mysql_core4.int)().default(0).notNull(),
  instagramUsername: (0, import_mysql_core4.int)().default(0).notNull(),
  instagramProfileId: (0, import_mysql_core4.int)().default(0).notNull(),
  youtubeChannel: (0, import_mysql_core4.int)().default(0).notNull(),
  youtubeChannelId: (0, import_mysql_core4.int)().default(0).notNull(),
  pinterestUsername: (0, import_mysql_core4.int)().default(0).notNull(),
  pinterestProfileId: (0, import_mysql_core4.int)().default(0).notNull(),
  createdAt: (0, import_mysql_core4.int)().default(0).notNull(),
  updatedAt: (0, import_mysql_core4.int)().default(0).notNull(),
  deletedAt: (0, import_mysql_core4.int)().default(0).notNull(),
  paymentStatus: (0, import_mysql_core4.int)().default(0).notNull(),
  amount: (0, import_mysql_core4.int)().default(0).notNull(),
  dueDate: (0, import_mysql_core4.int)().default(0).notNull(),
  transactionStatus: (0, import_mysql_core4.int)().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm4.sql`select 1 AS \`transactionId\`,1 AS \`recruitmentId\`,1 AS \`campaignId\`,1 AS \`campaignName\`,1 AS \`squidId\`,1 AS \`instagramUsername\`,1 AS \`instagramProfileId\`,1 AS \`youtubeChannel\`,1 AS \`youtubeChannelId\`,1 AS \`pinterestUsername\`,1 AS \`pinterestProfileId\`,1 AS \`createdAt\`,1 AS \`updatedAt\`,1 AS \`deletedAt\`,1 AS \`paymentStatus\`,1 AS \`amount\`,1 AS \`dueDate\`,1 AS \`transactionStatus\``);
var vwTransfeeraWebhookReturn = (0, import_mysql_core4.mysqlView)("VW_TRANSFEERA_WEBHOOK_RETURN", {
  webhookId: (0, import_mysql_core4.int)().default(0).notNull(),
  idTransfer: (0, import_mysql_core4.int)().default(0).notNull(),
  transactionId: (0, import_mysql_core4.int)().default(0).notNull(),
  status: (0, import_mysql_core4.int)().default(0).notNull(),
  description: (0, import_mysql_core4.int)().default(0).notNull(),
  savedAt: (0, import_mysql_core4.int)().default(0).notNull(),
  tipo: (0, import_mysql_core4.int)().default(0).notNull(),
  payload: (0, import_mysql_core4.int)().default(0).notNull(),
  signature: (0, import_mysql_core4.int)().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm4.sql`select 1 AS \`webhookId\`,1 AS \`idTransfer\`,1 AS \`transactionId\`,1 AS \`status\`,1 AS \`description\`,1 AS \`savedAt\`,1 AS \`tipo\`,1 AS \`payload\`,1 AS \`signature\``);
var campaignsTransactions = (0, import_mysql_core4.mysqlView)("campaigns_transactions", {
  campaignId: (0, import_mysql_core4.int)().default(0).notNull(),
  campaignName: (0, import_mysql_core4.int)().default(0).notNull(),
  minCreatedAt: (0, import_mysql_core4.int)("min_createdAt").default(0).notNull(),
  maxCreatedAt: (0, import_mysql_core4.int)("max_createdAt").default(0).notNull(),
  minDueDate: (0, import_mysql_core4.int)("min_dueDate").default(0).notNull(),
  maxDueDate: (0, import_mysql_core4.int)("max_dueDate").default(0).notNull(),
  countTotal: (0, import_mysql_core4.int)("count_total").default(0).notNull(),
  sumTotal: (0, import_mysql_core4.int)("sum_total").default(0).notNull(),
  countPaid: (0, import_mysql_core4.int)("count_paid").default(0).notNull(),
  somaPaid: (0, import_mysql_core4.int)("soma_paid").default(0).notNull(),
  countNew: (0, import_mysql_core4.int)("count_new").default(0).notNull(),
  somaNew: (0, import_mysql_core4.int)("soma_new").default(0).notNull(),
  countPending: (0, import_mysql_core4.int)("count_pending").default(0).notNull(),
  somaPending: (0, import_mysql_core4.int)("soma_pending").default(0).notNull(),
  countProcessing: (0, import_mysql_core4.int)("count_processing").default(0).notNull(),
  somaProcessing: (0, import_mysql_core4.int)("soma_processing").default(0).notNull(),
  countReadyToPay: (0, import_mysql_core4.int)("count_readyToPay").default(0).notNull(),
  somaReadyToPay: (0, import_mysql_core4.int)("soma_readyToPay").default(0).notNull(),
  countWithdrawing: (0, import_mysql_core4.int)("count_withdrawing").default(0).notNull(),
  somaWithdrawing: (0, import_mysql_core4.int)("soma_withdrawing").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm4.sql`select 1 AS \`campaignId\`,1 AS \`campaignName\`,1 AS \`min_createdAt\`,1 AS \`max_createdAt\`,1 AS \`min_dueDate\`,1 AS \`max_dueDate\`,1 AS \`count_total\`,1 AS \`sum_total\`,1 AS \`count_paid\`,1 AS \`soma_paid\`,1 AS \`count_new\`,1 AS \`soma_new\`,1 AS \`count_pending\`,1 AS \`soma_pending\`,1 AS \`count_processing\`,1 AS \`soma_processing\`,1 AS \`count_readyToPay\`,1 AS \`soma_readyToPay\`,1 AS \`count_withdrawing\`,1 AS \`soma_withdrawing\``);
var anoMesDueDateTransactions = (0, import_mysql_core4.mysqlView)("ano_mes_dueDate_transactions", {
  anoMes: (0, import_mysql_core4.int)("ano_mes").default(0).notNull(),
  minCreatedAt: (0, import_mysql_core4.int)("min_createdAt").default(0).notNull(),
  maxCreatedAt: (0, import_mysql_core4.int)("max_createdAt").default(0).notNull(),
  minDueDate: (0, import_mysql_core4.int)("min_dueDate").default(0).notNull(),
  maxDueDate: (0, import_mysql_core4.int)("max_dueDate").default(0).notNull(),
  countTotal: (0, import_mysql_core4.int)("count_total").default(0).notNull(),
  sumTotal: (0, import_mysql_core4.int)("sum_total").default(0).notNull(),
  countPaid: (0, import_mysql_core4.int)("count_paid").default(0).notNull(),
  somaPaid: (0, import_mysql_core4.int)("soma_paid").default(0).notNull(),
  countNew: (0, import_mysql_core4.int)("count_new").default(0).notNull(),
  somaNew: (0, import_mysql_core4.int)("soma_new").default(0).notNull(),
  countPending: (0, import_mysql_core4.int)("count_pending").default(0).notNull(),
  somaPending: (0, import_mysql_core4.int)("soma_pending").default(0).notNull(),
  countProcessing: (0, import_mysql_core4.int)("count_processing").default(0).notNull(),
  somaProcessing: (0, import_mysql_core4.int)("soma_processing").default(0).notNull(),
  countReadyToPay: (0, import_mysql_core4.int)("count_readyToPay").default(0).notNull(),
  somaReadyToPay: (0, import_mysql_core4.int)("soma_readyToPay").default(0).notNull(),
  countWithdrawing: (0, import_mysql_core4.int)("count_withdrawing").default(0).notNull(),
  somaWithdrawing: (0, import_mysql_core4.int)("soma_withdrawing").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm4.sql`select 1 AS \`ano_mes\`,1 AS \`min_createdAt\`,1 AS \`max_createdAt\`,1 AS \`min_dueDate\`,1 AS \`max_dueDate\`,1 AS \`count_total\`,1 AS \`sum_total\`,1 AS \`count_paid\`,1 AS \`soma_paid\`,1 AS \`count_new\`,1 AS \`soma_new\`,1 AS \`count_pending\`,1 AS \`soma_pending\`,1 AS \`count_processing\`,1 AS \`soma_processing\`,1 AS \`count_readyToPay\`,1 AS \`soma_readyToPay\`,1 AS \`count_withdrawing\`,1 AS \`soma_withdrawing\``);
var vwTransactionsWithoutInfluencerPayment = (0, import_mysql_core4.mysqlView)("VW_TRANSACTIONS_WITHOUT_INFLUENCER_PAYMENT", {
  transactionId: (0, import_mysql_core4.int)().default(0).notNull(),
  dueDate: (0, import_mysql_core4.int)().default(0).notNull(),
  createdAt: (0, import_mysql_core4.int)().default(0).notNull(),
  deletedAt: (0, import_mysql_core4.int)().default(0).notNull(),
  squidId: (0, import_mysql_core4.int)().default(0).notNull(),
  transactionStatus: (0, import_mysql_core4.int)().default(0).notNull(),
  netValue: (0, import_mysql_core4.int)().default(0).notNull(),
  grossValue: (0, import_mysql_core4.int)().default(0).notNull(),
  paymentType: (0, import_mysql_core4.int)().default(0).notNull(),
  transactionIdInfluencerPayments: (0, import_mysql_core4.int)("transactionId.influencerPayments").default(0).notNull(),
  seqid: (0, import_mysql_core4.int)().default(0).notNull(),
  responsiblePayment: (0, import_mysql_core4.int)().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm4.sql`select 1 AS \`transactionId\`,1 AS \`dueDate\`,1 AS \`createdAt\`,1 AS \`deletedAt\`,1 AS \`squidId\`,1 AS \`transactionStatus\`,1 AS \`netValue\`,1 AS \`grossValue\`,1 AS \`paymentType\`,1 AS \`transactionId.influencerPayments\`,1 AS \`seqid\`,1 AS \`responsiblePayment\``);
var influencersTotalTransactions = (0, import_mysql_core4.mysqlView)("influencers_total_transactions", {
  squidId: (0, import_mysql_core4.int)().default(0).notNull(),
  instagramUsername: (0, import_mysql_core4.int)().default(0).notNull(),
  instagramProfileId: (0, import_mysql_core4.int)().default(0).notNull(),
  youtubeChannel: (0, import_mysql_core4.int)().default(0).notNull(),
  youtubeChannelId: (0, import_mysql_core4.int)().default(0).notNull(),
  pinterestUsername: (0, import_mysql_core4.int)().default(0).notNull(),
  pinterestProfileId: (0, import_mysql_core4.int)().default(0).notNull(),
  minCreatedAt: (0, import_mysql_core4.int)("min_createdAt").default(0).notNull(),
  maxCreatedAt: (0, import_mysql_core4.int)("max_createdAt").default(0).notNull(),
  minDueDate: (0, import_mysql_core4.int)("min_dueDate").default(0).notNull(),
  maxDueDate: (0, import_mysql_core4.int)("max_dueDate").default(0).notNull(),
  countTotal: (0, import_mysql_core4.int)("count_total").default(0).notNull(),
  sumTotal: (0, import_mysql_core4.int)("sum_total").default(0).notNull(),
  countPaid: (0, import_mysql_core4.int)("count_paid").default(0).notNull(),
  somaPaid: (0, import_mysql_core4.int)("soma_paid").default(0).notNull(),
  countNew: (0, import_mysql_core4.int)("count_new").default(0).notNull(),
  somaNew: (0, import_mysql_core4.int)("soma_new").default(0).notNull(),
  countPending: (0, import_mysql_core4.int)("count_pending").default(0).notNull(),
  somaPending: (0, import_mysql_core4.int)("soma_pending").default(0).notNull(),
  countProcessing: (0, import_mysql_core4.int)("count_processing").default(0).notNull(),
  somaProcessing: (0, import_mysql_core4.int)("soma_processing").default(0).notNull(),
  countReadyToPay: (0, import_mysql_core4.int)("count_readyToPay").default(0).notNull(),
  somaReadyToPay: (0, import_mysql_core4.int)("soma_readyToPay").default(0).notNull(),
  countWithdrawing: (0, import_mysql_core4.int)("count_withdrawing").default(0).notNull(),
  somaWithdrawing: (0, import_mysql_core4.int)("soma_withdrawing").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm4.sql`select 1 AS \`squidId\`,1 AS \`instagramUsername\`,1 AS \`instagramProfileId\`,1 AS \`youtubeChannel\`,1 AS \`youtubeChannelId\`,1 AS \`pinterestUsername\`,1 AS \`pinterestProfileId\`,1 AS \`min_createdAt\`,1 AS \`max_createdAt\`,1 AS \`min_dueDate\`,1 AS \`max_dueDate\`,1 AS \`count_total\`,1 AS \`sum_total\`,1 AS \`count_paid\`,1 AS \`soma_paid\`,1 AS \`count_new\`,1 AS \`soma_new\`,1 AS \`count_pending\`,1 AS \`soma_pending\`,1 AS \`count_processing\`,1 AS \`soma_processing\`,1 AS \`count_readyToPay\`,1 AS \`soma_readyToPay\`,1 AS \`count_withdrawing\`,1 AS \`soma_withdrawing\``);
var pagamentosForaDoPrazo = (0, import_mysql_core4.mysqlView)("pagamentos_fora_do_prazo", {
  seqId: (0, import_mysql_core4.int)().default(0).notNull(),
  transactionId: (0, import_mysql_core4.int)().default(0).notNull(),
  recruitmentId: (0, import_mysql_core4.int)().default(0).notNull(),
  campaignId: (0, import_mysql_core4.int)().default(0).notNull(),
  campaignName: (0, import_mysql_core4.int)().default(0).notNull(),
  "date(ipCampaignEndDate)": (0, import_mysql_core4.int)("date(IP.campaignEndDate)").default(0).notNull(),
  squidId: (0, import_mysql_core4.int)().default(0).notNull(),
  instagramUsername: (0, import_mysql_core4.int)().default(0).notNull(),
  youtubeChannel: (0, import_mysql_core4.int)().default(0).notNull(),
  amount: (0, import_mysql_core4.int)().default(0).notNull(),
  "date(ipCreatedAt)": (0, import_mysql_core4.int)("date(IP.createdAt)").default(0).notNull(),
  dueDate: (0, import_mysql_core4.int)().default(0).notNull(),
  transactionStatus: (0, import_mysql_core4.int)().default(0).notNull(),
  paymentType: (0, import_mysql_core4.int)().default(0).notNull(),
  "date(trPaidedAt)": (0, import_mysql_core4.int)("date(TR.paidedAt)").default(0).notNull(),
  nameExp16: (0, import_mysql_core4.int)("Name_exp_16").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm4.sql`select 1 AS \`seqId\`,1 AS \`transactionId\`,1 AS \`recruitmentId\`,1 AS \`campaignId\`,1 AS \`campaignName\`,1 AS \`date(IP.campaignEndDate)\`,1 AS \`squidId\`,1 AS \`instagramUsername\`,1 AS \`youtubeChannel\`,1 AS \`amount\`,1 AS \`date(IP.createdAt)\`,1 AS \`dueDate\`,1 AS \`transactionStatus\`,1 AS \`paymentType\`,1 AS \`date(TR.paidedAt)\`,1 AS \`Name_exp_16\``);
var vmTransactionsReadyToPayInCurrentMonth = (0, import_mysql_core4.mysqlView)("VM_TRANSACTIONS_READY_TO_PAY_IN_CURRENT_MONTH", {
  squidId: (0, import_mysql_core4.int)().default(0).notNull(),
  verificationStatus: (0, import_mysql_core4.int)().default(0).notNull(),
  verificationId: (0, import_mysql_core4.int)().default(0).notNull(),
  transactionId: (0, import_mysql_core4.int)().default(0).notNull(),
  dueDate: (0, import_mysql_core4.int)().default(0).notNull(),
  createdAt: (0, import_mysql_core4.int)().default(0).notNull(),
  netValue: (0, import_mysql_core4.int)().default(0).notNull(),
  transactionStatus: (0, import_mysql_core4.int)().default(0).notNull(),
  paidedAt: (0, import_mysql_core4.int)().default(0).notNull(),
  withdrawingDate: (0, import_mysql_core4.int)().default(0).notNull(),
  verificatedAt: (0, import_mysql_core4.int)().default(0).notNull(),
  updatedAt: (0, import_mysql_core4.int)().default(0).notNull(),
  bankAccountType: (0, import_mysql_core4.int)().default(0).notNull(),
  profileId: (0, import_mysql_core4.int)().default(0).notNull(),
  holderName: (0, import_mysql_core4.int)().default(0).notNull(),
  holderDocument: (0, import_mysql_core4.int)().default(0).notNull(),
  bankCode: (0, import_mysql_core4.int)().default(0).notNull(),
  bankAccountAgency: (0, import_mysql_core4.int)().default(0).notNull(),
  bankAccountNumber: (0, import_mysql_core4.int)().default(0).notNull(),
  bankAccountDigit: (0, import_mysql_core4.int)().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm4.sql`select 1 AS \`squidId\`,1 AS \`verificationStatus\`,1 AS \`verificationId\`,1 AS \`transactionId\`,1 AS \`dueDate\`,1 AS \`createdAt\`,1 AS \`netValue\`,1 AS \`transactionStatus\`,1 AS \`paidedAt\`,1 AS \`withdrawingDate\`,1 AS \`verificatedAt\`,1 AS \`updatedAt\`,1 AS \`bankAccountType\`,1 AS \`profileId\`,1 AS \`holderName\`,1 AS \`holderDocument\`,1 AS \`bankCode\`,1 AS \`bankAccountAgency\`,1 AS \`bankAccountNumber\`,1 AS \`bankAccountDigit\``);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  businessIntelligenceDb,
  influencersDb,
  npsDb,
  paymentDb
});
