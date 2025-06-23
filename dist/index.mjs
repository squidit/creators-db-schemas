var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/databases/mongodb/influencers/recruitment.ts
var recruitment_exports = {};
__export(recruitment_exports, {
  Recruitment: () => Recruitment,
  RecruitmentModel: () => RecruitmentModel
});
import { model, Schema } from "mongoose";
var RecruitmentStatus = /* @__PURE__ */ ((RecruitmentStatus2) => {
  RecruitmentStatus2["added"] = "added";
  RecruitmentStatus2["approved"] = "approved";
  RecruitmentStatus2["customerApproved"] = "customerApproved";
  RecruitmentStatus2["customerReproved"] = "customerReproved";
  RecruitmentStatus2["inContact"] = "inContact";
  RecruitmentStatus2["influencerRefused"] = "influencerRefused";
  RecruitmentStatus2["preApproved"] = "preApproved";
  RecruitmentStatus2["recruited"] = "recruited";
  RecruitmentStatus2["removed"] = "removed";
  RecruitmentStatus2["reproved"] = "reproved";
  RecruitmentStatus2["suggested"] = "suggested";
  return RecruitmentStatus2;
})(RecruitmentStatus || {});
var SocialNetworks = /* @__PURE__ */ ((SocialNetworks2) => {
  SocialNetworks2["instagram"] = "instagram";
  SocialNetworks2["youtube"] = "youtube";
  SocialNetworks2["tiktok"] = "tiktok";
  SocialNetworks2["twitter"] = "twitter";
  return SocialNetworks2;
})(SocialNetworks || {});
var cpm = {
  posts: Number,
  stories: Number,
  reels: Number
};
var quantity = {
  posts: Number,
  stories: Number,
  reels: Number
};
var prices = {
  cpm,
  quantity,
  total: Number
};
var RecruitmentSchema = {
  idProfile: {
    type: String,
    required: true
  },
  squidId: {
    type: String,
    required: true
  },
  manualAdded: {
    type: Boolean,
    default: false
  },
  socialNetwork: {
    type: String,
    enum: Object.values(SocialNetworks),
    default: "instagram" /* instagram */,
    required: true
  },
  idCampaign: {
    type: Schema.Types.ObjectId,
    required: true
  },
  recruitedAt: Date,
  isBookmarked: {
    type: Boolean,
    default: false
  },
  opApproved: Boolean,
  status: {
    type: String,
    enum: Object.values(RecruitmentStatus),
    required: true
  },
  inputMode: {
    type: String,
    default: "automatic"
  },
  inputCampaignId: {
    type: Schema.Types.ObjectId,
    default: null
  },
  username: {
    type: String,
    required: true
  },
  picture: String,
  fullname: {
    type: String,
    nullable: true
  },
  lastHistory: Schema.Types.Mixed,
  sawWarning: {
    type: Boolean,
    default: false
  },
  dateSawWarning: Date,
  sawSurvey: {
    type: Boolean,
    default: false
  },
  dateSawSurvey: Date,
  agent: {
    type: Boolean,
    required: false
  },
  customPayment: Number,
  orderId: String,
  prices,
  hasContract: {
    type: Boolean,
    required: false
  },
  contractStatus: {
    type: String,
    default: "absent"
  },
  scope: {
    type: new Schema({
      campaignContentProduction: {
        type: Boolean,
        default: true
      },
      requiredContent: {
        posts: {
          type: Number,
          required: false,
          default: 0
        },
        stories: {
          type: Number,
          required: false,
          default: 0
        },
        reels: {
          type: Number,
          required: false,
          default: 0
        },
        contents: {
          type: Number,
          required: false,
          default: 0
        }
      },
      suggestedContent: {
        posts: {
          type: Number,
          required: false,
          default: 0
        },
        stories: {
          type: Number,
          required: false,
          default: 0
        },
        reels: {
          type: Number,
          required: false,
          default: 0
        },
        contents: {
          type: Number,
          required: false,
          default: 0
        }
      },
      publishedOnSocialMedia: {
        type: Boolean,
        default: true
      },
      contentBoost: {
        type: Boolean,
        default: true
      },
      eventParticipation: {
        type: Boolean,
        default: false
      },
      brandExclusivity: {
        type: Boolean,
        default: false
      },
      imageRightsMonths: {
        type: Number,
        default: null
      },
      paymentOnCampaign: {
        type: Boolean,
        default: true
      },
      payments: [
        {
          _id: false,
          paymentType: String,
          value: {
            type: Number,
            required: false
          },
          description: {
            type: String,
            required: false
          },
          term: {
            type: Number,
            required: false
          },
          agentUsername: {
            type: String,
            required: false
          },
          isTransferNote: {
            type: Boolean,
            required: false
          },
          opportunitiesSelected: {
            type: [String],
            required: false
          }
        }
      ]
    }),
    required: false
  },
  tcmCampaignCode: {
    type: String,
    required: false
  },
  tcmCampaignLink: {
    type: String,
    required: false
  }
};
var Recruitment = new Schema(RecruitmentSchema, { timestamps: { createdAt: true, updatedAt: true } });
var RecruitmentModel = model("recruitment", Recruitment);

// src/databases/mysql/business_intelligence/schema.ts
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
import { sql } from "drizzle-orm";
import { bigint, char, date, datetime, float, index, int, longtext, mediumint, mysqlEnum, mysqlTable, primaryKey, text, tinyint, unique, varchar } from "drizzle-orm/mysql-core";
var audienceGenderAge = mysqlTable(
  "audience_gender_age",
  {
    campaignId: varchar("campaign_id", { length: 100 }).notNull(),
    gender: varchar({ length: 50 }).notNull(),
    age: varchar({ length: 100 }).notNull(),
    percentage: float().notNull(),
    value: float().notNull()
  },
  (table) => {
    return {
      audienceGenderAgeCampaignIdGenderAge: primaryKey({ columns: [table.campaignId, table.gender, table.age], name: "audience_gender_age_campaign_id_gender_age" })
    };
  }
);
var audienceGeo = mysqlTable(
  "audience_geo",
  {
    campaignId: varchar("campaign_id", { length: 255 }).notNull(),
    date: date({ mode: "date" }),
    campaignUsername: varchar("campaign_username", { length: 255 }),
    campaignTitle: varchar("campaign_title", { length: 255 }).notNull(),
    campaignCustomer: varchar("campaign_customer", { length: 255 }),
    campaignTag: varchar("campaign_tag", { length: 255 }),
    order: int().default(0).notNull(),
    type: varchar({ length: 255 }).notNull(),
    value: float().notNull(),
    name: varchar({ length: 255 }).notNull(),
    community: varchar({ length: 24 }),
    state: varchar({ length: 255 })
  },
  (table) => {
    return {
      queryDefaultIdx: index("query_default_idx").on(table.campaignId, table.type, table.order)
    };
  }
);
var audiencePersons = mysqlTable("audience_persons", {
  "65": float().notNull(),
  campaignId: varchar("campaign_id", { length: 255 }).notNull(),
  date: date({ mode: "date" }),
  campaignUsername: varchar("campaign_username", { length: 255 }),
  campaignTitle: varchar("campaign_title", { length: 255 }).notNull(),
  campaignCustomer: varchar("campaign_customer", { length: 255 }),
  campaignTag: varchar("campaign_tag", { length: 255 }),
  female: float().notNull(),
  male: float().notNull(),
  "1317": float("13_17").notNull(),
  "1824": float("18_24").notNull(),
  "2534": float("25_34").notNull(),
  "3544": float("35_44").notNull(),
  "4564": float("45_64").notNull(),
  unisex: float().notNull(),
  community: varchar({ length: 24 })
});
var commentsBrands = mysqlTable(
  "comments_brands",
  {
    campaignId: varchar("campaign_id", { length: 255 }).notNull(),
    engagementRate: float("engagement_rate"),
    followers: int().notNull(),
    mentions: int().notNull(),
    name: varchar({ length: 255 }).notNull(),
    picture: varchar({ length: 255 }),
    username: varchar({ length: 255 }).notNull()
  },
  (table) => {
    return {
      commentsBrandsCampaignIdUsername: primaryKey({ columns: [table.campaignId, table.username], name: "comments_brands_campaign_id_username" })
    };
  }
);
var commentsSentiments = mysqlTable(
  "comments_sentiments",
  {
    id: bigint({ mode: "number" }).autoincrement().notNull(),
    campaignId: varchar("campaign_id", { length: 255 }).notNull(),
    mediaId: varchar("media_id", { length: 255 }).notNull(),
    userId: varchar("user_id", { length: 255 }).notNull(),
    userUsername: varchar("user_username", { length: 255 }).default(""),
    commentId: varchar("comment_id", { length: 255 }).notNull(),
    text: longtext().notNull(),
    commentUsername: varchar("comment_username", { length: 255 }).notNull(),
    sentimentLabel: varchar("sentiment_label", { length: 45 }),
    sentimentScore: float("sentiment_score").notNull(),
    sentimentMagnitude: float("sentiment_magnitude"),
    isCaption: int("is_caption").notNull(),
    isOwner: int("is_owner").notNull(),
    emotionAnger: float("emotion_anger"),
    emotionDisgust: float("emotion_disgust"),
    emotionJoy: float("emotion_joy"),
    emotionSadness: float("emotion_sadness"),
    emotionFear: float("emotion_fear"),
    date: datetime({ mode: "string" }).default(sql`(CURRENT_TIMESTAMP)`),
    socialNetwork: varchar("social_network", { length: 20 })
  },
  (table) => {
    return {
      campId: index("CAMP_ID").on(table.campaignId),
      dateIdx: index("comments_sentiments_date_idx").on(table.date),
      mediaIdIdx: index("comments_sentiments_media_id_IDX").on(table.mediaId),
      userId: index("user_id").on(table.userId),
      commentsSentimentsId: primaryKey({ columns: [table.id], name: "comments_sentiments_id" })
    };
  }
);
var commentsSentimentsBkp = mysqlTable(
  "comments_sentiments_bkp",
  {
    id: mediumint().autoincrement().notNull(),
    campaignId: varchar("campaign_id", { length: 255 }).notNull(),
    mediaId: varchar("media_id", { length: 255 }).notNull(),
    userId: varchar("user_id", { length: 255 }).notNull(),
    userUsername: varchar("user_username", { length: 255 }).default(""),
    commentId: varchar("comment_id", { length: 255 }).notNull(),
    text: longtext().notNull(),
    commentUsername: varchar("comment_username", { length: 255 }).notNull(),
    sentimentLabel: varchar("sentiment_label", { length: 45 }),
    sentimentScore: float("sentiment_score").notNull(),
    sentimentMagnitude: float("sentiment_magnitude"),
    isCaption: int("is_caption").notNull(),
    isOwner: int("is_owner").notNull(),
    emotionAnger: float("emotion_anger"),
    emotionDisgust: float("emotion_disgust"),
    emotionJoy: float("emotion_joy"),
    emotionSadness: float("emotion_sadness"),
    emotionFear: float("emotion_fear"),
    date: datetime({ mode: "string" }).default(sql`(CURRENT_TIMESTAMP)`)
  },
  (table) => {
    return {
      commentsSentimentsBkpId: primaryKey({ columns: [table.id], name: "comments_sentiments_bkp_id" })
    };
  }
);
var commentsSentimentsSummary = mysqlTable(
  "comments_sentiments_summary",
  {
    id: bigint({ mode: "number" }).autoincrement().notNull(),
    campaignId: varchar("campaign_id", { length: 255 }).notNull(),
    total: int(),
    positive: int().notNull(),
    negative: int().notNull(),
    neutral: int().notNull(),
    amplification: float(),
    adherence: float(),
    relevantComments: int("relevant_comments"),
    anger: float(),
    disgust: float(),
    fear: float(),
    joy: float(),
    sadness: float()
  },
  (table) => {
    return {
      campaignIdIdx: index("comments_sentiments_summary_campaign_id_idx").on(table.campaignId),
      campId: index("CAMP_ID").on(table.campaignId),
      commentsSentimentsSummaryId: primaryKey({ columns: [table.id], name: "comments_sentiments_summary_id" })
    };
  }
);
var customRanking = mysqlTable(
  "custom_ranking",
  {
    userId: varchar("user_id", { length: 45 }).notNull(),
    username: varchar({ length: 45 }),
    campaignId: varchar("campaign_id", { length: 45 }).notNull(),
    campaignName: varchar("campaign_name", { length: 255 }),
    totalFull: int("total_full").notNull(),
    total: int().notNull(),
    instagram: int().default(0).notNull(),
    pixel: int().default(0).notNull(),
    spreadsheet: int().notNull(),
    positionCustom: int("position_custom").notNull(),
    rangeNumber: int("range_number").notNull(),
    range: varchar({ length: 255 }).notNull(),
    createdAt: datetime("created_at", { mode: "string" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime("updated_at", { mode: "string" }).notNull()
  },
  (table) => {
    return {
      customRankingUserIdCampaignIdRange: primaryKey({ columns: [table.userId, table.campaignId, table.range], name: "custom_ranking_user_id_campaign_id_range" })
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
var igAudienceAge = mysqlTable(
  "ig_audience_age",
  {
    profileId: varchar({ length: 150 }).notNull(),
    age: mysqlEnum(instagramAudienceAgeBrackets).notNull(),
    type: varchar({ length: 50 }),
    percentage: float(),
    updatedAt: date({ mode: "date" })
  },
  (table) => {
    return {
      igAudienceAgeProfileIdAge: primaryKey({ columns: [table.profileId, table.age], name: "ig_audience_age_profileId_age" })
    };
  }
);
var igAudienceCity = mysqlTable(
  "ig_audience_city",
  {
    profileId: varchar({ length: 150 }).notNull(),
    city: varchar({ length: 50 }).notNull(),
    state: varchar({ length: 50 }),
    uf: varchar({ length: 50 }),
    type: varchar({ length: 50 }),
    percentage: float(),
    updatedAt: date({ mode: "date" })
  },
  (table) => {
    return {
      igAudienceCityProfileIdCity: primaryKey({ columns: [table.profileId, table.city], name: "ig_audience_city_profileId_city" })
    };
  }
);
var igAudienceCountry = mysqlTable(
  "ig_audience_country",
  {
    profileId: varchar({ length: 150 }).notNull(),
    countryCode: varchar({ length: 50 }).notNull(),
    type: varchar({ length: 50 }),
    percentage: float(),
    updatedAt: date({ mode: "date" })
  },
  (table) => {
    return {
      igAudienceCountryProfileIdCountryCode: primaryKey({ columns: [table.profileId, table.countryCode], name: "ig_audience_country_profileId_countryCode" })
    };
  }
);
var igAudienceGender = mysqlTable(
  "ig_audience_gender",
  {
    profileId: varchar({ length: 150 }).notNull(),
    gender: mysqlEnum(instagramAudienceGenderBrackets).notNull(),
    type: varchar({ length: 50 }),
    percentage: float(),
    updatedAt: date({ mode: "date" })
  },
  (table) => {
    return {
      igAudienceGenderProfileIdGender: primaryKey({ columns: [table.profileId, table.gender], name: "ig_audience_gender_profileId_gender" })
    };
  }
);
var igAudienceGenderAge = mysqlTable(
  "ig_audience_gender_age",
  {
    profileId: varchar({ length: 150 }).notNull(),
    gender: mysqlEnum(instagramAudienceGenderBrackets).notNull(),
    age: mysqlEnum(instagramAudienceAgeBrackets).notNull(),
    type: varchar({ length: 50 }),
    percentage: float(),
    updatedAt: date({ mode: "date" })
  },
  (table) => {
    return {
      igAudienceGenderAgeProfileIdGenderAge: primaryKey({ columns: [table.profileId, table.gender, table.age], name: "ig_audience_gender_age_profileId_gender_age" })
    };
  }
);
var igAudienceState = mysqlTable(
  "ig_audience_state",
  {
    profileId: varchar({ length: 150 }).notNull(),
    state: varchar({ length: 50 }).notNull(),
    type: varchar({ length: 50 }),
    percentage: float(),
    updatedAt: date({ mode: "date" })
  },
  (table) => {
    return {
      igAudienceStateProfileIdState: primaryKey({ columns: [table.profileId, table.state], name: "ig_audience_state_profileId_state" })
    };
  }
);
var igContentDiscount = mysqlTable(
  "ig_content_discount",
  {
    contentCount: int("content_count").notNull(),
    contentDiscount: float("content_discount")
  },
  (table) => {
    return {
      igContentDiscountContentCount: primaryKey({ columns: [table.contentCount], name: "ig_content_discount_content_count" })
    };
  }
);
var igFollowerGrowth = mysqlTable(
  "ig_follower_growth",
  {
    profileId: varchar({ length: 150 }).notNull(),
    followers: int(),
    date: date({ mode: "date" }).notNull()
  },
  (table) => {
    return {
      igFollowerGrowthProfileIdDate: primaryKey({ columns: [table.profileId, table.date], name: "ig_follower_growth_profileId_date" })
    };
  }
);
var igOverview = mysqlTable(
  "ig_overview",
  {
    id: bigint({ mode: "number" }).autoincrement().notNull(),
    campaignId: varchar("campaign_id", { length: 255 }).notNull(),
    date: date({ mode: "date" }),
    campaignUsername: varchar("campaign_username", { length: 255 }),
    campaignTitle: varchar("campaign_title", { length: 255 }),
    campaignCustomer: varchar("campaign_customer", { length: 255 }),
    campaignTag: varchar("campaign_tag", { length: 255 }),
    brandFollowers: int("brand_followers"),
    contractedProfiles: int("contracted_profiles").default(0).notNull(),
    contractedPosts: int("contracted_posts").default(0).notNull(),
    contractedStories: int("contracted_stories").default(0).notNull(),
    activatedProfiles: int("activated_profiles").default(0).notNull(),
    generatedContents: int("generated_contents").default(0).notNull(),
    engagements: bigint({ mode: "number" }).notNull(),
    impressions: int().default(0),
    reach: int().default(0).notNull(),
    executedPosts: int("executed_posts").default(0),
    postsImpressions: int("posts_impressions").default(0),
    postsReach: int("posts_reach").default(0),
    postsEffectiveReach: float("posts_effective_reach"),
    executedStories: int("executed_stories").default(0),
    tapsBack: int("taps_back").default(0).notNull(),
    storiesImpressions: int("stories_impressions").default(0),
    storiesReach: int("stories_reach").default(0),
    storiesEffectiveReach: float("stories_effective_reach"),
    responsible: varchar({ length: 255 }),
    startDate: date("start_date", { mode: "date" }),
    endDate: date("end_date", { mode: "date" }),
    status: varchar({ length: 255 }),
    responsibleCommercial: varchar({ length: 255 }),
    postsEngagementRate: float("posts_engagement_rate"),
    storiesReplies: bigint("stories_replies", { mode: "number" }),
    storiesEngagements: bigint("stories_engagements", { mode: "number" }),
    storiesEngagementRate: float("stories_engagement_rate"),
    postsEngagements: bigint("posts_engagements", { mode: "number" }),
    postsLikes: int("posts_likes"),
    postsComments: int("posts_comments"),
    postsSaveds: int("posts_saveds"),
    totalClicks: int(),
    uniqueClicks: int(),
    community: varchar({ length: 24 }),
    postImageEngagementRate: float("post_image_engagement_rate"),
    postCarouselEngagementRate: float("post_carousel_engagement_rate"),
    postVideoEngagementRate: float("post_video_engagement_rate"),
    storiesVideoEngagementRate: float("stories_video_engagement_rate"),
    storiesImageEngagementRate: float("stories_image_engagement_rate"),
    storiesCompleteEngagementRate: float("stories_complete_engagement_rate"),
    uniqueReach: int("unique_reach"),
    uniquePostsReach: float("unique_posts_reach"),
    uniqueStoriesReach: float("unique_stories_reach"),
    potentialReach: float("potential_reach"),
    estimatedReach: float("estimated_reach"),
    frequency: float(),
    convertionsCount: float("convertions_count"),
    convertionsValue: float("convertions_value"),
    executedPostsCarousel: int("executed_posts_carousel").default(0),
    executedPostsVideo: int("executed_posts_video").default(0),
    executedPostsImage: int("executed_posts_image").default(0),
    executedStoriesImage: int("executed_stories_image").default(0),
    executedStoriesVideo: int("executed_stories_video").default(0),
    postsImpressionsVideo: int("posts_impressions_video").default(0),
    storiesImpressionsVideo: int("stories_impressions_video").default(0),
    postsImpressionsImage: int("posts_impressions_image").default(0),
    postsImpressionsCarousel: int("posts_impressions_carousel").default(0),
    storiesImpressionsImage: int("stories_impressions_image").default(0),
    postsVideoViews: int("posts_video_views").default(0),
    storiesVideoViews: int("stories_video_views").default(0),
    executedPostsVideoFeed: int("executed_posts_video_feed"),
    executedPostsVideoReels: int("executed_posts_video_reels"),
    executedPostsVideoIgtv: int("executed_posts_video_igtv"),
    postsImpressionsVideoFeed: int("posts_impressions_video_feed"),
    postsImpressionsVideoReels: int("posts_impressions_video_reels"),
    postsImpressionsVideoIgtv: int("posts_impressions_video_igtv"),
    cpm: float(),
    cpe: float(),
    mediaValue: float("media_value"),
    roi: float(),
    ctr: float(),
    responsibleTeam: varchar("responsible_team", { length: 255 }),
    cpa: float(),
    cpc: float(),
    contractedReels: int("contracted_reels").default(0).notNull(),
    reelsEngagementRate: float("reels_engagement_rate"),
    reelsEngagements: bigint("reels_engagements", { mode: "number" }),
    reelsImpressions: int("reels_impressions").default(0),
    uniqueReelsReach: float("unique_reels_reach"),
    reelsReach: int("reels_reach").default(0).notNull(),
    reelsEffectiveReach: float("reels_effective_reach"),
    reelsLikes: int("reels_likes"),
    reelsComments: int("reels_comments"),
    reelsSaved: int("reels_saved"),
    executedReels: int("executed_reels").default(0).notNull(),
    reelsPlays: int("reels_plays").default(0),
    executedStoriesImageNormalized: int("executed_stories_image_normalized").default(0).notNull(),
    executedStoriesVideoNormalized: int("executed_stories_video_normalized").default(0).notNull(),
    executedStoriesNormalized: int("executed_stories_normalized").default(0).notNull(),
    convertionsRegisteredCount: float("convertions_registered_count"),
    convertionsRegisteredValue: float("convertions_registered_value"),
    convertionsCommissionToReceive: float("convertions_commission_to_receive"),
    postsShares: int("posts_shares"),
    postsProfileVisits: int("posts_profile_visits"),
    postsProfileActivity: int("posts_profile_activity"),
    postsFollows: int("posts_follows"),
    reelsShares: int("reels_shares"),
    storiesShares: int("stories_shares"),
    storiesProfileVisits: int("stories_profile_visits"),
    storiesProfileActivity: int("stories_profile_activity"),
    storiesFollows: int("stories_follows"),
    reelsReplays: int("reels_replays")
  },
  (table) => {
    return {
      overviewDefaultIdx: index("overview_default_idx").on(table.campaignId),
      igOverviewId: primaryKey({ columns: [table.id], name: "ig_overview_id" })
    };
  }
);
var igProfileCampaignOverview = mysqlTable(
  "ig_profile_campaign_overview",
  {
    campaignId: varchar("campaign_id", { length: 255 }).notNull(),
    date: date({ mode: "date" }),
    campaignUsername: varchar("campaign_username", { length: 255 }),
    campaignTitle: varchar("campaign_title", { length: 255 }).notNull(),
    campaignCustomer: varchar("campaign_customer", { length: 255 }).notNull(),
    campaignTag: varchar("campaign_tag", { length: 255 }),
    username: varchar({ length: 255 }).notNull(),
    userId: varchar("user_id", { length: 255 }).notNull(),
    followers: int().default(0).notNull(),
    generatedContents: int("generated_contents").default(0).notNull(),
    engagements: bigint({ mode: "number" }).notNull(),
    impressions: int().default(0),
    reach: int().default(0).notNull(),
    effectiveReach: float("effective_reach"),
    executedPosts: int("executed_posts").default(0),
    postsImpressions: int("posts_impressions").default(0),
    postsReach: int("posts_reach").default(0),
    postsEffectiveReach: float("posts_effective_reach"),
    postsEngagements: int("posts_engagements"),
    executedStories: int("executed_stories").default(0),
    tapsBack: int("taps_back").default(0).notNull(),
    tapsBackRate: float("taps_back_rate").notNull(),
    storiesImpressions: int("stories_impressions").default(0),
    storiesReach: int("stories_reach").default(0),
    storiesEffectiveReach: float("stories_effective_reach"),
    storiesReplies: bigint("stories_replies", { mode: "number" }),
    storiesEngagements: bigint("stories_engagements", { mode: "number" }),
    storiesEngagementRate: float("stories_engagement_rate"),
    comments: int(),
    likes: int(),
    saved: int(),
    postsEngagementRate: float("posts_engagement_rate"),
    squidId: varchar("squid_id", { length: 255 }),
    totalClicks: int(),
    uniqueClicks: int(),
    community: varchar({ length: 24 }),
    postImageEngagementRate: float("post_image_engagement_rate"),
    postCarouselEngagementRate: float("post_carousel_engagement_rate"),
    postVideoEngagementRate: float("post_video_engagement_rate"),
    storiesVideoEngagementRate: float("stories_video_engagement_rate"),
    storiesImageEngagementRate: float("stories_image_engagement_rate"),
    storiesCompleteEngagementRate: float("stories_complete_engagement_rate"),
    uniqueReach: float("unique_reach"),
    uniquePostsReach: float("unique_posts_reach"),
    uniqueStoriesReach: float("unique_stories_reach"),
    macro: tinyint().default(0),
    convertionsCount: float("convertions_count"),
    convertionsValue: float("convertions_value"),
    ctr: float(),
    reelsEngagementRate: float("reels_engagement_rate"),
    reelsEngagements: bigint("reels_engagements", { mode: "number" }),
    uniqueReelsReach: float("unique_reels_reach"),
    reelsReach: int("reels_reach").default(0),
    reelsEffectiveReach: float("reels_effective_reach"),
    reelsLikes: int("reels_likes"),
    reelsComments: int("reels_comments"),
    reelsSaved: int("reels_saved"),
    executedReels: int("executed_reels").default(0),
    reelsImpressions: int("reels_impressions").default(0),
    reelsPlays: int("reels_plays").default(0),
    executedStoriesNormalized: int("executed_stories_normalized").default(0),
    convertionsRegisteredCount: float("convertions_registered_count"),
    convertionsRegisteredValue: float("convertions_registered_value"),
    convertionsCommissionToReceive: float("convertions_commission_to_receive"),
    postsShares: int("posts_shares"),
    postsProfileVisits: int("posts_profile_visits"),
    postsProfileActivity: int("posts_profile_activity"),
    postsFollows: int("posts_follows"),
    reelsShares: int("reels_shares"),
    storiesShares: int("stories_shares"),
    storiesProfileVisits: int("stories_profile_visits"),
    storiesProfileActivity: int("stories_profile_activity"),
    storiesFollows: int("stories_follows"),
    reelsReplays: int("reels_replays")
  },
  (table) => {
    return {
      followupDefaultIdx: index("followup_default_idx").on(table.campaignId),
      userId: index("user_id").on(table.userId)
    };
  }
);
var influencerCampaignPerformanceOverview = mysqlTable("influencer_campaign_performance_overview", {
  campaignId: varchar("campaign_id", { length: 255 }).notNull(),
  date: date({ mode: "date" }).notNull(),
  squidId: varchar("squid_id", { length: 255 }).notNull(),
  username: varchar({ length: 255 }).notNull(),
  clicksTotal: int("clicks_total"),
  clicksUnique: int("clicks_unique"),
  convertionsCount: int("convertions_count"),
  convertionsValue: int("convertions_value"),
  community: varchar({ length: 255 })
});
var instagramMedias = mysqlTable(
  "instagram_medias",
  {
    id: varchar({ length: 50 }).notNull(),
    campaignId: varchar("campaign_id", { length: 255 }).notNull(),
    campaignUsername: varchar("campaign_username", { length: 255 }),
    campaignTitle: varchar("campaign_title", { length: 255 }).notNull(),
    campaignCustomer: varchar("campaign_customer", { length: 255 }).notNull(),
    campaignTag: varchar("campaign_tag", { length: 255 }),
    campaignTimezone: varchar("campaign_timezone", { length: 45 }),
    date: date({ mode: "date" }).notNull(),
    idMedia: varchar("id_media", { length: 255 }).notNull(),
    mediaOriginalTimezone: varchar("media_original_timezone", { length: 45 }),
    username: varchar({ length: 255 }).notNull(),
    userId: varchar("user_id", { length: 255 }).notNull(),
    followers: int().notNull(),
    type: varchar({ length: 25 }).notNull(),
    createdAt: datetime("created_at", { mode: "string" }).notNull(),
    weekday: int().notNull(),
    time: varchar({ length: 255 }).default("").notNull(),
    hour: int().notNull(),
    link: varchar({ length: 255 }).default(""),
    thumbnail: varchar({ length: 500 }),
    likes: int(),
    comments: int(),
    saved: int(),
    engagements: bigint({ mode: "number" }),
    engagementRate: float("engagement_rate"),
    reach: int(),
    impressions: int(),
    tapsBack: int("taps_back"),
    tapsBackRate: float("taps_back_Rate"),
    tapsForward: int("taps_forward"),
    tapsForwardRate: float("taps_forward_rate"),
    exits: int(),
    status: varchar({ length: 20 }),
    replies: bigint({ mode: "number" }),
    effectiveReach: float("effective_reach"),
    subtype: varchar({ length: 25 }),
    videoViews: int("video_views"),
    // Warning: Can't parse bit(1) from database
    // bit(1)Type: bit(1)("last_media"),
    community: varchar({ length: 24 }),
    videoSubtype: varchar("video_subtype", { length: 45 }),
    caption: text(),
    plays: int(),
    obtainedOn: datetime("obtained_on", { mode: "string" }),
    capture: varchar({ length: 50 }),
    hasOcrMetrics: tinyint("has_ocr_metrics").default(0),
    replays: int(),
    follows: int(),
    profileActivity: int("profile_activity"),
    profileVisits: int("profile_visits"),
    shares: int()
  },
  (table) => {
    return {
      queryDefaultIdx: index("query_default_idx").on(table.campaignId, table.status, table.type),
      idMediaIdx: index("instagram_medias_id_media_IDX").on(table.idMedia),
      userIdIdx: index("instagram_medias_user_id_IDX").on(table.userId),
      followersIdx: index("instagram_medias_followers_IDX").on(table.followers),
      createdAtIdx: index("instagram_medias_created_at_IDX").on(table.createdAt),
      typeIdx: index("instagram_medias_type_IDX").on(table.type),
      effectiveReachIdx: index("instagram_medias_effective_reach_IDX").on(table.effectiveReach),
      instagramMediasId: primaryKey({ columns: [table.id], name: "instagram_medias_id" })
    };
  }
);
var instagramMediasBkp = mysqlTable(
  "instagram_medias_bkp",
  {
    id: int().autoincrement().notNull(),
    campaignId: varchar("campaign_id", { length: 255 }).notNull(),
    campaignUsername: varchar("campaign_username", { length: 255 }),
    campaignTitle: varchar("campaign_title", { length: 255 }).notNull(),
    campaignCustomer: varchar("campaign_customer", { length: 255 }).notNull(),
    campaignTag: varchar("campaign_tag", { length: 255 }).notNull(),
    date: date({ mode: "date" }).notNull(),
    idMedia: varchar("id_media", { length: 255 }).notNull(),
    username: varchar({ length: 255 }).notNull(),
    userId: varchar("user_id", { length: 255 }).notNull(),
    followers: int().notNull(),
    type: varchar({ length: 25 }).notNull(),
    createdAt: datetime("created_at", { mode: "string" }).notNull(),
    weekday: int().notNull(),
    time: varchar({ length: 255 }).default("").notNull(),
    hour: int().notNull(),
    link: varchar({ length: 255 }).default(""),
    thumbnail: varchar({ length: 500 }),
    likes: int(),
    comments: int(),
    saved: int(),
    engagements: int(),
    engagementRate: float("engagement_rate"),
    reach: int(),
    impressions: int(),
    tapsBack: int("taps_back"),
    tapsBackRate: float("taps_back_Rate"),
    tapsForward: int("taps_forward"),
    tapsForwardRate: float("taps_forward_rate"),
    exits: int(),
    status: varchar({ length: 20 }),
    replies: int(),
    effectiveReach: float("effective_reach"),
    subtype: varchar({ length: 25 }),
    videoViews: int("video_views"),
    // Warning: Can't parse bit(1) from database
    // bit(1)Type: bit(1)("last_media"),
    community: tinyint().notNull()
  },
  (table) => {
    return {
      instagramMediasBkpId: primaryKey({ columns: [table.id], name: "instagram_medias_bkp_id" })
    };
  }
);
var instagramTiers = mysqlTable(
  "instagram_tiers",
  {
    id: int().autoincrement().notNull(),
    label: varchar({ length: 255 }).notNull(),
    min: int().default(0),
    max: int(),
    rpa: tinyint().default(0),
    postValue: float("post_value"),
    stories: float(),
    reelValue: float("reel_value"),
    defaultCacheVariation: float("default_cache_variation")
  },
  (table) => {
    return {
      minIdx: index("instagram_tiers_min_IDX").on(table.min),
      maxIdx: index("instagram_tiers_max_IDX").on(table.max),
      instagramTiersId: primaryKey({ columns: [table.id], name: "instagram_tiers_id" })
    };
  }
);
var linkedinTiers = mysqlTable(
  "linkedin_tiers",
  {
    id: int().autoincrement().notNull(),
    label: varchar({ length: 255 }).notNull(),
    min: int().default(0),
    max: int()
  },
  (table) => {
    return {
      linkedinTiersId: primaryKey({ columns: [table.id], name: "linkedin_tiers_id" })
    };
  }
);
var mappingStates = mysqlTable(
  "mapping_states",
  {
    state: varchar({ length: 250 }).notNull(),
    city: varchar({ length: 250 }).notNull(),
    uf: char({ length: 2 }).notNull()
  },
  (table) => {
    return {
      mappingStatesStateCityUf: primaryKey({ columns: [table.state, table.city, table.uf], name: "mapping_states_state_city_uf" })
    };
  }
);
var numbers = mysqlTable(
  "numbers",
  {
    n: int().notNull()
  },
  (table) => {
    return {
      numbersN: primaryKey({ columns: [table.n], name: "numbers_n" })
    };
  }
);
var tiktokMedias = mysqlTable(
  "tiktok_medias",
  {
    id: int().autoincrement().notNull(),
    campaignId: varchar("campaign_id", { length: 255 }).notNull(),
    campaignUsername: varchar("campaign_username", { length: 255 }),
    campaignTitle: varchar("campaign_title", { length: 255 }),
    campaignCustomer: varchar("campaign_customer", { length: 255 }),
    campaignTag: varchar("campaign_tag", { length: 255 }),
    campaignTimezone: varchar("campaign_timezone", { length: 255 }),
    date: date({ mode: "date" }),
    idMedia: varchar("id_media", { length: 255 }),
    mediaOriginalTimezone: varchar("media_original_timezone", { length: 255 }),
    username: varchar({ length: 255 }),
    userId: varchar("user_id", { length: 255 }),
    followers: varchar({ length: 255 }),
    subtype: varchar({ length: 255 }),
    type: varchar({ length: 255 }),
    createdAt: datetime("created_at", { mode: "string" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    weekday: int(),
    time: varchar({ length: 255 }),
    hour: int(),
    link: text(),
    thumbnail: varchar({ length: 500 }),
    likes: int(),
    comments: int(),
    shares: int(),
    engagements: int(),
    engagementRate: float("engagement_rate"),
    reach: bigint({ mode: "number" }),
    impressions: bigint({ mode: "number" }),
    effectiveReach: float("effective_reach"),
    views: bigint({ mode: "number" }),
    status: varchar({ length: 20 }),
    community: varchar({ length: 24 }).notNull(),
    caption: text(),
    obtainedOn: datetime("obtained_on", { mode: "string" }),
    videoCompletionRate: float("video_completion_rate"),
    totalPlayTime: int("total_play_time"),
    averageViewTime: float("average_view_time"),
    twoSecondsViews: float("two_seconds_views"),
    sixSecondsViews: float("six_seconds_views"),
    videoViewsBySourceFollowing: int("video_views_by_source_following"),
    videoViewsBySourceHashtag: int("video_views_by_source_hashtag"),
    videoViewsBySourceForYou: int("video_views_by_source_for_you"),
    videoViewsBySourcePersonalProfile: int("video_views_by_source_personal_profile"),
    videoViewsBySourceSearch: int("video_views_by_source_search"),
    videoViewsBySourceSound: int("video_views_by_source_sound"),
    obtainedBy: varchar("obtained_by", { length: 100 }),
    capture: varchar({ length: 45 })
  },
  (table) => {
    return {
      campaignIdIdx: index("tiktok_medias_campaign_id_IDX").on(table.campaignId, table.campaignTitle, table.status),
      tiktokMediasId: primaryKey({ columns: [table.id], name: "tiktok_medias_id" }),
      tiktokMediasIdIdx: unique("tiktok_medias_id_IDX").on(table.id)
    };
  }
);
var tiktokTiers = mysqlTable(
  "tiktok_tiers",
  {
    id: int().autoincrement().notNull(),
    label: varchar({ length: 255 }).notNull(),
    min: int().default(0),
    max: int()
  },
  (table) => {
    return {
      tiktokTiersId: primaryKey({ columns: [table.id], name: "tiktok_tiers_id" })
    };
  }
);
var tkAudienceAge = mysqlTable(
  "tk_audience_age",
  {
    campaignId: varchar("campaign_id", { length: 255 }).notNull(),
    date: date({ mode: "date" }),
    campaignUsername: varchar("campaign_username", { length: 255 }),
    campaignTitle: varchar("campaign_title", { length: 255 }),
    campaignCustomer: varchar("campaign_customer", { length: 255 }),
    campaignTag: varchar("campaign_tag", { length: 255 }),
    age18To24: float(),
    age25To34: float(),
    age35: float(),
    community: varchar({ length: 24 })
  },
  (table) => {
    return {
      tkAudienceAgeCampaignId: primaryKey({ columns: [table.campaignId], name: "tk_audience_age_campaign_id" })
    };
  }
);
var tkAudienceCountry = mysqlTable(
  "tk_audience_country",
  {
    campaignId: varchar("campaign_id", { length: 255 }).notNull(),
    date: date({ mode: "date" }),
    campaignUsername: varchar("campaign_username", { length: 255 }),
    campaignTitle: varchar("campaign_title", { length: 255 }),
    campaignCustomer: varchar("campaign_customer", { length: 255 }),
    campaignTag: varchar("campaign_tag", { length: 255 }),
    order: int().notNull(),
    name: varchar({ length: 255 }),
    value: float(),
    community: varchar({ length: 24 })
  },
  (table) => {
    return {
      tkAudienceCountryCampaignIdOrder: primaryKey({ columns: [table.campaignId, table.order], name: "tk_audience_country_campaign_id_order" })
    };
  }
);
var tkAudienceDevice = mysqlTable(
  "tk_audience_device",
  {
    campaignId: varchar("campaign_id", { length: 255 }).notNull(),
    date: date({ mode: "date" }),
    campaignUsername: varchar("campaign_username", { length: 255 }),
    campaignTitle: varchar("campaign_title", { length: 255 }),
    campaignCustomer: varchar("campaign_customer", { length: 255 }),
    campaignTag: varchar("campaign_tag", { length: 255 }),
    android: float(),
    ios: float(),
    community: varchar({ length: 24 })
  },
  (table) => {
    return {
      tkAudienceDeviceCampaignId: primaryKey({ columns: [table.campaignId], name: "tk_audience_device_campaign_id" })
    };
  }
);
var tkAudienceGender = mysqlTable(
  "tk_audience_gender",
  {
    campaignId: varchar("campaign_id", { length: 255 }).notNull(),
    date: date({ mode: "date" }),
    campaignUsername: varchar("campaign_username", { length: 255 }),
    campaignTitle: varchar("campaign_title", { length: 255 }),
    campaignCustomer: varchar("campaign_customer", { length: 255 }),
    campaignTag: varchar("campaign_tag", { length: 255 }),
    female: float(),
    male: float(),
    community: varchar({ length: 24 })
  },
  (table) => {
    return {
      tkAudienceGenderCampaignId: primaryKey({ columns: [table.campaignId], name: "tk_audience_gender_campaign_id" })
    };
  }
);
var tkOverview = mysqlTable(
  "tk_overview",
  {
    id: int().autoincrement().notNull(),
    campaignId: varchar("campaign_id", { length: 100 }).notNull(),
    campaignTitle: varchar("campaign_title", { length: 100 }),
    campaignCustomer: varchar("campaign_customer", { length: 100 }),
    responsible: varchar({ length: 100 }),
    date: date({ mode: "date" }),
    startDate: date("start_date", { mode: "date" }),
    endDate: date("end_date", { mode: "date" }),
    status: varchar({ length: 100 }),
    responsibleCommercial: varchar({ length: 100 }),
    totalClicks: int(),
    uniqueClicks: int(),
    community: varchar({ length: 100 }),
    convertionsCount: float("convertions_count"),
    convertionsValue: float("convertions_value"),
    contractedProfiles: int("contracted_profiles"),
    activatedProfiles: int("activated_profiles"),
    potentialReach: int("potential_reach"),
    contractedVideos: int("contracted_videos"),
    generatedContents: int("generated_contents"),
    executedVideos: int("executed_videos"),
    impressions: int(),
    reach: bigint({ mode: "number" }),
    effectiveReach: bigint("effective_reach", { mode: "number" }),
    engagements: int(),
    engagementRate: float("engagement_rate"),
    likes: int(),
    comments: int(),
    shares: int(),
    cpm: float(),
    cpe: float(),
    mediaValue: float("media_value"),
    roi: float(),
    ctr: float(),
    responsibleTeam: varchar("responsible_team", { length: 100 }),
    createdAt: datetime("created_at", { mode: "string" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    videoCompletionRate: float("video_completion_rate"),
    totalPlayTime: int("total_play_time"),
    averageViewTime: float("average_view_time"),
    twoSecondsViews: float("two_seconds_views"),
    sixSecondsViews: float("six_seconds_views"),
    videoViewsBySourceFollowing: int("video_views_by_source_following"),
    videoViewsBySourceHashtag: int("video_views_by_source_hashtag"),
    videoViewsBySourceForYou: int("video_views_by_source_for_you"),
    videoViewsBySourcePersonalProfile: int("video_views_by_source_personal_profile"),
    videoViewsBySourceSearch: int("video_views_by_source_search"),
    videoViewsBySourceSound: int("video_views_by_source_sound"),
    convertionsRegisteredCount: float("convertions_registered_count"),
    convertionsRegisteredValue: float("convertions_registered_value"),
    convertionsCommissionToReceive: float("convertions_commission_to_receive"),
    cpa: float(),
    cpc: float()
  },
  (table) => {
    return {
      tkOverviewId: primaryKey({ columns: [table.id], name: "tk_overview_id" })
    };
  }
);
var tkProfileCampaignOverview = mysqlTable(
  "tk_profile_campaign_overview",
  {
    id: int().autoincrement().notNull(),
    campaignId: varchar("campaign_id", { length: 255 }).default("").notNull(),
    campaignTitle: varchar("campaign_title", { length: 255 }).default("").notNull(),
    campaignCustomer: varchar("campaign_customer", { length: 255 }).default("").notNull(),
    community: varchar({ length: 255 }),
    date: date({ mode: "date" }).notNull(),
    username: varchar({ length: 255 }).default("").notNull(),
    userId: varchar("user_id", { length: 255 }).default("").notNull(),
    squidId: varchar("squid_id", { length: 255 }).default("").notNull(),
    executedVideos: int("executed_videos").notNull(),
    likes: int().notNull(),
    comments: int().notNull(),
    views: int().notNull(),
    shares: int().notNull(),
    reach: float(),
    uniqueReach: float("unique_reach"),
    engagements: int(),
    engagementRate: float("engagement_rate"),
    macro: tinyint().default(0),
    totalClicks: int(),
    uniqueClicks: int(),
    convertionsCount: float("convertions_count"),
    convertionsValue: float("convertions_value"),
    videoCompletionRate: float("video_completion_rate"),
    totalPlayTime: int("total_play_time"),
    averageViewTime: float("average_view_time"),
    twoSecondsViews: float("two_seconds_views"),
    sixSecondsViews: float("six_seconds_views"),
    videoViewsBySourceFollowing: int("video_views_by_source_following"),
    videoViewsBySourceHashtag: int("video_views_by_source_hashtag"),
    videoViewsBySourceForYou: int("video_views_by_source_for_you"),
    videoViewsBySourcePersonalProfile: int("video_views_by_source_personal_profile"),
    videoViewsBySourceSearch: int("video_views_by_source_search"),
    videoViewsBySourceSound: int("video_views_by_source_sound"),
    generatedContents: int("generated_contents").default(0).notNull(),
    convertionsRegisteredCount: float("convertions_registered_count"),
    convertionsRegisteredValue: float("convertions_registered_value"),
    convertionsCommissionToReceive: float("convertions_commission_to_receive")
  },
  (table) => {
    return {
      tkProfileCampaignOverviewId: primaryKey({ columns: [table.id], name: "tk_profile_campaign_overview_id" })
    };
  }
);
var ttOverview = mysqlTable(
  "tt_overview",
  {
    id: mediumint().autoincrement().notNull(),
    campaignId: varchar("campaign_id", { length: 255 }).notNull(),
    date: date({ mode: "date" }),
    campaignUsername: varchar("campaign_username", { length: 255 }),
    campaignTitle: varchar("campaign_title", { length: 255 }),
    campaignCustomer: varchar("campaign_customer", { length: 255 }),
    campaignTag: varchar("campaign_tag", { length: 255 }),
    brandFollowers: int("brand_followers"),
    contractedProfiles: int("contracted_profiles").default(0).notNull(),
    contractedTweets: int("contracted_tweets").default(0).notNull(),
    contractedRetweets: int("contracted_retweets").default(0).notNull(),
    activatedProfiles: int("activated_profiles").default(0).notNull(),
    generatedContents: int("generated_contents").default(0).notNull(),
    engagements: int().default(0).notNull(),
    impressions: int().default(0).notNull(),
    reach: int().default(0).notNull(),
    executedTweets: int("executed_tweets").default(0).notNull(),
    tweetsImpressions: int("tweets_impressions").default(0).notNull(),
    tweetsReach: int("tweets_reach").default(0).notNull(),
    tweetsEffectiveReach: float("tweets_effective_reach").notNull(),
    executedRetweets: int("executed_retweets").default(0).notNull(),
    responsible: varchar({ length: 255 }),
    startDate: date("start_date", { mode: "date" }),
    endDate: date("end_date", { mode: "date" }),
    status: varchar({ length: 255 }),
    responsibleCommercial: varchar({ length: 255 }),
    tweetsEngagementRate: float("tweets_engagement_rate"),
    tweetsEngagements: int("tweets_engagements"),
    tweetsLikes: int("tweets_likes"),
    tweetsReplies: int("tweets_replies"),
    tweetsRetweets: int("tweets_retweets"),
    totalClicks: int(),
    uniqueClicks: int(),
    community: varchar({ length: 24 }),
    tweetImageEngagementRate: float("tweet_image_engagement_rate"),
    tweetTextEngagementRate: float("tweet_text_engagement_rate"),
    tweetPollEngagementRate: float("tweet_poll_engagement_rate"),
    tweetVideoEngagementRate: float("tweet_video_engagement_rate"),
    potentialReach: float("potential_reach"),
    frequency: float(),
    convertionsCount: float("convertions_count"),
    convertionsValue: float("convertions_value"),
    retweetImpressions: int("retweet_impressions"),
    retweetEngagements: int("retweet_engagements"),
    retweetVideoEngagementRate: float("retweet_video_engagement_rate"),
    retweetPollEngagementRate: float("retweet_poll_engagement_rate"),
    retweetTextEngagementRate: float("retweet_text_engagement_rate"),
    retweetEngagementRate: float("retweet_engagement_rate"),
    retweetImageEngagementRate: float("retweet_image_engagement_rate"),
    retweetsLikes: float("retweets_likes"),
    retweetsReplies: float("retweets_replies"),
    retweetsRetweets: float("retweets_retweets"),
    executedTweetsImage: int("executed_tweets_image"),
    executedTweetsVideo: int("executed_tweets_video"),
    executedTweetsText: int("executed_tweets_text"),
    executedTweetsPoll: int("executed_tweets_poll"),
    executedRetweetsImage: int("executed_retweets_image"),
    executedRetweetsVideo: int("executed_retweets_video"),
    executedRetweetsText: int("executed_retweets_text"),
    executedRetweetsPoll: int("executed_retweets_poll"),
    tweetsImpressionsVideo: int("tweets_impressions_video"),
    tweetsImpressionsImage: int("tweets_impressions_image"),
    tweetsImpressionsText: int("tweets_impressions_text"),
    tweetsImpressionsPoll: int("tweets_impressions_poll"),
    retweetsImpressionsVideo: int("retweets_impressions_video"),
    retweetsImpressionsImage: int("retweets_impressions_image"),
    retweetsImpressionsText: int("retweets_impressions_text"),
    retweetsImpressionsPoll: int("retweets_impressions_poll"),
    cpm: float(),
    cpe: float(),
    mediaValue: float("media_value"),
    roi: float(),
    ctr: float(),
    responsibleTeam: varchar("responsible_team", { length: 255 }),
    convertionsRegisteredCount: float("convertions_registered_count"),
    convertionsRegisteredValue: float("convertions_registered_value"),
    convertionsCommissionToReceive: float("convertions_commission_to_receive"),
    cpa: float(),
    cpc: float()
  },
  (table) => {
    return {
      overviewDefaultIdx: index("overview_default_idx").on(table.campaignId),
      ttOverviewId: primaryKey({ columns: [table.id], name: "tt_overview_id" })
    };
  }
);
var ttProfileCampaignOverview = mysqlTable(
  "tt_profile_campaign_overview",
  {
    campaignId: varchar("campaign_id", { length: 255 }).notNull(),
    date: date({ mode: "date" }),
    campaignUsername: varchar("campaign_username", { length: 255 }),
    campaignTitle: varchar("campaign_title", { length: 255 }).notNull(),
    campaignCustomer: varchar("campaign_customer", { length: 255 }).notNull(),
    campaignTag: varchar("campaign_tag", { length: 255 }),
    username: varchar({ length: 255 }).notNull(),
    userId: varchar("user_id", { length: 255 }).notNull(),
    followers: int().default(0).notNull(),
    generatedContents: int("generated_contents").default(0).notNull(),
    engagements: int().default(0).notNull(),
    engagementRate: float("engagement_rate"),
    impressions: int().default(0).notNull(),
    reach: int().default(0).notNull(),
    effectiveReach: float("effective_reach"),
    replies: int(),
    likes: int(),
    retweets: int(),
    squidId: varchar("squid_id", { length: 255 }),
    community: varchar({ length: 255 }).default("0").notNull(),
    macro: tinyint().default(0),
    totalClicks: int(),
    uniqueClicks: int(),
    convertionsCount: float("convertions_count"),
    convertionsValue: float("convertions_value"),
    executedTweets: int("executed_tweets").default(0).notNull(),
    executedRetweets: int("executed_retweets").default(0).notNull(),
    convertionsRegisteredCount: float("convertions_registered_count"),
    convertionsRegisteredValue: float("convertions_registered_value"),
    convertionsCommissionToReceive: float("convertions_commission_to_receive")
  },
  (table) => {
    return {
      followupDefaultIdx: index("followup_default_idx").on(table.campaignId)
    };
  }
);
var twitterMedias = mysqlTable(
  "twitter_medias",
  {
    id: int().autoincrement().notNull(),
    campaignId: varchar("campaign_id", { length: 255 }).notNull(),
    campaignUsername: varchar("campaign_username", { length: 255 }),
    campaignTitle: varchar("campaign_title", { length: 255 }).notNull(),
    campaignCustomer: varchar("campaign_customer", { length: 255 }).notNull(),
    campaignTag: varchar("campaign_tag", { length: 255 }).notNull(),
    campaignTimezone: varchar("campaign_timezone", { length: 45 }),
    date: date({ mode: "date" }).notNull(),
    idMedia: varchar("id_media", { length: 255 }).notNull(),
    mediaOriginalTimezone: varchar("media_original_timezone", { length: 45 }),
    username: varchar({ length: 255 }).notNull(),
    userId: varchar("user_id", { length: 255 }).notNull(),
    followers: int().notNull(),
    type: varchar({ length: 25 }).notNull(),
    createdAt: datetime("created_at", { mode: "string" }).notNull(),
    weekday: int().notNull(),
    time: varchar({ length: 255 }).default("").notNull(),
    hour: int().notNull(),
    link: varchar({ length: 255 }).default(""),
    thumbnail: varchar({ length: 500 }),
    likes: int().default(0),
    replies: int().default(0),
    retweets: int().default(0),
    engagements: int().default(0),
    engagementRate: float("engagement_rate"),
    reach: int().default(0),
    impressions: int().default(0),
    status: varchar({ length: 20 }),
    effectiveReach: float("effective_reach"),
    subtype: varchar({ length: 25 }),
    // Warning: Can't parse bit(1) from database
    // bit(1)Type: bit(1)("last_media"),
    community: varchar({ length: 24 }),
    caption: text(),
    obtainedOn: datetime("obtained_on", { mode: "string" }),
    capture: varchar({ length: 45 })
  },
  (table) => {
    return {
      queryDefaultIdx: index("query_default_idx").on(table.campaignId, table.status, table.type),
      twitterMediasId: primaryKey({ columns: [table.id], name: "twitter_medias_id" })
    };
  }
);
var twitterTiers = mysqlTable(
  "twitter_tiers",
  {
    id: int().autoincrement().notNull(),
    label: varchar({ length: 255 }).notNull(),
    min: int().default(0),
    max: int()
  },
  (table) => {
    return {
      twitterTiersId: primaryKey({ columns: [table.id], name: "twitter_tiers_id" })
    };
  }
);
var youtubeMedias = mysqlTable(
  "youtube_medias",
  {
    id: int().autoincrement().notNull(),
    campaignId: varchar("campaign_id", { length: 255 }).notNull(),
    campaignTitle: varchar("campaign_title", { length: 255 }).notNull(),
    campaignCustomer: varchar("campaign_customer", { length: 255 }).notNull(),
    campaignTimezone: varchar("campaign_timezone", { length: 45 }),
    date: datetime({ mode: "string" }).notNull(),
    idMedia: varchar("id_media", { length: 255 }).notNull(),
    mediaOriginalTimezone: varchar("media_original_timezone", { length: 45 }),
    channel: varchar({ length: 255 }).notNull(),
    userId: varchar("user_id", { length: 255 }).notNull(),
    squidId: varchar("squid_id", { length: 255 }).notNull(),
    googleId: varchar("google_id", { length: 255 }),
    followers: int().default(0).notNull(),
    type: varchar({ length: 45 }).default("video").notNull(),
    weekday: int().notNull(),
    time: varchar({ length: 255 }).default("").notNull(),
    hour: int().notNull(),
    link: varchar({ length: 255 }).default(""),
    thumbnail: varchar({ length: 500 }),
    likes: int(),
    comments: int(),
    dislikes: int(),
    shares: int(),
    engagements: int(),
    engagementRate: float("engagement_rate"),
    reach: int(),
    effectiveReach: int("effective_reach"),
    views: int(),
    estimatedMinutesWatched: int("estimated_minutes_watched"),
    status: varchar({ length: 20 }),
    // Warning: Can't parse bit(1) from database
    // bit(1)Type: bit(1)("last_media"),
    community: varchar({ length: 24 }).notNull(),
    subscribedViews: int("subscribed_views"),
    subscribedLikes: int("subscribed_likes"),
    subscribedDislikes: int("subscribed_dislikes"),
    subscribedShares: int("subscribed_shares"),
    subscribedEstimatedMinutesWatched: int("subscribed_estimated_minutes_watched"),
    unsubscribedViews: int("unsubscribed_views"),
    unsubscribedLikes: int("unsubscribed_likes"),
    unsubscribedDislikes: int("unsubscribed_dislikes"),
    unsubscribedShares: int("unsubscribed_shares"),
    unsubscribedEstimatedMinutesWatched: int("unsubscribed_estimated_minutes_watched"),
    createdAt: datetime("created_at", { mode: "string" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    caption: text(),
    obtainedOn: datetime("obtained_on", { mode: "string" }),
    capture: varchar({ length: 45 })
  },
  (table) => {
    return {
      queryDefaultIdx: index("query_default_idx").on(table.campaignId, table.type, table.status),
      youtubeMediasId: primaryKey({ columns: [table.id], name: "youtube_medias_id" })
    };
  }
);
var youtubeTiers = mysqlTable(
  "youtube_tiers",
  {
    id: int().autoincrement().notNull(),
    label: varchar({ length: 255 }).notNull(),
    min: int().default(0),
    max: int()
  },
  (table) => {
    return {
      youtubeTiersId: primaryKey({ columns: [table.id], name: "youtube_tiers_id" })
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
var ytAudienceAge = mysqlTable(
  "yt_audience_age",
  {
    profileId: varchar({ length: 150 }).notNull(),
    age: mysqlEnum(youtubeAgeBrackets).notNull(),
    type: varchar({ length: 50 }),
    percentage: float(),
    updatedAt: date({ mode: "date" })
  },
  (table) => {
    return {
      ytAudienceAgeProfileIdAge: primaryKey({ columns: [table.profileId, table.age], name: "yt_audience_age_profileId_age" })
    };
  }
);
var ytAudienceCountry = mysqlTable(
  "yt_audience_country",
  {
    profileId: varchar({ length: 150 }).notNull(),
    countryCode: varchar({ length: 50 }).notNull(),
    type: varchar({ length: 50 }),
    percentage: float(),
    updatedAt: date({ mode: "date" })
  },
  (table) => {
    return {
      ytAudienceCountryProfileIdCountryCode: primaryKey({ columns: [table.profileId, table.countryCode], name: "yt_audience_country_profileId_countryCode" })
    };
  }
);
var ytAudienceGender = mysqlTable(
  "yt_audience_gender",
  {
    profileId: varchar({ length: 150 }).notNull(),
    gender: mysqlEnum(youtubeGenderBrackets).notNull(),
    type: varchar({ length: 50 }),
    percentage: float(),
    updatedAt: date({ mode: "date" })
  },
  (table) => {
    return {
      ytAudienceGenderProfileIdGender: primaryKey({ columns: [table.profileId, table.gender], name: "yt_audience_gender_profileId_gender" })
    };
  }
);
var ytAudienceGenderAge = mysqlTable(
  "yt_audience_gender_age",
  {
    profileId: varchar({ length: 150 }).notNull(),
    gender: mysqlEnum(youtubeGenderBrackets).notNull(),
    age: mysqlEnum(youtubeAgeBrackets).notNull(),
    type: varchar({ length: 50 }),
    percentage: float(),
    updatedAt: date({ mode: "date" })
  },
  (table) => {
    return {
      ytAudienceGenderAgeProfileIdGenderAge: primaryKey({ columns: [table.profileId, table.gender, table.age], name: "yt_audience_gender_age_profileId_gender_age" })
    };
  }
);
var ytOverview = mysqlTable(
  "yt_overview",
  {
    id: int().autoincrement().notNull(),
    campaignId: varchar("campaign_id", { length: 255 }).notNull(),
    campaignTitle: varchar("campaign_title", { length: 255 }),
    campaignCustomer: varchar("campaign_customer", { length: 255 }),
    responsible: varchar({ length: 255 }),
    date: date({ mode: "date" }),
    startDate: date("start_date", { mode: "date" }),
    endDate: date("end_date", { mode: "date" }),
    status: varchar({ length: 255 }),
    responsibleCommercial: varchar({ length: 255 }),
    totalClicks: int(),
    uniqueClicks: int(),
    community: varchar({ length: 24 }),
    convertionsCount: float("convertions_count"),
    convertionsValue: float("convertions_value"),
    contractedProfiles: int("contracted_profiles"),
    activatedProfiles: int("activated_profiles"),
    potentialReach: int("potential_reach"),
    contractedVideos: int("contracted_videos"),
    generatedContents: int("generated_contents"),
    executedVideos: int("executed_videos"),
    impressions: int(),
    reach: int(),
    effectiveReach: int("effective_reach"),
    engagements: int(),
    engagementRate: float("engagement_rate"),
    likes: int(),
    comments: int(),
    dislikes: int(),
    shares: int(),
    estimatedMinutesWatched: int("estimated_minutes_watched"),
    subscribedViews: int("subscribed_views"),
    subscribedLikes: int("subscribed_likes"),
    subscribedDislikes: int("subscribed_dislikes"),
    subscribedShares: int("subscribed_shares"),
    subscribedEstimatedMinutesWatched: int("subscribed_estimated_minutes_watched"),
    unsubscribedViews: int("unsubscribed_views"),
    unsubscribedLikes: int("unsubscribed_likes"),
    unsubscribedDislikes: int("unsubscribed_dislikes"),
    unsubscribedShares: int("unsubscribed_shares"),
    unsubscribedEstimatedMinutesWatched: int("unsubscribed_estimated_minutes_watched"),
    createdAt: datetime("created_at", { mode: "string" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    cpm: float(),
    cpe: float(),
    mediaValue: float("media_value"),
    roi: float(),
    ctr: float(),
    responsibleTeam: varchar("responsible_team", { length: 255 }),
    convertionsRegisteredCount: float("convertions_registered_count"),
    convertionsRegisteredValue: float("convertions_registered_value"),
    convertionsCommissionToReceive: float("convertions_commission_to_receive"),
    cpc: float()
  },
  (table) => {
    return {
      ytOverviewId: primaryKey({ columns: [table.id], name: "yt_overview_id" })
    };
  }
);
var ytProfileCampaignOverview = mysqlTable("yt_profile_campaign_overview", {
  campaignId: varchar("campaign_id", { length: 255 }).default("").notNull(),
  campaignTitle: varchar("campaign_title", { length: 255 }).default("").notNull(),
  campaignCustomer: varchar("campaign_customer", { length: 255 }).default("").notNull(),
  community: varchar({ length: 255 }),
  date: date({ mode: "date" }).notNull(),
  channel: varchar({ length: 255 }).default("").notNull(),
  userId: varchar("user_id", { length: 255 }).default("").notNull(),
  squidId: varchar("squid_id", { length: 255 }).default("").notNull(),
  googleId: varchar("google_id", { length: 255 }),
  executedVideos: int("executed_videos").notNull(),
  likes: int().notNull(),
  comments: int().notNull(),
  dislikes: int().notNull(),
  views: int().notNull(),
  shares: int().notNull(),
  estimatedMinutesWatched: int("estimated_minutes_watched").notNull(),
  engagements: int(),
  subscribedViews: int("subscribed_views").notNull(),
  subscribedLikes: int("subscribed_likes").notNull(),
  subscribedDislikes: int("subscribed_dislikes").notNull(),
  subscribedShares: int("subscribed_shares").notNull(),
  subscribedEstimatedMinutesWatched: int("subscribed_estimated_minutes_watched").notNull(),
  unsubscribedViews: int("unsubscribed_views").notNull(),
  unsubscribedLikes: int("unsubscribed_likes").notNull(),
  unsubscribedDislikes: int("unsubscribed_dislikes").notNull(),
  unsubscribedShares: int("unsubscribed_shares").notNull(),
  unsubscribedEstimatedMinutesWatched: int("unsubscribed_estimated_minutes_watched").notNull(),
  macro: tinyint().default(0),
  totalClicks: int(),
  uniqueClicks: int(),
  convertionsCount: float("convertions_count"),
  convertionsValue: float("convertions_value"),
  generatedContents: int("generated_contents").default(0).notNull(),
  convertionsRegisteredCount: float("convertions_registered_count"),
  convertionsRegisteredValue: float("convertions_registered_value"),
  convertionsCommissionToReceive: float("convertions_commission_to_receive")
});

// src/databases/mysql/influencers/schema.ts
var schema_exports2 = {};
__export(schema_exports2, {
  blockedtags: () => blockedtags,
  blockedusers: () => blockedusers,
  deletedProfiles: () => deletedProfiles,
  facebookDataDeletionRequests: () => facebookDataDeletionRequests,
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
import { sql as sql2 } from "drizzle-orm";
import { bigint as bigint2, char as char2, date as date2, datetime as datetime2, decimal, double, float as float2, index as index2, int as int2, mysqlEnum as mysqlEnum2, mysqlTable as mysqlTable2, mysqlView, primaryKey as primaryKey2, text as text2, timestamp, tinyint as tinyint2, unique as unique2, varchar as varchar2 } from "drizzle-orm/mysql-core";
var blockedtags = mysqlTable2(
  "blockedtags",
  {
    id: int2().autoincrement().notNull(),
    tag: varchar2({ length: 20 })
  },
  (table) => {
    return {
      blockedtagsId: primaryKey2({ columns: [table.id], name: "blockedtags_id" }),
      tag: unique2("tag").on(table.tag)
    };
  }
);
var blockedusers = mysqlTable2(
  "blockedusers",
  {
    profileId: varchar2({ length: 36 }).notNull().references(() => profiles.id),
    whitelabel: varchar2({ length: 24 }).default("-").notNull(),
    organization: varchar2({ length: 24 }).default("-").notNull(),
    reason: varchar2({ length: 255 }).notNull(),
    responsibleId: varchar2({ length: 255 }).notNull(),
    responsibleFullName: varchar2({ length: 255 }).notNull(),
    unregistered: tinyint2().default(0).notNull(),
    createdAt: datetime2({ mode: "date" }).notNull(),
    updatedAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    logstashProcessedAt: datetime2({ mode: "date" }),
    deletedAt: datetime2({ mode: "date" }),
    campaignId: varchar2({ length: 255 }),
    campaignName: varchar2({ length: 255 })
  },
  (table) => {
    return {
      blockedusersProfileIdWhitelabel: primaryKey2({ columns: [table.profileId, table.whitelabel], name: "blockedusers_profileId_whitelabel" })
    };
  }
);
var deletedProfiles = mysqlTable2(
  "deletedProfiles",
  {
    id: int2().autoincrement().notNull(),
    profileId: varchar2({ length: 50 }).notNull(),
    community: varchar2({ length: 255 }),
    motivation: varchar2({ length: 255 }).notNull(),
    deletionDate: date2({ mode: "date" }).notNull(),
    email: varchar2({ length: 255 }),
    document: varchar2({ length: 45 }),
    recordEmployment: varchar2({ length: 50 }),
    createdAt: date2({ mode: "date" }),
    updatedAt: date2({ mode: "date" })
  },
  (table) => {
    return {
      deletedProfilesId: primaryKey2({ columns: [table.id], name: "deletedProfiles_id" })
    };
  }
);
var facebookTokens = mysqlTable2(
  "facebookTokens",
  {
    profileId: varchar2({ length: 50 }).notNull(),
    createdAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`),
    updatedAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`),
    valid: tinyint2(),
    expiresAt: datetime2({ mode: "date" }),
    status: varchar2({ length: 1e3 }),
    permanentToken: varchar2({ length: 512 }),
    accessToken: varchar2({ length: 512 }),
    sevenDaysNotified: tinyint2(),
    expiredTokenNotified: tinyint2(),
    instagramBusinessId: varchar2({ length: 30 }),
    facebookPageId: varchar2({ length: 30 }),
    facebookUserId: varchar2({ length: 30 })
  },
  (table) => {
    return {
      // validIdx: index().on(table.valid),
      notificationIdx: index2("notification_index").on(table.valid, table.expiredTokenNotified, table.sevenDaysNotified, table.expiresAt),
      instagramBusinessIdIdx: index2("facebookTokens_instagramBusinessId_IDX").on(table.instagramBusinessId),
      facebookTokensProfileId: primaryKey2({ columns: [table.profileId], name: "facebookTokens_profileId" })
    };
  }
);
var facebookTokensMetadata = mysqlTable2(
  "facebookTokensMetadata",
  {
    instagramBusinessAccountId: varchar2({ length: 50 }).notNull().references(() => facebookTokens.profileId, { onDelete: "cascade", onUpdate: "cascade" }),
    createdAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`),
    updatedAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)`),
    checkResult: varchar2({ length: 20 }),
    validationCode: varchar2({ length: 100 }),
    facebookDataFetchDetails: text2(),
    facebookValidateDetails: text2(),
    tokenType: varchar2({ length: 50 }),
    userAccessToken: varchar2({ length: 255 })
  },
  (table) => {
    return {
      facebookTokensMetadataProfileId: primaryKey2({ columns: [table.instagramBusinessAccountId], name: "facebookTokensMetadata_instagramBusinessAccountId" }),
      idxInstagramBusinessAccount: index2("idx_instagram_business_account").on(table.instagramBusinessAccountId),
      idxCreatedAt: index2("idx_created_at").on(table.createdAt),
      idxcheckResult: index2("idx_check_result").on(table.checkResult)
    };
  }
);
var facebookTokensHistory = mysqlTable2(
  "facebookTokensHistory",
  {
    instagramBusinessAccountId: varchar2({ length: 50 }).notNull().references(() => facebookTokens.profileId, { onDelete: "cascade", onUpdate: "cascade" }),
    createdAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`),
    updatedAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)`),
    oldStatus: varchar2({ length: 20 }),
    newStatus: varchar2({ length: 20 }),
    updateReason: varchar2({ length: 250 })
  },
  (table) => {
    return {
      facebookTokensHistoryProfileId: primaryKey2({ columns: [table.instagramBusinessAccountId], name: "facebookTokensHistory_instagramBusinessAccountId" }),
      idxInstagramBusinessAccount: index2("idx_instagram_business_account").on(table.instagramBusinessAccountId),
      idxCreatedAt: index2("idx_created_at").on(table.createdAt),
      idxUpdateReason: index2("idx_update_reason").on(table.updateReason)
    };
  }
);
var facebookDataDeletionRequests = mysqlTable2("facebookDataDeletionRequests", {
  profileId: varchar2("profileId", { length: 50 }).notNull().references(() => instagramProfiles.id, { onUpdate: "cascade" }),
  facebookUserId: varchar2("facebookUserId", { length: 30 }).notNull().references(() => instagramProfiles.facebookUserId, { onUpdate: "cascade" }),
  deletionDate: datetime2({ mode: "date" }),
  hasCampaignHistory: tinyint2().default(0),
  metaRequestDate: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`),
  updatedAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)`)
}, (table) => ({
  unique: unique2("unique_facebook_deletion").on(table.profileId, table.metaRequestDate)
}));
var genders = mysqlTable2(
  "genders",
  {
    id: int2().autoincrement().notNull(),
    description: varchar2({ length: 50 }).notNull(),
    descriptionEn: varchar2("description_en", { length: 50 }).notNull(),
    descriptionEs: varchar2("description_es", { length: 255 })
  },
  (table) => {
    return {
      gendersId: primaryKey2({ columns: [table.id], name: "genders_id" })
    };
  }
);
var googleTokens = mysqlTable2(
  "googleTokens",
  {
    profileId: varchar2({ length: 50 }).notNull(),
    createdAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`),
    updatedAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`),
    valid: tinyint2(),
    expiresAt: datetime2({ mode: "date" }),
    status: varchar2({ length: 1e3 }),
    provider: varchar2({ length: 50 }),
    accessToken: varchar2({ length: 512 }),
    refreshToken: varchar2({ length: 128 }),
    expiresIn: bigint2({ mode: "number" }),
    connection: varchar2({ length: 50 }),
    isSocial: tinyint2(),
    gcloudProject: varchar2({ length: 45 }).default("squid-apis")
  },
  (table) => {
    return {
      // validIdx: index().on(table.valid),
      googleTokensProfileId: primaryKey2({ columns: [table.profileId], name: "googleTokens_profileId" })
    };
  }
);
var idInstagramUpdate = mysqlTable2("idInstagramUpdate", {
  id: varchar2({ length: 100 })
});
var influencerMetrics = mysqlTable2(
  "influencer_metrics",
  {
    name: varchar2({ length: 200 }).notNull(),
    value: float2(),
    date: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`),
    id: varchar2({ length: 100 }).notNull(),
    socialNetwork: varchar2({ length: 100 }).notNull(),
    observation: varchar2({ length: 200 }),
    type: mysqlEnum2(["facebook", "tiktok", "twitter", "youtube"]),
    createdAt: datetime2({ mode: "date" }),
    updatedAt: datetime2({ mode: "date" })
  },
  (table) => {
    return {
      dateIdx: index2("influencer_metrics_date_IDX").on(table.date),
      influencerMetricsIdSocialNetworkName: primaryKey2({ columns: [table.id, table.socialNetwork, table.name], name: "influencer_metrics_id_socialNetwork_name" })
    };
  }
);
var instagramProfiles = mysqlTable2(
  "instagramProfiles",
  {
    id: varchar2({ length: 50 }).notNull(),
    username: varchar2({ length: 255 }),
    exists: tinyint2().default(1).notNull(),
    searchable: tinyint2().default(1).notNull(),
    macro: tinyint2().default(0),
    notSearchReason: varchar2({ length: 255 }),
    brandUser: tinyint2().default(0).notNull(),
    picture: text2(),
    fullName: varchar2({ length: 255 }),
    email: varchar2({ length: 255 }),
    bio: text2(),
    website: varchar2({ length: 255 }),
    language: varchar2({ length: 10 }),
    isBusiness: tinyint2().default(0).notNull(),
    isWorkAccount: tinyint2(),
    hasSkip: tinyint2(),
    facebookUserId: varchar2({ length: 30 }),
    facebookPageId: varchar2({ length: 30 }),
    instagramBusinessId: varchar2({ length: 30 }),
    scrapperEngagementRate: float2().notNull(),
    engagementRate: float2(),
    totalMedias: int2().default(0).notNull(),
    medias: int2().default(0).notNull(),
    followers: int2().default(0).notNull(),
    follows: int2().default(0).notNull(),
    likes: int2().default(0).notNull(),
    comments: int2().default(0).notNull(),
    tier: varchar2({ length: 45 }).default("undefined").notNull(),
    createdAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    logstashProcessedAt: datetime2({ mode: "date" }),
    score: float2(),
    score1: float2(),
    score2: float2(),
    score3: float2(),
    score4: float2(),
    score5: float2(),
    storiesEngagementRate: float2(),
    postEffectiveReach: float2(),
    storiesEffectiveReach: float2(),
    profileViews: int2(),
    hasMediaKit: tinyint2().default(0),
    categorizedAt: datetime2({ mode: "date" }),
    averageComments: float2().notNull(),
    averageCommentsImage: float2().notNull(),
    averageCommentsVideo: float2().notNull(),
    averageCommentsCarousel: float2().notNull(),
    averageLikes: float2().notNull(),
    averageLikesImage: float2().notNull(),
    averageLikesVideo: float2().notNull(),
    averageLikesCarousel: float2().notNull(),
    commentLikesRate: float2().notNull(),
    commentsRate: float2().notNull(),
    totalStoriesImpressions: float2(),
    totalStoriesReach: float2(),
    totalStoriesReplies: float2(),
    totalStoriesTapBacks: float2(),
    totalStoriesTapFowardExits: float2().notNull(),
    totalPostsReach: float2(),
    totalPostsSaves: float2(),
    totalPostsImpressions: float2(),
    averageSaved: float2().notNull(),
    averageSavedImage: float2().notNull(),
    averageSavedVideo: float2().notNull(),
    averageSavedCarousel: float2().notNull(),
    averageTapBacks: float2().notNull(),
    averageTapBacksImage: float2().notNull(),
    averageTapBacksVideo: float2().notNull(),
    averageReplies: float2().notNull(),
    averageRepliesImage: float2().notNull(),
    averageRepliesVideo: float2().notNull(),
    averageTapFowardExits: float2().notNull(),
    averageTapFowardExitsImage: float2().notNull(),
    averageTapFowardExitsVideo: float2().notNull(),
    completeVideoStoriesRate: float2().notNull(),
    numberPostsActivityScore: float2(),
    numberStoriesScore: float2(),
    daysPostsScore: float2(),
    daysStoriesScore: float2(),
    advertisingPostsEngagementRate: float2(),
    noAdvertisingPostsEngagementRate: float2(),
    advertisingStoriesEngagementRate: float2(),
    noAdvertisingStoriesEngagementRate: float2(),
    advertisingContentPercentage: float2(),
    advertisingPostsPercentage: float2(),
    advertisingStoriesPercentage: float2(),
    postImageEngagementRate: float2(),
    postCarouselEngagementRate: float2(),
    postVideoEngagementRate: float2(),
    storiesVideoEngagementRate: float2(),
    storiesImageEngagementRate: float2(),
    storiesCompleteEngagementRate: float2(),
    averagePostsReach: float2().notNull(),
    averagePostsImpressions: float2().notNull(),
    averagePostsFrequency: float2().notNull(),
    averageStoriesReach: float2().notNull(),
    averageStoriesImpressions: float2().notNull(),
    averageStoriesFrequency: float2().notNull(),
    adPostPermanceEngagementRate: float2(),
    adStoriesPermanceEngagementRate: float2(),
    identifyAt: datetime2({ mode: "date" }),
    estimateMetric: tinyint2().default(0),
    totalReels: float2(),
    totalReachReels: float2(),
    reelsEffectiveReach: float2(),
    totalPlaysReels: float2(),
    averagePlaysReels: float2(),
    totalEngagementReels: float2(),
    reelsEngagementRate: float2(),
    averageLikesReels: float2(),
    averageCommentsReels: float2(),
    averageSavesReels: float2(),
    hasMediaBoost: tinyint2().default(0).notNull(),
    statusUidMigration: varchar2({ length: 255 }).default("Not processed"),
    oldIgId: varchar2({ length: 50 }),
    postCpm: float2(),
    storySequenceCpm: float2(),
    reelCpm: float2(),
    cache: float2(),
    postValue: float2(),
    storySequenceValue: float2(),
    reelValue: float2(),
    medianPostsReach: float2(),
    medianPostsSaves: float2(),
    medianPostsImpressions: float2(),
    medianStoriesImpressions: float2(),
    medianStoriesReach: float2(),
    medianStoriesReplies: float2(),
    medianStoriesTapBacks: float2(),
    medianStoriesTapFowardExits: float2(),
    medianReachReels: float2(),
    medianPlaysReels: float2(),
    medianEngagementReels: float2(),
    outdatedMetrics: tinyint2().default(0),
    medianComments: float2(),
    medianLikes: float2(),
    insertOrigin: varchar2({ length: 50 }),
    fullProfileProcess: tinyint2().default(0),
    totalReelsLikes: float2(),
    totalReelsComments: float2(),
    totalReelsSaves: float2(),
    userProfileViews: float2(),
    userPostsEngagementRateByImpressions: float2(),
    userReelsEngagementRateByImpressions: float2(),
    userStoriesEngagementRateByImpressions: float2(),
    userPostsEngagementRateByFollowers: float2(),
    userReelsEngagementRateByFollowers: float2(),
    userStoriesEngagementRateByFollowers: float2(),
    userStoriesEffectiveReach: float2(),
    userPostsEffectiveReach: float2(),
    userReelsEffectiveReach: float2(),
    userTotalPosts: float2(),
    userTotalReels: float2(),
    userTotalStories: float2(),
    userAvgPostsReach: float2(),
    userAvgReelsReach: float2(),
    userAvgStoriesReach: float2(),
    userAvgPostsImpressions: float2(),
    userAvgStoriesImpressions: float2(),
    userAvgReelsPlays: float2(),
    userAvgPostsEngagement: float2(),
    userAvgReelsEngagement: float2(),
    userAvgStoriesEngagement: float2(),
    userAvgPostsLikes: float2(),
    userAvgReelsLikes: float2(),
    userAvgStoriesLikes: float2(),
    userAvgPostsComments: float2(),
    userAvgReelsComments: float2(),
    userAvgStoriesReplies: float2(),
    userAvgPostsShares: float2(),
    userAvgReelsShares: float2(),
    userAvgStoriesShares: float2(),
    userAvgPostsSaves: float2(),
    userAvgReelsSaves: float2(),
    userPostsCpm: float2(),
    userStoriesCpm: float2(),
    userReelsCpm: float2(),
    storiesCpm: float2(),
    storiesValue: float2(),
    profileDescription: varchar2({ length: 255 }),
    hasCreatorsInsights: tinyint2(),
    isSharedCreatorsInsights: tinyint2().default(0)
  },
  (table) => {
    return {
      usernameIdx: index2("username_index").on(table.username),
      idxInstagramProfilesFacebookUserId: index2("idx_instagramProfiles_facebookUserId").on(table.facebookUserId),
      oldIgIdIdx: index2("instagramProfiles_oldIgId_IDX").on(table.oldIgId),
      instagramProfilesId: primaryKey2({ columns: [table.id], name: "instagramProfiles_id" })
    };
  }
);
var locations = mysqlTable2(
  "locations",
  {
    id: bigint2({ mode: "number" }).notNull(),
    name: varchar2({ length: 255 }).notNull(),
    latitude: decimal({ precision: 9, scale: 6 }).notNull(),
    longitude: decimal({ precision: 9, scale: 6 }).notNull(),
    createdAt: datetime2({ mode: "date" }).notNull(),
    updatedAt: datetime2({ mode: "date" }).notNull()
  },
  (table) => {
    return {
      locationsId: primaryKey2({ columns: [table.id], name: "locations_id" })
    };
  }
);
var notSearchableUsers = mysqlTable2(
  "notSearchableUsers",
  {
    id: varchar2({ length: 45 }).notNull(),
    username: varchar2({ length: 45 }),
    reasons: varchar2({ length: 45 }).notNull(),
    socialNetwork: varchar2({ length: 45 }).notNull(),
    createdAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    tags: varchar2({ length: 255 }),
    followers: int2(),
    engagement: float2()
  },
  (table) => {
    return {
      notSearchableUsersId: primaryKey2({ columns: [table.id], name: "notSearchableUsers_id" })
    };
  }
);
var pinterestProfiles = mysqlTable2(
  "pinterestProfiles",
  {
    id: varchar2({ length: 50 }).notNull(),
    squidId: varchar2({ length: 36 }),
    username: varchar2({ length: 255 }).default("Processando").notNull(),
    exists: tinyint2().default(1).notNull(),
    isPartner: tinyint2().default(1).notNull(),
    picture: varchar2({ length: 255 }).default("Processando").notNull(),
    fullName: varchar2({ length: 255 }),
    about: text2(),
    since: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    engagementRate: float2().notNull(),
    reach: int2().default(0).notNull(),
    totalPins: int2().default(0).notNull(),
    followers: int2().default(0).notNull(),
    identificationPins: int2().default(0).notNull(),
    identificationImpressions: int2().default(0).notNull(),
    identificationSaves: int2().default(0).notNull(),
    identificationClicks: int2().default(0).notNull(),
    identificationCloseups: int2().default(0).notNull(),
    identificationComments: int2().default(0).notNull(),
    selfToken: tinyint2().default(1).notNull(),
    createdAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      pinterestProfilesId: primaryKey2({ columns: [table.id], name: "pinterestProfiles_id" }),
      squidId: unique2("squidId").on(table.squidId)
    };
  }
);
var profileAdditionalInfoBanks = mysqlTable2(
  "profileAdditionalInfoBanks",
  {
    id: int2().autoincrement().notNull(),
    profileId: varchar2({ length: 36 }).notNull(),
    bankCode: varchar2({ length: 10 }),
    bankName: varchar2({ length: 100 }).notNull(),
    bankAccountNumber: varchar2({ length: 50 }),
    bankAccountDigit: varchar2({ length: 5 }),
    bankAccountAgency: varchar2({ length: 11 }),
    bankAccountType: mysqlEnum2(["savings", "checking"]),
    bankOperationCode: varchar2({ length: 10 }),
    holderDocument: varchar2({ length: 15 }),
    holderOpeningDate: date2({ mode: "date" }),
    holderName: varchar2({ length: 150 }),
    holderTradingName: varchar2({ length: 150 }),
    isPersonAccount: tinyint2().notNull(),
    createdAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    nationalDocument: varchar2({ length: 50 }),
    recordEmployment: varchar2({ length: 50 }),
    companyName: varchar2({ length: 150 }),
    fantasyName: varchar2({ length: 100 }),
    companyOpeningDate: date2({ mode: "date" }),
    typeOfBusiness: varchar2({ length: 150 }),
    paymentType: mysqlEnum2("paymentType", ["nf", "rpa"]).notNull(),
    companyUf: varchar2({ length: 2 }),
    companyCity: varchar2({ length: 100 }),
    companyLegalNature: varchar2({ length: 100 }),
    companyDocument: varchar2({ length: 50 }),
    bankAccountAgencyDigit: varchar2({ length: 15 }),
    verificationStatus: float2(),
    verificationId: char2({ length: 36 }),
    verificatedAt: datetime2({ mode: "date" })
  },
  (table) => {
    return {
      profileAdditionalInfoBanksId: primaryKey2({ columns: [table.id], name: "profileAdditionalInfoBanks_id" }),
      profileIdUnique: unique2("profileId_UNIQUE").on(table.profileId),
      profileId: unique2("profileId").on(table.profileId, table.bankCode, table.bankAccountNumber)
    };
  }
);
var profileAdditionalInfos = mysqlTable2(
  "profileAdditionalInfos",
  {
    profileId: varchar2({ length: 36 }).notNull().references(() => profiles.id),
    loginUid: varchar2({ length: 45 }),
    email: varchar2({ length: 255 }).notNull(),
    document: varchar2({ length: 50 }),
    name: varchar2({ length: 255 }).notNull(),
    blog: varchar2({ length: 255 }),
    birthday: date2({ mode: "date" }).notNull(),
    gender: char2({ length: 1 }),
    phone: varchar2({ length: 25 }),
    zipcode: varchar2({ length: 15 }),
    address: varchar2({ length: 255 }),
    addressNumber: varchar2({ length: 150 }),
    complement: varchar2({ length: 255 }),
    city: varchar2({ length: 255 }),
    neighborhood: varchar2({ length: 255 }),
    uf: varchar2({ length: 255 }),
    country: varchar2({ length: 255 }).default("BR"),
    lat: double(),
    lng: double(),
    registeredFromSource: varchar2({ length: 255 }),
    registeredFromCampaign: varchar2({ length: 255 }),
    registeredFromMedium: varchar2({ length: 255 }),
    createdAt: datetime2({ mode: "date" }).notNull(),
    updatedAt: datetime2({ mode: "date" }).notNull(),
    allowSms: tinyint2().default(0),
    allowWhatsapp: tinyint2().default(1),
    allowSuggestionEmail: tinyint2().default(1),
    isPersonAccount: tinyint2().notNull(),
    documentType: varchar2({ length: 13 }).notNull(),
    hasSkip: tinyint2().default(0),
    language: varchar2({ length: 10 }).default("pt-br").notNull(),
    phoneValid: tinyint2().default(0),
    phoneValidCode: varchar2({ length: 15 }),
    phoneValidCodeCreatedAt: datetime2({ mode: "date" }),
    race: int2(),
    registeredFromAdId: varchar2({ length: 255 }),
    registeredFromContent: varchar2({ length: 255 }),
    registeredFromAdName: varchar2({ length: 255 }),
    portalRegistration: tinyint2().default(0),
    agent: tinyint2().default(0),
    showWarning: tinyint2().default(0),
    scenario: varchar2({ length: 10 }),
    updateAddress: tinyint2(),
    nationality: varchar2({ length: 255 }),
    allowBrandLovers: tinyint2().default(1),
    allowAffiliates: tinyint2().default(1),
    allowResearch: tinyint2().default(1),
    allowEmail: tinyint2().default(1),
    socialName: varchar2({ length: 50 }),
    descriptionCreatorsInsights: varchar2({ length: 255 }),
    recruitmentSyncedAt: datetime2({ mode: "date" })
  },
  (table) => {
    return {
      profileAdditionalInfosProfileId: primaryKey2({ columns: [table.profileId], name: "profileAdditionalInfos_profileId" }),
      emailUnique: unique2("EMAIL_UNIQUE").on(table.email),
      auth0: unique2("AUTH0").on(table.loginUid)
    };
  }
);
var profileAdditionalInfosOld = mysqlTable2(
  "profileAdditionalInfos_old",
  {
    profileId: varchar2({ length: 36 }).notNull().references(() => profiles.id),
    document: varchar2({ length: 50 }),
    name: varchar2({ length: 255 }).notNull(),
    email: varchar2({ length: 255 }).notNull(),
    blog: varchar2({ length: 255 }),
    birthday: date2({ mode: "date" }).notNull(),
    gender: char2({ length: 3 }).notNull(),
    phone: varchar2({ length: 25 }).notNull(),
    zipcode: varchar2({ length: 15 }).notNull(),
    address: varchar2({ length: 255 }).notNull(),
    addressNumber: varchar2({ length: 255 }),
    complement: varchar2({ length: 255 }),
    city: varchar2({ length: 255 }).notNull(),
    neighborhood: varchar2({ length: 255 }),
    uf: varchar2({ length: 255 }).default("").notNull(),
    country: varchar2({ length: 255 }).default("BR"),
    registeredFromSource: varchar2({ length: 255 }),
    registeredFromCampaign: varchar2({ length: 255 }),
    registeredFromMedium: varchar2({ length: 255 }),
    createdAt: datetime2({ mode: "date" }).notNull(),
    updatedAt: datetime2({ mode: "date" }).notNull(),
    allowSms: tinyint2().default(0),
    allowWhatsapp: tinyint2().default(1),
    allowSuggestionEmail: tinyint2().default(1),
    isPersonAccount: tinyint2().notNull(),
    documentType: varchar2({ length: 13 }).default("CPF").notNull(),
    hasSkip: tinyint2().default(0),
    auth0: varchar2({ length: 45 }),
    language: varchar2({ length: 5 }).default("pt-br").notNull(),
    phoneValid: tinyint2().default(0),
    phoneValidCode: varchar2({ length: 15 }),
    phoneValidCodeCreatedAt: datetime2({ mode: "date" }),
    race: int2(),
    registeredFromAdId: varchar2({ length: 255 }),
    registeredFromContent: varchar2({ length: 255 }),
    registeredFromAdName: varchar2({ length: 255 }),
    portalRegistration: tinyint2().default(0),
    agent: tinyint2().default(0)
  },
  (table) => {
    return {
      profileAdditionalInfosOldProfileId: primaryKey2({ columns: [table.profileId], name: "profileAdditionalInfos_old_profileId" }),
      emailUnique: unique2("EMAIL_UNIQUE").on(table.email)
    };
  }
);
var profileAdditionalInfosWhitelabels = mysqlTable2(
  "profileAdditionalInfos_whitelabels",
  {
    profileId: varchar2({ length: 36 }).notNull(),
    whitelabel: varchar2({ length: 24 }).default("-").notNull(),
    organization: varchar2({ length: 24 }).default("-").notNull(),
    auth0: varchar2({ length: 45 }),
    communityId: varchar2("community_id", { length: 45 }),
    email: varchar2({ length: 255 }).notNull(),
    document: varchar2({ length: 50 }).notNull(),
    name: varchar2({ length: 255 }).notNull(),
    blog: varchar2({ length: 255 }),
    birthday: date2({ mode: "date" }).notNull(),
    gender: char2({ length: 1 }),
    phone: varchar2({ length: 25 }).notNull(),
    zipcode: varchar2({ length: 15 }),
    address: varchar2({ length: 255 }),
    addressNumber: varchar2({ length: 150 }),
    complement: varchar2({ length: 255 }),
    city: varchar2({ length: 255 }),
    neighborhood: varchar2({ length: 255 }),
    uf: varchar2({ length: 255 }),
    country: varchar2({ length: 255 }).default("BR"),
    nationality: varchar2({ length: 255 }),
    registeredFromSource: varchar2({ length: 255 }),
    registeredFromCampaign: varchar2({ length: 255 }),
    registeredFromMedium: varchar2({ length: 255 }),
    createdAt: datetime2({ mode: "date" }).notNull(),
    updatedAt: datetime2({ mode: "date" }).notNull(),
    allowSms: tinyint2().default(0),
    allowWhatsapp: tinyint2().default(1),
    allowSuggestionEmail: tinyint2().default(1),
    isPersonAccount: tinyint2().notNull(),
    documentType: varchar2({ length: 13 }).notNull(),
    hasSkip: tinyint2().default(0),
    language: varchar2({ length: 10 }).default("pt-br").notNull(),
    phoneValid: tinyint2().default(0),
    phoneValidCode: varchar2({ length: 15 }),
    phoneValidCodeCreatedAt: datetime2({ mode: "date" }),
    race: int2(),
    registeredFromAdId: varchar2({ length: 255 }),
    registeredFromContent: varchar2({ length: 255 }),
    registeredFromAdName: varchar2({ length: 255 }),
    portalRegistration: tinyint2().default(0),
    agent: tinyint2().default(0),
    showWarning: tinyint2().default(0)
  },
  (table) => {
    return {
      profileAdditionalInfosWhitelabelsProfileIdWhitelabel: primaryKey2({ columns: [table.profileId, table.whitelabel], name: "profileAdditionalInfos_whitelabels_profileId_whitelabel" }),
      emailUnique: unique2("EMAIL_UNIQUE").on(table.email, table.whitelabel),
      auth0: unique2("AUTH0").on(table.auth0)
    };
  }
);
var profileCategories = mysqlTable2(
  "profileCategories",
  {
    id: int2().autoincrement().notNull(),
    parentId: int2(),
    description: varchar2({ length: 50 }).default("").notNull(),
    descriptionEn: varchar2("description_en", { length: 255 }).notNull(),
    descriptionEs: varchar2("description_es", { length: 255 }),
    emoji: text2(),
    percentageBase: float2("percentage_base"),
    cacheVariation: float2("cache_variation").default(1)
  },
  (table) => {
    return {
      profileCategoriesId: primaryKey2({ columns: [table.id], name: "profileCategories_id" }),
      description: unique2("description").on(table.description)
    };
  }
);
var profileWhitelabels = mysqlTable2(
  "profileWhitelabels",
  {
    id: varchar2({ length: 36 }).notNull(),
    profileId: varchar2({ length: 36 }).notNull().references(() => profiles.id, { onUpdate: "cascade" }),
    whitelabel: varchar2({ length: 24 }),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    registeredFromSource: varchar2({ length: 255 }),
    registeredFromCampaign: varchar2({ length: 255 }),
    registeredFromMedium: varchar2({ length: 255 }),
    registeredFromContent: varchar2({ length: 255 }),
    registeredFromAdId: varchar2({ length: 255 }),
    registeredFromAdName: varchar2({ length: 255 })
  },
  (table) => {
    return {
      index3: index2("profileWhitelabels_index_3").on(table.whitelabel),
      profileWhitelabelsId: primaryKey2({ columns: [table.id], name: "profileWhitelabels_id" })
    };
  }
);
var profiles = mysqlTable2(
  "profiles",
  {
    id: varchar2({ length: 36 }).notNull(),
    createdAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    deletedNetworks: varchar2({ length: 100 }),
    deletedAt: datetime2({ mode: "date" })
  },
  (table) => {
    return {
      id: index2("id").on(table.id),
      profilesId: primaryKey2({ columns: [table.id], name: "profiles_id" })
    };
  }
);
var progressiveRegistrationAnswers = mysqlTable2(
  "progressive_registration_answers",
  {
    id: varchar2({ length: 36 }).notNull(),
    question: varchar2({ length: 36 }).notNull().references(() => progressiveRegistrationQuestions.id, { onDelete: "cascade" }),
    squidId: varchar2({ length: 50 }).notNull().references(() => profiles.id),
    answer: varchar2({ length: 255 }),
    answerOption: varchar2("answer_option", { length: 36 }).references(() => progressiveRegistrationQuestionOptions.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: timestamp("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      fkProgressiveRegistrationIdx1: index2("fk_progressive_registration_idx1").on(table.question),
      fkProgressiveRegistrationIdx2: index2("fk_progressive_registration_idx2").on(table.squidId),
      answersIdx: index2("answers_idx").on(table.id),
      progressiveRegistrationAnswersId: primaryKey2({ columns: [table.id], name: "progressive_registration_answers_id" }),
      id: unique2("id").on(table.id)
    };
  }
);
var progressiveRegistrationGroups = mysqlTable2(
  "progressive_registration_groups",
  {
    id: varchar2({ length: 36 }).notNull(),
    label: varchar2({ length: 36 }).notNull().references(() => progressiveRegistrationLabels.id, { onDelete: "cascade", onUpdate: "cascade" }),
    icon: varchar2({ length: 255 }).default("poll-people").notNull(),
    order: int2().default(1).notNull(),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: timestamp("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      label: index2("LABEL").on(table.label),
      groupIdx: index2("group_idx").on(table.id),
      progressiveRegistrationGroupsId: primaryKey2({ columns: [table.id], name: "progressive_registration_groups_id" }),
      id: unique2("id").on(table.id)
    };
  }
);
var progressiveRegistrationLabels = mysqlTable2(
  "progressive_registration_labels",
  {
    id: varchar2({ length: 36 }).notNull(),
    pt: varchar2({ length: 255 }),
    en: varchar2({ length: 255 }),
    es: varchar2({ length: 255 }),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: timestamp("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      labelIdx: index2("label_idx").on(table.id),
      progressiveRegistrationLabelsId: primaryKey2({ columns: [table.id], name: "progressive_registration_labels_id" }),
      id: unique2("id").on(table.id)
    };
  }
);
var progressiveRegistrationQuestionOptions = mysqlTable2(
  "progressive_registration_question_options",
  {
    id: varchar2({ length: 36 }).notNull(),
    question: varchar2({ length: 255 }).notNull().references(() => progressiveRegistrationQuestions.id, { onDelete: "cascade" }),
    label: varchar2({ length: 36 }).notNull().references(() => progressiveRegistrationLabels.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: timestamp("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      fkProgressiveRegistrationQuestionOptionsProgressiveReIdx: index2("fk_progressive_registration_question_options_progressive_re_idx").on(table.question),
      label: index2("label").on(table.label),
      optionsIdx: index2("options_idx").on(table.id),
      progressiveRegistrationQuestionOptionsId: primaryKey2({ columns: [table.id], name: "progressive_registration_question_options_id" }),
      id: unique2("id").on(table.id)
    };
  }
);
var progressiveRegistrationQuestions = mysqlTable2(
  "progressive_registration_questions",
  {
    id: varchar2({ length: 36 }).notNull(),
    label: varchar2({ length: 36 }).notNull().references(() => progressiveRegistrationLabels.id, { onDelete: "cascade" }),
    type: varchar2({ length: 255 }).default("text").notNull(),
    group: varchar2({ length: 255 }).notNull().references(() => progressiveRegistrationGroups.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: timestamp("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      fkProgressiveRegistrationQuestionsProgressiveRegistratIdx: index2("fk_progressive_registration_questions_progressive_registrat_idx").on(table.group),
      label: index2("LABEL").on(table.label),
      questionsIdx: index2("questions_idx").on(table.id),
      progressiveRegistrationQuestionsId: primaryKey2({ columns: [table.id], name: "progressive_registration_questions_id" }),
      id: unique2("id").on(table.id)
    };
  }
);
var progressiveRegistrationWhitelabels = mysqlTable2(
  "progressive_registration_whitelabels",
  {
    whitelabel: varchar2({ length: 24 }).default("hub").notNull(),
    question: varchar2({ length: 255 }).notNull().references(() => progressiveRegistrationQuestions.id, { onDelete: "cascade", onUpdate: "cascade" }),
    group: varchar2({ length: 255 }).notNull().references(() => progressiveRegistrationGroups.id, { onDelete: "cascade" }),
    active: tinyint2().default(0).notNull(),
    order: int2().default(1).notNull(),
    required: tinyint2().default(0).notNull(),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: timestamp("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      fkProgressiveRegistrationWhitelabelsProgressiveRegistrIdx: index2("fk_progressive_registration_whitelabels_progressive_registr_idx").on(table.question),
      progressiveRegistrationWhitelabelsWhitelabelQuestionGroup: primaryKey2({ columns: [table.whitelabel, table.question, table.group], name: "progressive_registration_whitelabels_whitelabel_question_group" })
    };
  }
);
var races = mysqlTable2(
  "races",
  {
    id: int2().autoincrement().notNull(),
    description: varchar2({ length: 45 }).notNull(),
    descriptionEn: varchar2("description_en", { length: 45 }).notNull(),
    descriptionEs: varchar2("description_es", { length: 255 })
  },
  (table) => {
    return {
      racesId: primaryKey2({ columns: [table.id], name: "races_id" })
    };
  }
);
var scopesToken = mysqlTable2(
  "scopesToken",
  {
    scopeType: varchar2({ length: 64 }).notNull(),
    profileId: varchar2({ length: 50 }).notNull(),
    socialNetwork: varchar2({ length: 45 }).notNull()
  },
  (table) => {
    return {
      scopesTokenScopeTypeProfileIdSocialNetwork: primaryKey2({ columns: [table.scopeType, table.profileId, table.socialNetwork], name: "scopesToken_scopeType_profileId_socialNetwork" })
    };
  }
);
var socialNetworkProfiles = mysqlTable2(
  "socialNetworkProfiles",
  {
    id: varchar2({ length: 50 }).notNull(),
    squidId: varchar2({ length: 36 }).references(() => profiles.id, { onDelete: "cascade", onUpdate: "cascade" }),
    socialNetwork: varchar2({ length: 45 }).notNull(),
    createdAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      socialNetworkProfilesIdSocialNetwork: primaryKey2({ columns: [table.id, table.socialNetwork], name: "socialNetworkProfiles_id_socialNetwork" })
    };
  }
);
var socialNetworkProfilesCache = mysqlTable2(
  "socialNetworkProfilesCache",
  {
    profileId: varchar2({ length: 255 }).notNull(),
    contentType: varchar2({ length: 50 }).notNull(),
    contentValue: decimal({ precision: 10, scale: 2 }),
    createdAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      socialNetworkProfilesCacheProfileIdContentType: primaryKey2({ columns: [table.profileId, table.contentType], name: "socialNetworkProfilesCache_profileId_contentType" }),
      socialNetworkProfilesCacheProfileIdIdx: unique2("socialNetworkProfilesCache_profileId_IDX").on(table.profileId, table.contentType)
    };
  }
);
var socialNetworkProfilesCacheNew = mysqlTable2("socialNetworkProfilesCache_new", {
  profileId: varchar2({ length: 50 }).notNull(),
  contentType: varchar2("ContentType", { length: 100 }).notNull(),
  contentValue: decimal({ precision: 10, scale: 2 }),
  createdAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`),
  updatedAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`)
});
var socialNetworkProfilesCategories = mysqlTable2(
  "socialNetworkProfilesCategories",
  {
    id: int2().autoincrement().notNull(),
    categoryId: int2().notNull().references(() => profileCategories.id, { onUpdate: "cascade" }),
    profileId: varchar2({ length: 50 }).notNull().references(() => socialNetworkProfiles.id, { onUpdate: "cascade" }),
    socialNetwork: varchar2({ length: 45 }).notNull(),
    updatedAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`),
    recruitmentSyncedAt: datetime2({ mode: "date" })
  },
  (table) => {
    return {
      socialNetwork: index2("socialNetwork").on(table.socialNetwork),
      socialNetworkProfilesCategoriesId: primaryKey2({ columns: [table.id], name: "socialNetworkProfilesCategories_id" })
    };
  }
);
var socialNetworkProfilesCategoriesWhitelabels = mysqlTable2(
  "socialNetworkProfilesCategories_whitelabels",
  {
    id: int2().autoincrement().notNull(),
    categoryId: int2(),
    profileId: varchar2({ length: 36 }),
    socialNetwork: varchar2({ length: 45 }),
    whitelabel: varchar2({ length: 24 }),
    organization: varchar2({ length: 24 }),
    updatedAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`)
  },
  (table) => {
    return {
      socialNetworkProfilesCategoriesWhitelabelsId: primaryKey2({ columns: [table.id], name: "socialNetworkProfilesCategories_whitelabels_id" }),
      socialNetworkProfilesCategoriesUn: unique2("socialNetworkProfilesCategories_UN").on(table.categoryId, table.profileId, table.socialNetwork, table.whitelabel, table.organization)
    };
  }
);
var socialNetworkProfilesWhitelabels = mysqlTable2(
  "socialNetworkProfiles_whitelabels",
  {
    id: varchar2({ length: 50 }).notNull(),
    squidId: varchar2({ length: 36 }).references(() => profiles.id),
    socialNetwork: varchar2({ length: 45 }).notNull(),
    whitelabel: varchar2({ length: 24 }).default("-").notNull(),
    organization: varchar2({ length: 24 }).default("-").notNull(),
    createdAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      socialNetworkProfilesWhitelabelsIdSocialNetworkWhitelabel: primaryKey2({ columns: [table.id, table.socialNetwork, table.whitelabel], name: "socialNetworkProfiles_whitelabels_id_socialNetwork_whitelabel" })
    };
  }
);
var stopWords = mysqlTable2(
  "stopWords",
  {
    id: int2().autoincrement().notNull(),
    word: varchar2({ length: 255 }).notNull()
  },
  (table) => {
    return {
      stopWordsId: primaryKey2({ columns: [table.id], name: "stopWords_id" })
    };
  }
);
var tiktokProfiles = mysqlTable2(
  "tiktokProfiles",
  {
    id: varchar2({ length: 50 }).notNull(),
    openId: varchar2({ length: 50 }),
    unionId: varchar2({ length: 50 }),
    exists: tinyint2().default(1),
    verified: tinyint2().default(1),
    username: varchar2({ length: 255 }).default("Processando"),
    nickname: varchar2({ length: 255 }).default("Processando"),
    macro: tinyint2().default(0),
    brandUser: tinyint2().default(0),
    picture: text2(),
    bio: text2(),
    engagementRate: float2(),
    followers: int2().default(0),
    following: int2().default(0),
    likes: float2(),
    averageLikes: float2(),
    comments: float2(),
    averageComments: float2(),
    shares: float2(),
    averageShares: float2(),
    views: float2(),
    averageViews: float2(),
    createdAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    lastPictureUpdatedAt: datetime2({ mode: "date" }),
    tcmStatus: varchar2({ length: 15 }),
    insertOrigin: varchar2({ length: 50 }),
    processAt: datetime2({ mode: "date" }),
    hasCreatorsInsights: tinyint2().default(0),
    isSharedCreatorsInsights: tinyint2().default(0)
  },
  (table) => {
    return {
      usernameIdx: index2("tiktokProfiles_username_IDX").on(table.username),
      processAtIdx: index2("tiktokProfiles_processAt_IDX").on(table.processAt),
      tiktokProfilesId: primaryKey2({ columns: [table.id], name: "tiktokProfiles_id" })
    };
  }
);
var tiktokTokens = mysqlTable2(
  "tiktokTokens",
  {
    profileId: varchar2({ length: 50 }).notNull(),
    valid: tinyint2().default(1),
    status: varchar2({ length: 1e3 }),
    accessToken: varchar2({ length: 512 }),
    refreshToken: varchar2({ length: 128 }),
    expiresAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`),
    createdAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`),
    updatedAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`)
  },
  (table) => {
    return {
      validIdx: index2("tiktokTokens_valid_IDX").on(table.valid),
      tiktokTokensProfileId: primaryKey2({ columns: [table.profileId], name: "tiktokTokens_profileId" })
    };
  }
);
var twitterProfiles = mysqlTable2(
  "twitterProfiles",
  {
    id: varchar2({ length: 50 }).notNull(),
    username: varchar2({ length: 255 }).default("Processando").notNull(),
    fullName: varchar2({ length: 255 }).default("").notNull(),
    picture: varchar2({ length: 255 }).default("Processando").notNull(),
    followers: int2().default(0).notNull(),
    follows: int2().default(0).notNull(),
    bio: text2(),
    createdAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    brandUser: tinyint2().default(0).notNull(),
    exists: tinyint2().default(1).notNull(),
    macro: tinyint2().default(0),
    engagementRate: float2(),
    totalRetweets: float2(),
    totalLikes: float2(),
    totalRetweetsReceived: float2(),
    averageLikes: float2(),
    averageRetweets: float2(),
    totalTweets: float2(),
    averageRepliesByLikes: float2(),
    averageRepliesByTweet: float2(),
    repliesRate: float2(),
    effectiveImpressionReach: float2(),
    averageImpressions: float2(),
    countReplies: int2(),
    adTweetsCount: float2(),
    engagementRateAd: float2(),
    tweetPostAdPerformance: float2(),
    insertOrigin: varchar2({ length: 50 }),
    processAt: datetime2({ mode: "date" }),
    hasCreatorsInsights: tinyint2().default(0)
  },
  (table) => {
    return {
      processAtIdx: index2("twitterProfiles_processAt_IDX").on(table.processAt),
      twitterProfilesId: primaryKey2({ columns: [table.id], name: "twitterProfiles_id" })
    };
  }
);
var twitterTokens = mysqlTable2(
  "twitterTokens",
  {
    profileId: varchar2({ length: 50 }).notNull(),
    createdAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`),
    updatedAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`),
    valid: tinyint2(),
    accessToken: varchar2({ length: 256 }),
    oauthSecretToken: varchar2({ length: 256 }),
    refreshToken: varchar2({ length: 256 }),
    expiresIn: int2().default(0)
  },
  (table) => {
    return {
      valid: index2("twitterTokens_valid").on(table.valid),
      twitterTokensProfileId: primaryKey2({ columns: [table.profileId], name: "twitterTokens_profileId" })
    };
  }
);
var youtubeProfiles = mysqlTable2(
  "youtubeProfiles",
  {
    id: varchar2({ length: 50 }).notNull(),
    googleId: varchar2({ length: 255 }),
    exists: tinyint2().default(1).notNull(),
    searchable: tinyint2().default(1).notNull(),
    notSearchReason: varchar2({ length: 255 }),
    email: varchar2({ length: 255 }),
    channelTitle: varchar2({ length: 255 }).default("Processando").notNull(),
    username: varchar2({ length: 255 }).default("Processando").notNull(),
    picture: varchar2({ length: 255 }).default("Processando").notNull(),
    fullName: varchar2({ length: 255 }),
    description: text2(),
    bio: text2(),
    customUrl: varchar2({ length: 255 }).default("Processando"),
    country: varchar2({ length: 36 }).default("Processando").notNull(),
    since: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    followers: int2().default(0).notNull(),
    subscribers: int2().default(0).notNull(),
    engagementRate: float2(),
    engagementRatePositive: float2(),
    engagementRateNegative: float2(),
    viewsRate: float2(),
    viewsMedian: float2(),
    comments: int2().default(0),
    identificationComments: int2().default(0),
    identificationLikes: int2().default(0),
    identificationDislikes: int2().default(0),
    averageComments: float2(),
    averageLikes: float2(),
    averageDislikes: float2(),
    shares: int2().default(0),
    averageShares: float2(),
    commentLikesRate: float2(),
    commentViewsRate: float2(),
    averageViewsDuration: int2().default(0),
    averageViewPercentage: float2(),
    averageVideoDuration: float2(),
    videoEffectiveReach: float2(),
    videos: int2().default(0),
    identificationVideos: int2().default(0),
    views: bigint2({ mode: "number" }),
    identificationViews: int2().default(0),
    privacyStatus: varchar2({ length: 36 }).default("Processando").notNull(),
    language: varchar2({ length: 36 }),
    createdAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime2({ mode: "date" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    logstashProcessedAt: datetime2({ mode: "date" }),
    macro: tinyint2().default(0),
    brandUser: tinyint2().default(0),
    insertOrigin: varchar2({ length: 50 }),
    processAt: datetime2({ mode: "date" }),
    hasCreatorsInsights: tinyint2().default(0),
    isSharedCreatorsInsights: tinyint2().default(0)
  },
  (table) => {
    return {
      youtuberofilesSearchableIdx: index2("youtuberofiles_searchable_index").on(table.searchable),
      googleIdIdx: index2("youtubeProfiles_googleId_IDX").on(table.googleId),
      processAtIdx: index2("youtubeProfiles_processAt_IDX").on(table.processAt),
      youtubeProfilesId: primaryKey2({ columns: [table.id], name: "youtubeProfiles_id" })
    };
  }
);
var fullInstagramProfileAll = mysqlView("full_instagram_profile_all", {
  id: int2().default(0).notNull(),
  squidid: int2().default(0).notNull(),
  username: int2().default(0).notNull(),
  identifiedat: int2().default(0).notNull(),
  followers: int2().default(0).notNull(),
  following: int2().default(0).notNull(),
  picture: int2().default(0).notNull(),
  engagementrate: int2().default(0).notNull(),
  isbusiness: int2().default(0).notNull(),
  searchable: int2().default(0).notNull(),
  facebooklinked: int2().default(0).notNull(),
  name: int2().default(0).notNull(),
  email: int2().default(0).notNull(),
  birthday: int2().default(0).notNull(),
  gender: int2().default(0).notNull(),
  phone: int2().default(0).notNull(),
  address: int2().default(0).notNull(),
  addressNumber: int2().default(0).notNull(),
  complement: int2().default(0).notNull(),
  city: int2().default(0).notNull(),
  uf: int2().default(0).notNull(),
  zipcode: int2().default(0).notNull(),
  document: int2().default(0).notNull(),
  loginUid: int2().default(0).notNull(),
  recordEmployment: int2().default(0).notNull(),
  isPersonAccount: int2().default(0).notNull(),
  registeredat: int2().default(0).notNull(),
  race: int2().default(0).notNull(),
  blackuser: int2().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql2`select 1 AS \`id\`,1 AS \`squidid\`,1 AS \`username\`,1 AS \`identifiedat\`,1 AS \`followers\`,1 AS \`following\`,1 AS \`picture\`,1 AS \`engagementrate\`,1 AS \`isbusiness\`,1 AS \`searchable\`,1 AS \`facebooklinked\`,1 AS \`name\`,1 AS \`email\`,1 AS \`birthday\`,1 AS \`gender\`,1 AS \`phone\`,1 AS \`address\`,1 AS \`addressNumber\`,1 AS \`complement\`,1 AS \`city\`,1 AS \`uf\`,1 AS \`zipcode\`,1 AS \`document\`,1 AS \`loginUid\`,1 AS \`recordEmployment\`,1 AS \`isPersonAccount\`,1 AS \`registeredat\`,1 AS \`race\`,1 AS \`blackuser\``);
var vwProgressiveRegistrationAnswers = mysqlView("vw_progressive_registration_answers", {
  squidId: int2().default(0).notNull(),
  groupId: int2("group_id").default(0).notNull(),
  groupPt: int2("group_pt").default(0).notNull(),
  groupEn: int2("group_en").default(0).notNull(),
  groupEs: int2("group_es").default(0).notNull(),
  questionId: int2("question_id").default(0).notNull(),
  questionPt: int2("question_pt").default(0).notNull(),
  questionEn: int2("question_en").default(0).notNull(),
  questionEs: int2("question_es").default(0).notNull(),
  questionType: int2("question_type").default(0).notNull(),
  answerOptionId: int2("answer_option_id").default(0).notNull(),
  answerPt: int2("answer_pt").default(0).notNull(),
  answerEs: int2("answer_es").default(0).notNull(),
  answerEn: int2("answer_en").default(0).notNull(),
  answer: int2().default(0).notNull(),
  whitelabel: int2().default(0).notNull(),
  whitelabelQuestionActive: int2("whitelabel_question_active").default(0).notNull(),
  whitelabelQuestionRequired: int2("whitelabel_question_required").default(0).notNull(),
  createdAt: int2("created_at").default(0).notNull(),
  updatedAt: int2("updated_at").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql2`select 1 AS \`squidId\`,1 AS \`group_id\`,1 AS \`group_pt\`,1 AS \`group_en\`,1 AS \`group_es\`,1 AS \`question_id\`,1 AS \`question_pt\`,1 AS \`question_en\`,1 AS \`question_es\`,1 AS \`question_type\`,1 AS \`answer_option_id\`,1 AS \`answer_pt\`,1 AS \`answer_es\`,1 AS \`answer_en\`,1 AS \`answer\`,1 AS \`whitelabel\`,1 AS \`whitelabel_question_active\`,1 AS \`whitelabel_question_required\`,1 AS \`created_at\`,1 AS \`updated_at\``);
var fullInstagramProfile = mysqlView("full_instagram_profile", {
  id: int2().default(0).notNull(),
  squidid: int2().default(0).notNull(),
  username: int2().default(0).notNull(),
  identifiedat: int2().default(0).notNull(),
  followers: int2().default(0).notNull(),
  following: int2().default(0).notNull(),
  engagementrate: int2().default(0).notNull(),
  score: int2().default(0).notNull(),
  isbusiness: int2().default(0).notNull(),
  facebooklinked: int2().default(0).notNull(),
  name: int2().default(0).notNull(),
  email: int2().default(0).notNull(),
  birthday: int2().default(0).notNull(),
  gender: int2().default(0).notNull(),
  phone: int2().default(0).notNull(),
  address: int2().default(0).notNull(),
  complement: int2().default(0).notNull(),
  city: int2().default(0).notNull(),
  uf: int2().default(0).notNull(),
  country: int2().default(0).notNull(),
  zipcode: int2().default(0).notNull(),
  document: int2().default(0).notNull(),
  isPersonAccount: int2().default(0).notNull(),
  registeredat: int2().default(0).notNull(),
  allowSuggestionEmail: int2().default(0).notNull(),
  race: int2().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql2`select 1 AS \`id\`,1 AS \`squidid\`,1 AS \`username\`,1 AS \`identifiedat\`,1 AS \`followers\`,1 AS \`following\`,1 AS \`engagementrate\`,1 AS \`score\`,1 AS \`isbusiness\`,1 AS \`facebooklinked\`,1 AS \`name\`,1 AS \`email\`,1 AS \`birthday\`,1 AS \`gender\`,1 AS \`phone\`,1 AS \`address\`,1 AS \`complement\`,1 AS \`city\`,1 AS \`uf\`,1 AS \`country\`,1 AS \`zipcode\`,1 AS \`document\`,1 AS \`isPersonAccount\`,1 AS \`registeredat\`,1 AS \`allowSuggestionEmail\`,1 AS \`race\``);
var instagramProfileMetrics = mysqlView("instagram_profile_metrics", {
  id: int2().default(0).notNull(),
  squidId: int2().default(0).notNull(),
  username: int2().default(0).notNull(),
  exists: int2().default(0).notNull(),
  searchable: int2().default(0).notNull(),
  followers: int2().default(0).notNull(),
  isBusiness: int2().default(0).notNull(),
  scrapperEngagementRate: int2().default(0).notNull(),
  totalMedias: int2().default(0).notNull(),
  medias: int2().default(0).notNull(),
  follows: int2().default(0).notNull(),
  likes: int2().default(0).notNull(),
  comments: int2().default(0).notNull(),
  tier: int2().default(0).notNull(),
  score: int2().default(0).notNull(),
  score1: int2().default(0).notNull(),
  score2: int2().default(0).notNull(),
  score3: int2().default(0).notNull(),
  score4: int2().default(0).notNull(),
  score5: int2().default(0).notNull(),
  storiesEffectiveReach: int2().default(0).notNull(),
  profileViews: int2().default(0).notNull(),
  hasMediaKit: int2().default(0).notNull(),
  totalStoriesImpressions: int2().default(0).notNull(),
  totalStoriesReach: int2().default(0).notNull(),
  totalStoriesReplies: int2().default(0).notNull(),
  totalStoriesTapBacks: int2().default(0).notNull(),
  totalPostsReach: int2().default(0).notNull(),
  totalPostsSaves: int2().default(0).notNull(),
  totalPostsImpressions: int2().default(0).notNull(),
  numberPostsActivityScore: int2().default(0).notNull(),
  numberStoriesScore: int2().default(0).notNull(),
  daysPostsScore: int2().default(0).notNull(),
  daysStoriesScore: int2().default(0).notNull(),
  advertisingPostsEngagementRate: int2().default(0).notNull(),
  noAdvertisingPostsEngagementRate: int2().default(0).notNull(),
  advertisingStoriesEngagementRate: int2().default(0).notNull(),
  noAdvertisingStoriesEngagementRate: int2().default(0).notNull(),
  advertisingContentPercentage: int2().default(0).notNull(),
  advertisingPostsPercentage: int2().default(0).notNull(),
  advertisingStoriesPercentage: int2().default(0).notNull(),
  postImageEngagementRate: int2().default(0).notNull(),
  postCarouselEngagementRate: int2().default(0).notNull(),
  postVideoEngagementRate: int2().default(0).notNull(),
  storiesVideoEngagementRate: int2().default(0).notNull(),
  storiesImageEngagementRate: int2().default(0).notNull(),
  storiesCompleteEngagementRate: int2().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql2`select 1 AS \`id\`,1 AS \`squidId\`,1 AS \`username\`,1 AS \`exists\`,1 AS \`searchable\`,1 AS \`followers\`,1 AS \`isBusiness\`,1 AS \`scrapperEngagementRate\`,1 AS \`totalMedias\`,1 AS \`medias\`,1 AS \`follows\`,1 AS \`likes\`,1 AS \`comments\`,1 AS \`tier\`,1 AS \`score\`,1 AS \`score1\`,1 AS \`score2\`,1 AS \`score3\`,1 AS \`score4\`,1 AS \`score5\`,1 AS \`storiesEffectiveReach\`,1 AS \`profileViews\`,1 AS \`hasMediaKit\`,1 AS \`totalStoriesImpressions\`,1 AS \`totalStoriesReach\`,1 AS \`totalStoriesReplies\`,1 AS \`totalStoriesTapBacks\`,1 AS \`totalPostsReach\`,1 AS \`totalPostsSaves\`,1 AS \`totalPostsImpressions\`,1 AS \`numberPostsActivityScore\`,1 AS \`numberStoriesScore\`,1 AS \`daysPostsScore\`,1 AS \`daysStoriesScore\`,1 AS \`advertisingPostsEngagementRate\`,1 AS \`noAdvertisingPostsEngagementRate\`,1 AS \`advertisingStoriesEngagementRate\`,1 AS \`noAdvertisingStoriesEngagementRate\`,1 AS \`advertisingContentPercentage\`,1 AS \`advertisingPostsPercentage\`,1 AS \`advertisingStoriesPercentage\`,1 AS \`postImageEngagementRate\`,1 AS \`postCarouselEngagementRate\`,1 AS \`postVideoEngagementRate\`,1 AS \`storiesVideoEngagementRate\`,1 AS \`storiesImageEngagementRate\`,1 AS \`storiesCompleteEngagementRate\``);
var vwInfluencersToValidateBankAccount = mysqlView("VW_INFLUENCERS_TO_VALIDATE_BANK_ACCOUNT", {
  profileId: int2().default(0).notNull(),
  updatedAt: int2().default(0).notNull(),
  verificationStatus: int2().default(0).notNull(),
  verificationId: int2().default(0).notNull(),
  verificatedAt: int2().default(0).notNull(),
  bankName: int2().default(0).notNull(),
  bankCode: int2().default(0).notNull(),
  bankAccountType: int2().default(0).notNull(),
  bankAccountAgency: int2().default(0).notNull(),
  bankAccountNumber: int2().default(0).notNull(),
  bankAccountDigit: int2().default(0).notNull(),
  socialNetwork: int2().default(0).notNull(),
  valid: int2().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql2`select 1 AS \`profileId\`,1 AS \`updatedAt\`,1 AS \`verificationStatus\`,1 AS \`verificationId\`,1 AS \`verificatedAt\`,1 AS \`bankName\`,1 AS \`bankCode\`,1 AS \`bankAccountType\`,1 AS \`bankAccountAgency\`,1 AS \`bankAccountNumber\`,1 AS \`bankAccountDigit\`,1 AS \`socialNetwork\`,1 AS \`valid\``);
var vwInfluencersCanAnticipate = mysqlView("VW_INFLUENCERS_CAN_ANTICIPATE", {
  id: int2().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql2`select 1 AS \`id\``);
var vwProgressiveRegistrationQuestions = mysqlView("vw_progressive_registration_questions", {
  questionId: int2("question_id").default(0).notNull(),
  questionPt: int2("question_pt").default(0).notNull(),
  questionEn: int2("question_en").default(0).notNull(),
  questionEs: int2("question_es").default(0).notNull(),
  questionType: int2("question_type").default(0).notNull(),
  groupId: int2("group_id").default(0).notNull(),
  groupPt: int2("group_pt").default(0).notNull(),
  groupEn: int2("group_en").default(0).notNull(),
  groupEs: int2("group_es").default(0).notNull(),
  answerOptionId: int2("answer_option_id").default(0).notNull(),
  answerPt: int2("answer_pt").default(0).notNull(),
  answerEs: int2("answer_es").default(0).notNull(),
  answerEn: int2("answer_en").default(0).notNull(),
  whitelabel: int2().default(0).notNull(),
  whitelabelQuestionActive: int2("whitelabel_question_active").default(0).notNull(),
  whitelabelQuestionRequired: int2("whitelabel_question_required").default(0).notNull(),
  whitelabelQuestionCreatedAt: int2("whitelabel_question_created_at").default(0).notNull(),
  whitelabelQuestionUpdatedAt: int2("whitelabel_question_updated_at").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql2`select 1 AS \`question_id\`,1 AS \`question_pt\`,1 AS \`question_en\`,1 AS \`question_es\`,1 AS \`question_type\`,1 AS \`group_id\`,1 AS \`group_pt\`,1 AS \`group_en\`,1 AS \`group_es\`,1 AS \`answer_option_id\`,1 AS \`answer_pt\`,1 AS \`answer_es\`,1 AS \`answer_en\`,1 AS \`whitelabel\`,1 AS \`whitelabel_question_active\`,1 AS \`whitelabel_question_required\`,1 AS \`whitelabel_question_created_at\`,1 AS \`whitelabel_question_updated_at\``);

// src/databases/mysql/nps/schema.ts
var schema_exports3 = {};
__export(schema_exports3, {
  research: () => research,
  researchAnswer: () => researchAnswer,
  researchQuestion: () => researchQuestion,
  researchQuestionGroup: () => researchQuestionGroup
});
import { sql as sql3 } from "drizzle-orm";
import { datetime as datetime3, index as index3, int as int3, mysqlTable as mysqlTable3, primaryKey as primaryKey3, tinyint as tinyint3, unique as unique3, varchar as varchar3 } from "drizzle-orm/mysql-core";
var research = mysqlTable3(
  "research",
  {
    id: varchar3({ length: 36 }).notNull(),
    userId: varchar3("user_id", { length: 255 }).notNull(),
    userName: varchar3("user_name", { length: 150 }),
    userEmail: varchar3("user_email", { length: 100 }),
    campaignId: varchar3("campaign_id", { length: 255 }).notNull(),
    campaignTitle: varchar3("campaign_title", { length: 150 }),
    organizationId: varchar3("organization_id", { length: 255 }),
    organizationName: varchar3("organization_name", { length: 255 }),
    systemType: varchar3("system_type", { length: 50 }).notNull(),
    questionGroupId: varchar3("question_group_id", { length: 36 }).notNull().references(() => researchQuestionGroup.id),
    seenTime: int3("seen_time").default(0).notNull(),
    done: tinyint3().default(0).notNull(),
    createdAt: datetime3("created_at", { mode: "string", fsp: 3 }).notNull(),
    updatedAt: datetime3("updated_at", { mode: "string" }),
    deletedAt: datetime3("deleted_at", { mode: "string" })
  },
  (table) => {
    return {
      questionGroupId: index3("question_group_id").on(table.questionGroupId),
      researchId: primaryKey3({ columns: [table.id], name: "research_id" }),
      userId: unique3("user_id").on(table.userId, table.campaignId, table.questionGroupId)
    };
  }
);
var researchAnswer = mysqlTable3(
  "research_answer",
  {
    id: varchar3({ length: 36 }).notNull(),
    researchAnswer: varchar3("research_answer", { length: 255 }),
    score: int3(),
    sharedQuestionId: varchar3("shared_question_id", { length: 36 }).references(() => researchQuestion.sharedQuestionId),
    researchId: varchar3("research_id", { length: 36 }).references(() => research.id, { onDelete: "cascade" }),
    createdAt: datetime3("created_at", { mode: "string" }).default(sql3`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime3("updated_at", { mode: "string" }),
    deletedAt: datetime3("deleted_at", { mode: "string" }),
    optionalQuestion: int3("optional_question").default(0)
  },
  (table) => {
    return {
      sharedQuestionId: index3("shared_question_id").on(table.sharedQuestionId),
      researchAnswerId: primaryKey3({ columns: [table.id], name: "research_answer_id" })
    };
  }
);
var researchQuestion = mysqlTable3(
  "research_question",
  {
    id: varchar3({ length: 36 }).notNull(),
    sharedQuestionId: varchar3("shared_question_id", { length: 36 }),
    question: varchar3({ length: 255 }),
    questionType: varchar3("question_type", { length: 50 }),
    questionGroupId: varchar3("question_group_id", { length: 36 }).references(() => researchQuestionGroup.id),
    language: varchar3({ length: 5 }).default("pt-br").notNull(),
    createdAt: datetime3("created_at", { mode: "string" }).default(sql3`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime3("updated_at", { mode: "string" }),
    deletedAt: datetime3("deleted_at", { mode: "string" }),
    optional: int3().default(0)
  },
  (table) => {
    return {
      questionGroupId: index3("question_group_id").on(table.questionGroupId),
      researchQuestionId: primaryKey3({ columns: [table.id], name: "research_question_id" }),
      sharedQuestionId: unique3("shared_question_id").on(table.sharedQuestionId, table.language)
    };
  }
);
var researchQuestionGroup = mysqlTable3(
  "research_question_group",
  {
    id: varchar3({ length: 36 }).notNull(),
    name: varchar3({ length: 255 }),
    tag: varchar3({ length: 100 }).notNull(),
    createdAt: datetime3("created_at", { mode: "string" }).default(sql3`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime3("updated_at", { mode: "string" }),
    deletedAt: datetime3("deleted_at", { mode: "string" })
  },
  (table) => {
    return {
      researchQuestionGroupId: primaryKey3({ columns: [table.id], name: "research_question_group_id" }),
      tag: unique3("tag").on(table.tag)
    };
  }
);

// src/databases/mysql/payment/schema.ts
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
import { sql as sql4 } from "drizzle-orm";
import { bigint as bigint3, char as char3, date as date3, datetime as datetime4, double as double2, float as float3, index as index4, int as int4, json, longtext as longtext2, mediumtext, mysqlEnum as mysqlEnum3, mysqlTable as mysqlTable4, mysqlView as mysqlView2, primaryKey as primaryKey4, text as text3, tinyint as tinyint4, unique as unique4, varchar as varchar4 } from "drizzle-orm/mysql-core";
var charges = mysqlTable4(
  "charges",
  {
    seqId: bigint3({ mode: "number" }).autoincrement().notNull(),
    createdAt: datetime4({ mode: "date" }).notNull(),
    updatedAt: datetime4({ mode: "date" }),
    deletedAt: datetime4({ mode: "date" }),
    amount: double2({ precision: 10, scale: 2 }).notNull(),
    totalAmount: double2({ precision: 10, scale: 2 }).notNull(),
    fees: double2({ precision: 10, scale: 2 }).notNull(),
    dueDate: date3({ mode: "date" }),
    currency: varchar4({ length: 3 }).default("BRL").notNull(),
    paymentOrderUrl: longtext2(),
    paymentGatewayTransactionId: longtext2()
  },
  (table) => {
    return {
      chargesSeqId: primaryKey4({ columns: [table.seqId], name: "charges_seqId" })
    };
  }
);
var companyFiles = mysqlTable4(
  "companyFiles",
  {
    seqId: bigint3({ mode: "number" }).autoincrement().notNull(),
    squidId: varchar4({ length: 36 }).notNull(),
    companyDocument: varchar4({ length: 50 }).notNull(),
    urlStorage: text3(),
    status: varchar4({ length: 40 }).notNull(),
    reason: varchar4({ length: 100 }),
    uploadedAt: date3({ mode: "date" }),
    validatedAt: date3({ mode: "date" }),
    deletedAt: date3({ mode: "date" })
  },
  (table) => {
    return {
      companyFilesSeqId: primaryKey4({ columns: [table.seqId], name: "companyFiles_seqId" })
    };
  }
);
var compositions = mysqlTable4(
  "compositions",
  {
    seqId: int4().autoincrement().notNull(),
    chargeId: int4().notNull(),
    squidId: varchar4({ length: 36 }),
    username: varchar4({ length: 255 }),
    paymentType: varchar4({ length: 5 }),
    document: varchar4({ length: 50 }),
    fullName: varchar4({ length: 255 }),
    birthday: date3({ mode: "date" }),
    transactionId: varchar4({ length: 60 }),
    dueDate: date3({ mode: "date" }),
    transactionStatus: varchar4({ length: 50 }),
    netValue: float3(),
    grossValue: float3(),
    nf: varchar4({ length: 255 }),
    pis: varchar4({ length: 50 }),
    address: varchar4({ length: 255 }),
    addressNumber: varchar4({ length: 45 }),
    neighborhood: varchar4({ length: 255 }),
    zipcode: varchar4({ length: 15 }),
    city: varchar4({ length: 255 }),
    uf: varchar4({ length: 255 }),
    country: varchar4({ length: 255 }),
    bankAccountNumber: varchar4({ length: 50 }),
    bankAccountDigit: varchar4({ length: 5 }),
    bankAccountAgency: varchar4({ length: 11 }),
    bankCode: varchar4({ length: 10 }),
    bankName: varchar4({ length: 100 }),
    bankAccountType: varchar4({ length: 20 })
  },
  (table) => {
    return {
      compositionsSeqId: primaryKey4({ columns: [table.seqId], name: "compositions_seqId" }),
      transactionId: unique4("transactionId").on(table.transactionId)
    };
  }
);
var customerPayments = mysqlTable4(
  "customerPayments",
  {
    seqId: bigint3({ mode: "number" }).autoincrement().notNull(),
    transactionId: varchar4({ length: 60 }).notNull().references(() => transactions.transactionId),
    createdAt: datetime4({ mode: "date" }).notNull(),
    updatedAt: datetime4({ mode: "date" }),
    deletedAt: datetime4({ mode: "date" })
  },
  (table) => {
    return {
      transactionId: index4("transactionId").on(table.transactionId),
      customerPaymentsSeqId: primaryKey4({ columns: [table.seqId], name: "customerPayments_seqId" })
    };
  }
);
var influencerPayments = mysqlTable4(
  "influencerPayments",
  {
    seqId: bigint3({ mode: "number" }).autoincrement().notNull(),
    transactionId: varchar4({ length: 60 }).notNull().references(() => transactions.transactionId, { onDelete: "cascade", onUpdate: "cascade" }),
    recruitmentId: varchar4({ length: 60 }).notNull(),
    campaignId: varchar4({ length: 50 }).notNull(),
    campaignName: varchar4({ length: 150 }).notNull(),
    campaignEndDate: datetime4({ mode: "date" }),
    campaignTimezone: varchar4({ length: 100 }),
    dateUsedToCalculate: datetime4({ mode: "date" }),
    squidId: varchar4({ length: 60 }).notNull(),
    instagramUsername: varchar4({ length: 50 }),
    instagramProfileId: bigint3({ mode: "number" }),
    youtubeChannel: varchar4({ length: 50 }),
    youtubeChannelId: varchar4({ length: 36 }),
    pinterestUsername: varchar4({ length: 50 }),
    pinterestProfileId: varchar4({ length: 36 }),
    nfId: varchar4({ length: 60 }),
    whitelabelId: varchar4({ length: 24 }),
    whitelabelDomain: varchar4({ length: 150 }),
    createdAt: datetime4({ mode: "date" }).notNull(),
    updatedAt: datetime4({ mode: "date" }),
    deletedAt: datetime4({ mode: "date" }),
    paymentStatus: varchar4({ length: 50 }).default("").notNull(),
    amount: float3().notNull(),
    sourceId: bigint3({ mode: "number" }),
    socialNetwork: varchar4({ length: 255 }),
    socialNetworkId: varchar4({ length: 255 }),
    socialNetworkUsername: varchar4({ length: 255 }),
    responsiblePayment: varchar4({ length: 200 }),
    responsibleId: varchar4({ length: 200 }),
    idPipefy: varchar4({ length: 60 }),
    description: varchar4({ length: 50 }),
    customDueDate: date3({ mode: "date" }),
    note: varchar4({ length: 1e3 }),
    scopeId: varchar4({ length: 32 })
  },
  (table) => {
    return {
      deletedAtIdx: index4("influencerPayments_deletedAt_IDX").on(table.deletedAt),
      idPipefyIdx: index4("influencerPayments_idPipefy_IDX").on(table.idPipefy, table.campaignId, table.seqId),
      influencerPaymentsSeqId: primaryKey4({ columns: [table.seqId], name: "influencerPayments_seqId" })
    };
  }
);
var influencerZoopBankAccounts = mysqlTable4(
  "influencerZoopBankAccounts",
  {
    seqId: bigint3({ mode: "number" }).autoincrement().notNull(),
    squidId: varchar4({ length: 60 }).notNull(),
    paymentGatewaySellerId: varchar4({ length: 60 }).notNull(),
    paymentGatewayBankAccountId: varchar4({ length: 60 }).notNull(),
    paymentGatewayBankAccountToken: varchar4({ length: 60 }).default(""),
    bankCode: varchar4({ length: 10 }).notNull(),
    bankName: varchar4({ length: 100 }).notNull(),
    bankAccountHolderName: varchar4({ length: 100 }),
    bankAccountHolderDocument: varchar4({ length: 15 }).notNull(),
    bankAccountHolderTradingName: varchar4({ length: 100 }),
    bankAccountRoutingNumber: varchar4({ length: 10 }).notNull(),
    bankAccountNumber: varchar4({ length: 50 }).notNull(),
    bankAccountVerificationNumber: varchar4({ length: 1 }).notNull(),
    bankAccountType: varchar4({ length: 20 }).notNull(),
    bankAccountHolderType: varchar4({ length: 20 }).notNull(),
    createdAt: datetime4({ mode: "date" }),
    updatedAt: datetime4({ mode: "date" }),
    deletedAt: datetime4({ mode: "date" })
  },
  (table) => {
    return {
      influencerZoopBankAccountsSeqId: primaryKey4({ columns: [table.seqId], name: "influencerZoopBankAccounts_seqId" }),
      squidId: unique4("squidId").on(table.squidId)
    };
  }
);
var nfCnaes = mysqlTable4(
  "nf_cnaes",
  {
    id: int4().autoincrement().notNull(),
    uf: char3({ length: 2 }).notNull(),
    codigo: varchar4({ length: 45 }).notNull(),
    createdAt: datetime4("created_at", { mode: "date" }).default(sql4`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime4("updated_at", { mode: "date" }).default(sql4`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      nfCnaesId: primaryKey4({ columns: [table.id], name: "nf_cnaes_id" }),
      idUnique: unique4("id_UNIQUE").on(table.id)
    };
  }
);
var nfImport = mysqlTable4(
  "nf_import",
  {
    id: int4().autoincrement().notNull(),
    objectId: varchar4({ length: 24 }).notNull(),
    numeroNf: varchar4("numero_nf", { length: 45 }).notNull(),
    dataEmissao: datetime4("data_emissao", { mode: "date" }).notNull(),
    ufGerador: char3("uf_gerador", { length: 2 }).notNull(),
    codigoMunicipio: varchar4("codigo_municipio", { length: 45 }),
    razaoSocial: varchar4("razao_social", { length: 450 }).notNull(),
    identificacaoPrestador: varchar4("identificacao_prestador", { length: 14 }).notNull(),
    inscricaoEstadual: varchar4("inscricao_estadual", { length: 14 }),
    inscricaoMunicipal: varchar4("inscricao_municipal", { length: 45 }),
    discriminacaoServico: longtext2("discriminacao_servico"),
    valorAliquota: float3("valor_aliquota"),
    valorServico: float3("valor_servico"),
    valorIss: float3("valor_iss"),
    issRetido: float3("iss_retido"),
    listaServico: varchar4("lista_servico", { length: 45 }),
    municipioServico: varchar4("municipio_servico", { length: 10 }),
    chave: varchar4({ length: 90 }).notNull(),
    nfStorageTmp: varchar4("nf_storage_tmp", { length: 150 }).notNull(),
    codigoVerificacao: varchar4("codigo_verificacao", { length: 45 }).notNull(),
    createdAt: datetime4("created_at", { mode: "date" }).default(sql4`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime4("updated_at", { mode: "date" }).default(sql4`(CURRENT_TIMESTAMP)`).notNull(),
    deletedAt: datetime4("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      nfImportId: primaryKey4({ columns: [table.id], name: "nf_import_id" }),
      idUnique: unique4("id_UNIQUE").on(table.id),
      chaveUnique: unique4("chave_UNIQUE").on(table.chave)
    };
  }
);
var nfs = mysqlTable4(
  "nfs",
  {
    seqId: bigint3({ mode: "number" }).autoincrement().notNull(),
    nfId: varchar4({ length: 60 }).notNull(),
    transactionId: varchar4({ length: 60 }).notNull().references(() => transactions.transactionId),
    squidId: varchar4({ length: 60 }).notNull(),
    serialnumber: varchar4({ length: 45 }),
    value: double2(),
    emissionDate: date3({ mode: "date" }),
    urlStorage: text3().notNull(),
    xmlUrlStorage: text3(),
    backofficeApproved: tinyint4().default(0).notNull(),
    parsedValue: double2(),
    parsedEmissionDate: date3({ mode: "date" }),
    parsedSerialNumber: varchar4({ length: 45 }),
    parsedCnae: varchar4({ length: 45 }),
    issValue: float3(),
    imported: varchar4({ length: 90 }),
    createdAt: datetime4({ mode: "date" }).default(sql4`(CURRENT_TIMESTAMP)`).notNull(),
    deletedAt: datetime4({ mode: "date" })
  },
  (table) => {
    return {
      transactionId: index4("transactionId").on(table.transactionId),
      nfsSeqId: primaryKey4({ columns: [table.seqId], name: "nfs_seqId" })
    };
  }
);
var transactionBankAccounts = mysqlTable4(
  "transactionBankAccounts",
  {
    seqId: bigint3({ mode: "number" }).autoincrement().notNull(),
    transactionId: varchar4({ length: 60 }).notNull().references(() => transactions.transactionId),
    bankCode: varchar4({ length: 20 }).notNull(),
    bankName: varchar4({ length: 100 }).notNull(),
    bankAccountHolderName: varchar4({ length: 150 }).notNull(),
    bankAccountHolderDocument: varchar4({ length: 100 }).notNull(),
    bankAccountHolderTradingName: varchar4({ length: 150 }),
    bankAccountRoutingNumber: varchar4({ length: 20 }).notNull(),
    bankAccountNumber: bigint3({ mode: "number" }).notNull(),
    bankAccountVerificationNumber: varchar4({ length: 3 }),
    bankAccountType: varchar4({ length: 20 }).default("checking").notNull(),
    bankAccountHolderType: varchar4({ length: 2 }).default("PF").notNull(),
    paymentGatewayToken: varchar4({ length: 60 }),
    createdAt: datetime4({ mode: "date" }).notNull(),
    updatedAt: datetime4({ mode: "date" }),
    deletedAt: datetime4({ mode: "date" }),
    paymentGatewayWithdrawTransactionId: varchar4({ length: 60 }),
    paymentGatewayWithdrawAuthorizationCode: varchar4({ length: 100 })
  },
  (table) => {
    return {
      transactionBankAccountsSeqId: primaryKey4({ columns: [table.seqId], name: "transactionBankAccounts_seqId" }),
      transactionIdUnique: unique4("transactionId_UNIQUE").on(table.transactionId)
    };
  }
);
var transactionBeneficiaries = mysqlTable4(
  "transactionBeneficiaries",
  {
    seqId: bigint3({ mode: "number" }).autoincrement().notNull(),
    transactionId: varchar4({ length: 60 }).notNull().references(() => transactions.transactionId, { onDelete: "cascade", onUpdate: "cascade" }).references(() => transactions.transactionId),
    beneficiaryTradingName: varchar4({ length: 150 }),
    beneficiaryFirstName: varchar4({ length: 100 }),
    beneficiaryLastName: varchar4({ length: 100 }),
    beneficiaryEmail: varchar4({ length: 100 }).notNull(),
    beneficiaryDocumentNumber: varchar4({ length: 20 }).notNull(),
    beneficiaryBirthDate: date3({ mode: "date" }),
    paymentGatewayId: varchar4({ length: 60 }),
    createdAt: datetime4({ mode: "date" }).notNull(),
    updatedAt: datetime4({ mode: "date" }),
    deletedAt: datetime4({ mode: "date" }),
    recordEmployment: varchar4({ length: 50 }),
    companyFileId: int4()
  },
  (table) => {
    return {
      transactionBeneficiariesSeqId: primaryKey4({ columns: [table.seqId], name: "transactionBeneficiaries_seqId" }),
      transactionIdUnique: unique4("transactionId_UNIQUE").on(table.transactionId)
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
var transactions = mysqlTable4(
  "transactions",
  {
    transactionId: varchar4({ length: 60 }).notNull(),
    squidId: varchar4({ length: 60 }).notNull(),
    transactionStatus: mysqlEnum3(transactionStatusEnum).notNull().default("new"),
    paymentType: mysqlEnum3(["nf", "rpa"]).notNull(),
    netValue: float3().notNull(),
    grossValue: float3().notNull(),
    inssAliquot: float3(),
    inssValue: float3(),
    irAliquot: float3(),
    irDeduct: float3(),
    irValue: float3(),
    nfId: varchar4({ length: 60 }),
    issAliquot: float3(),
    issValue: float3(),
    agent: tinyint4().default(0),
    credit: float3(),
    transactionStatusDetail: varchar4({ length: 450 }),
    amount: float3().notNull(),
    anticipationValue: float3(),
    anticipationAliquot: float3(),
    anticipationContractAccepted: varchar4({ length: 450 }),
    anticipationReceiptUrl: varchar4({ length: 450 }),
    anticipationIgnore: tinyint4().default(0).notNull(),
    inOrOut: varchar4({ length: 3 }).default("out").notNull(),
    currency: varchar4({ length: 3 }).default("BRL").notNull(),
    batchId: int4(),
    batchName: varchar4({ length: 255 }),
    transactionIdSource: varchar4({ length: 60 }),
    transactionErrorDetail: varchar4({ length: 200 }),
    paymentGatewayTransactionId: varchar4({ length: 255 }),
    paymentGatewayReceiptUrl: varchar4({ length: 450 }),
    paymentGatewayReceiptBankUrl: varchar4({ length: 450 }),
    dueDate: date3({ mode: "date" }).notNull(),
    transactionDate: datetime4({ mode: "date" }).notNull(),
    paidedAt: datetime4({ mode: "date" }),
    withdrawingDate: datetime4({ mode: "date" }),
    createdAt: datetime4({ mode: "date" }).notNull(),
    updatedAt: datetime4({ mode: "date" }),
    deletedAt: datetime4({ mode: "date" }),
    createdById: varchar4({ length: 255 }),
    updatedById: varchar4({ length: 255 }),
    createdByEmail: varchar4({ length: 255 }),
    updatedByEmail: varchar4({ length: 255 })
  },
  (table) => {
    return {
      transactionStatusIdx: index4("transactions_transactionStatus_IDX").on(table.transactionStatus),
      deletedAtIdx: index4("transactions_deletedAt_IDX").on(table.deletedAt),
      transactionsTransactionId: primaryKey4({ columns: [table.transactionId], name: "transactions_transactionId" })
    };
  }
);
var transactionsHistory = mysqlTable4("transactionsHistory", {
  transactionId: varchar4({ length: 60 }).notNull(),
  squidId: varchar4({ length: 60 }),
  transactionStatus: varchar4({ length: 50 }).default("pending").notNull(),
  paymentType: varchar4({ length: 5 }),
  netValue: float3().notNull(),
  grossValue: float3().notNull(),
  inssAliquot: float3(),
  inssValue: float3(),
  irAliquot: float3(),
  inOrOut: varchar4({ length: 3 }).default("out").notNull(),
  irDeduct: float3(),
  irValue: float3(),
  nfId: varchar4({ length: 60 }),
  issAliquot: float3(),
  issValue: float3(),
  anticipationAliquot: float3(),
  anticipationValue: float3(),
  anticipationContractAccepted: varchar4({ length: 450 }),
  paymentGatewayTransactionId: longtext2(),
  currency: varchar4({ length: 3 }).default("BRL").notNull(),
  batchId: int4(),
  batchName: varchar4({ length: 255 }),
  amount: float3().notNull(),
  transactionStatusDetail: varchar4({ length: 450 }),
  transactionErrorDetail: varchar4({ length: 200 }),
  transactionDate: datetime4({ mode: "date" }).notNull(),
  dueDate: date3({ mode: "date" }),
  createdAt: datetime4({ mode: "date" }).notNull(),
  updatedAt: datetime4({ mode: "date" }),
  paidedAt: datetime4({ mode: "date" }),
  withdrawingDate: datetime4({ mode: "date" }),
  deletedAt: datetime4({ mode: "date" }),
  createdById: varchar4({ length: 255 }),
  createdByEmail: varchar4({ length: 255 })
});
var transactionsSchedule = mysqlTable4(
  "transactions_schedule",
  {
    id: int4().autoincrement().notNull(),
    scheduleDate: date3("schedule_date", { mode: "date" }).notNull(),
    flowId: int4("flow_id").notNull(),
    description: varchar4({ length: 45 }),
    createdAt: datetime4("created_at", { mode: "date" }).default(sql4`(CURRENT_TIMESTAMP)`),
    updatedAt: datetime4("updated_at", { mode: "date" }).default(sql4`(CURRENT_TIMESTAMP)`)
  },
  (table) => {
    return {
      transactionsScheduleId: primaryKey4({ columns: [table.id], name: "transactions_schedule_id" }),
      idUnique: unique4("id_UNIQUE").on(table.id)
    };
  }
);
var transfeeraRawDataCallback = mysqlTable4(
  "transfeeraRawDataCallback",
  {
    id: int4({ unsigned: true }).autoincrement().notNull(),
    header: mediumtext().notNull(),
    payload: json(),
    validationTest: json(),
    createdAt: datetime4("created_at", { mode: "date" }).default(sql4`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      transfeeraRawDataCallbackId: primaryKey4({ columns: [table.id], name: "transfeeraRawDataCallback_id" })
    };
  }
);
var webhooksLogs = mysqlTable4(
  "webhooks_logs",
  {
    id: int4().autoincrement().notNull(),
    header: longtext2(),
    payload: longtext2(),
    querystring: varchar4({ length: 255 }),
    service: varchar4({ length: 45 }).notNull(),
    authentication: longtext2(),
    createdAt: datetime4("created_at", { mode: "date" }).default(sql4`(CURRENT_TIMESTAMP)`)
  },
  (table) => {
    return {
      webhooksLogsId: primaryKey4({ columns: [table.id], name: "webhooks_logs_id" }),
      idUnique: unique4("id_UNIQUE").on(table.id)
    };
  }
);
var dueDateTransactions = mysqlView2("dueDate_transactions", {
  dueDate: int4().default(0).notNull(),
  minCreatedAt: int4("min_createdAt").default(0).notNull(),
  maxCreatedAt: int4("max_createdAt").default(0).notNull(),
  countTotal: int4("count_total").default(0).notNull(),
  sumTotal: int4("sum_total").default(0).notNull(),
  countPaid: int4("count_paid").default(0).notNull(),
  somaPaid: int4("soma_paid").default(0).notNull(),
  countNew: int4("count_new").default(0).notNull(),
  somaNew: int4("soma_new").default(0).notNull(),
  countPending: int4("count_pending").default(0).notNull(),
  somaPending: int4("soma_pending").default(0).notNull(),
  countProcessing: int4("count_processing").default(0).notNull(),
  somaProcessing: int4("soma_processing").default(0).notNull(),
  countReadyToPay: int4("count_readyToPay").default(0).notNull(),
  somaReadyToPay: int4("soma_readyToPay").default(0).notNull(),
  countWithdrawing: int4("count_withdrawing").default(0).notNull(),
  somaWithdrawing: int4("soma_withdrawing").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql4`select 1 AS \`dueDate\`,1 AS \`min_createdAt\`,1 AS \`max_createdAt\`,1 AS \`count_total\`,1 AS \`sum_total\`,1 AS \`count_paid\`,1 AS \`soma_paid\`,1 AS \`count_new\`,1 AS \`soma_new\`,1 AS \`count_pending\`,1 AS \`soma_pending\`,1 AS \`count_processing\`,1 AS \`soma_processing\`,1 AS \`count_readyToPay\`,1 AS \`soma_readyToPay\`,1 AS \`count_withdrawing\`,1 AS \`soma_withdrawing\``);
var transactionConsolidated = mysqlView2("transaction_consolidated", {
  transactionId: int4().default(0).notNull(),
  recruitmentId: int4().default(0).notNull(),
  campaignId: int4().default(0).notNull(),
  campaignName: int4().default(0).notNull(),
  squidId: int4().default(0).notNull(),
  instagramUsername: int4().default(0).notNull(),
  instagramProfileId: int4().default(0).notNull(),
  youtubeChannel: int4().default(0).notNull(),
  youtubeChannelId: int4().default(0).notNull(),
  pinterestUsername: int4().default(0).notNull(),
  pinterestProfileId: int4().default(0).notNull(),
  createdAt: int4().default(0).notNull(),
  updatedAt: int4().default(0).notNull(),
  deletedAt: int4().default(0).notNull(),
  paymentStatus: int4().default(0).notNull(),
  amount: int4().default(0).notNull(),
  dueDate: int4().default(0).notNull(),
  transactionStatus: int4().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql4`select 1 AS \`transactionId\`,1 AS \`recruitmentId\`,1 AS \`campaignId\`,1 AS \`campaignName\`,1 AS \`squidId\`,1 AS \`instagramUsername\`,1 AS \`instagramProfileId\`,1 AS \`youtubeChannel\`,1 AS \`youtubeChannelId\`,1 AS \`pinterestUsername\`,1 AS \`pinterestProfileId\`,1 AS \`createdAt\`,1 AS \`updatedAt\`,1 AS \`deletedAt\`,1 AS \`paymentStatus\`,1 AS \`amount\`,1 AS \`dueDate\`,1 AS \`transactionStatus\``);
var vwTransfeeraWebhookReturn = mysqlView2("VW_TRANSFEERA_WEBHOOK_RETURN", {
  webhookId: int4().default(0).notNull(),
  idTransfer: int4().default(0).notNull(),
  transactionId: int4().default(0).notNull(),
  status: int4().default(0).notNull(),
  description: int4().default(0).notNull(),
  savedAt: int4().default(0).notNull(),
  tipo: int4().default(0).notNull(),
  payload: int4().default(0).notNull(),
  signature: int4().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql4`select 1 AS \`webhookId\`,1 AS \`idTransfer\`,1 AS \`transactionId\`,1 AS \`status\`,1 AS \`description\`,1 AS \`savedAt\`,1 AS \`tipo\`,1 AS \`payload\`,1 AS \`signature\``);
var campaignsTransactions = mysqlView2("campaigns_transactions", {
  campaignId: int4().default(0).notNull(),
  campaignName: int4().default(0).notNull(),
  minCreatedAt: int4("min_createdAt").default(0).notNull(),
  maxCreatedAt: int4("max_createdAt").default(0).notNull(),
  minDueDate: int4("min_dueDate").default(0).notNull(),
  maxDueDate: int4("max_dueDate").default(0).notNull(),
  countTotal: int4("count_total").default(0).notNull(),
  sumTotal: int4("sum_total").default(0).notNull(),
  countPaid: int4("count_paid").default(0).notNull(),
  somaPaid: int4("soma_paid").default(0).notNull(),
  countNew: int4("count_new").default(0).notNull(),
  somaNew: int4("soma_new").default(0).notNull(),
  countPending: int4("count_pending").default(0).notNull(),
  somaPending: int4("soma_pending").default(0).notNull(),
  countProcessing: int4("count_processing").default(0).notNull(),
  somaProcessing: int4("soma_processing").default(0).notNull(),
  countReadyToPay: int4("count_readyToPay").default(0).notNull(),
  somaReadyToPay: int4("soma_readyToPay").default(0).notNull(),
  countWithdrawing: int4("count_withdrawing").default(0).notNull(),
  somaWithdrawing: int4("soma_withdrawing").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql4`select 1 AS \`campaignId\`,1 AS \`campaignName\`,1 AS \`min_createdAt\`,1 AS \`max_createdAt\`,1 AS \`min_dueDate\`,1 AS \`max_dueDate\`,1 AS \`count_total\`,1 AS \`sum_total\`,1 AS \`count_paid\`,1 AS \`soma_paid\`,1 AS \`count_new\`,1 AS \`soma_new\`,1 AS \`count_pending\`,1 AS \`soma_pending\`,1 AS \`count_processing\`,1 AS \`soma_processing\`,1 AS \`count_readyToPay\`,1 AS \`soma_readyToPay\`,1 AS \`count_withdrawing\`,1 AS \`soma_withdrawing\``);
var anoMesDueDateTransactions = mysqlView2("ano_mes_dueDate_transactions", {
  anoMes: int4("ano_mes").default(0).notNull(),
  minCreatedAt: int4("min_createdAt").default(0).notNull(),
  maxCreatedAt: int4("max_createdAt").default(0).notNull(),
  minDueDate: int4("min_dueDate").default(0).notNull(),
  maxDueDate: int4("max_dueDate").default(0).notNull(),
  countTotal: int4("count_total").default(0).notNull(),
  sumTotal: int4("sum_total").default(0).notNull(),
  countPaid: int4("count_paid").default(0).notNull(),
  somaPaid: int4("soma_paid").default(0).notNull(),
  countNew: int4("count_new").default(0).notNull(),
  somaNew: int4("soma_new").default(0).notNull(),
  countPending: int4("count_pending").default(0).notNull(),
  somaPending: int4("soma_pending").default(0).notNull(),
  countProcessing: int4("count_processing").default(0).notNull(),
  somaProcessing: int4("soma_processing").default(0).notNull(),
  countReadyToPay: int4("count_readyToPay").default(0).notNull(),
  somaReadyToPay: int4("soma_readyToPay").default(0).notNull(),
  countWithdrawing: int4("count_withdrawing").default(0).notNull(),
  somaWithdrawing: int4("soma_withdrawing").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql4`select 1 AS \`ano_mes\`,1 AS \`min_createdAt\`,1 AS \`max_createdAt\`,1 AS \`min_dueDate\`,1 AS \`max_dueDate\`,1 AS \`count_total\`,1 AS \`sum_total\`,1 AS \`count_paid\`,1 AS \`soma_paid\`,1 AS \`count_new\`,1 AS \`soma_new\`,1 AS \`count_pending\`,1 AS \`soma_pending\`,1 AS \`count_processing\`,1 AS \`soma_processing\`,1 AS \`count_readyToPay\`,1 AS \`soma_readyToPay\`,1 AS \`count_withdrawing\`,1 AS \`soma_withdrawing\``);
var vwTransactionsWithoutInfluencerPayment = mysqlView2("VW_TRANSACTIONS_WITHOUT_INFLUENCER_PAYMENT", {
  transactionId: int4().default(0).notNull(),
  dueDate: int4().default(0).notNull(),
  createdAt: int4().default(0).notNull(),
  deletedAt: int4().default(0).notNull(),
  squidId: int4().default(0).notNull(),
  transactionStatus: int4().default(0).notNull(),
  netValue: int4().default(0).notNull(),
  grossValue: int4().default(0).notNull(),
  paymentType: int4().default(0).notNull(),
  transactionIdInfluencerPayments: int4("transactionId.influencerPayments").default(0).notNull(),
  seqid: int4().default(0).notNull(),
  responsiblePayment: int4().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql4`select 1 AS \`transactionId\`,1 AS \`dueDate\`,1 AS \`createdAt\`,1 AS \`deletedAt\`,1 AS \`squidId\`,1 AS \`transactionStatus\`,1 AS \`netValue\`,1 AS \`grossValue\`,1 AS \`paymentType\`,1 AS \`transactionId.influencerPayments\`,1 AS \`seqid\`,1 AS \`responsiblePayment\``);
var influencersTotalTransactions = mysqlView2("influencers_total_transactions", {
  squidId: int4().default(0).notNull(),
  instagramUsername: int4().default(0).notNull(),
  instagramProfileId: int4().default(0).notNull(),
  youtubeChannel: int4().default(0).notNull(),
  youtubeChannelId: int4().default(0).notNull(),
  pinterestUsername: int4().default(0).notNull(),
  pinterestProfileId: int4().default(0).notNull(),
  minCreatedAt: int4("min_createdAt").default(0).notNull(),
  maxCreatedAt: int4("max_createdAt").default(0).notNull(),
  minDueDate: int4("min_dueDate").default(0).notNull(),
  maxDueDate: int4("max_dueDate").default(0).notNull(),
  countTotal: int4("count_total").default(0).notNull(),
  sumTotal: int4("sum_total").default(0).notNull(),
  countPaid: int4("count_paid").default(0).notNull(),
  somaPaid: int4("soma_paid").default(0).notNull(),
  countNew: int4("count_new").default(0).notNull(),
  somaNew: int4("soma_new").default(0).notNull(),
  countPending: int4("count_pending").default(0).notNull(),
  somaPending: int4("soma_pending").default(0).notNull(),
  countProcessing: int4("count_processing").default(0).notNull(),
  somaProcessing: int4("soma_processing").default(0).notNull(),
  countReadyToPay: int4("count_readyToPay").default(0).notNull(),
  somaReadyToPay: int4("soma_readyToPay").default(0).notNull(),
  countWithdrawing: int4("count_withdrawing").default(0).notNull(),
  somaWithdrawing: int4("soma_withdrawing").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql4`select 1 AS \`squidId\`,1 AS \`instagramUsername\`,1 AS \`instagramProfileId\`,1 AS \`youtubeChannel\`,1 AS \`youtubeChannelId\`,1 AS \`pinterestUsername\`,1 AS \`pinterestProfileId\`,1 AS \`min_createdAt\`,1 AS \`max_createdAt\`,1 AS \`min_dueDate\`,1 AS \`max_dueDate\`,1 AS \`count_total\`,1 AS \`sum_total\`,1 AS \`count_paid\`,1 AS \`soma_paid\`,1 AS \`count_new\`,1 AS \`soma_new\`,1 AS \`count_pending\`,1 AS \`soma_pending\`,1 AS \`count_processing\`,1 AS \`soma_processing\`,1 AS \`count_readyToPay\`,1 AS \`soma_readyToPay\`,1 AS \`count_withdrawing\`,1 AS \`soma_withdrawing\``);
var pagamentosForaDoPrazo = mysqlView2("pagamentos_fora_do_prazo", {
  seqId: int4().default(0).notNull(),
  transactionId: int4().default(0).notNull(),
  recruitmentId: int4().default(0).notNull(),
  campaignId: int4().default(0).notNull(),
  campaignName: int4().default(0).notNull(),
  "date(ipCampaignEndDate)": int4("date(IP.campaignEndDate)").default(0).notNull(),
  squidId: int4().default(0).notNull(),
  instagramUsername: int4().default(0).notNull(),
  youtubeChannel: int4().default(0).notNull(),
  amount: int4().default(0).notNull(),
  "date(ipCreatedAt)": int4("date(IP.createdAt)").default(0).notNull(),
  dueDate: int4().default(0).notNull(),
  transactionStatus: int4().default(0).notNull(),
  paymentType: int4().default(0).notNull(),
  "date(trPaidedAt)": int4("date(TR.paidedAt)").default(0).notNull(),
  nameExp16: int4("Name_exp_16").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql4`select 1 AS \`seqId\`,1 AS \`transactionId\`,1 AS \`recruitmentId\`,1 AS \`campaignId\`,1 AS \`campaignName\`,1 AS \`date(IP.campaignEndDate)\`,1 AS \`squidId\`,1 AS \`instagramUsername\`,1 AS \`youtubeChannel\`,1 AS \`amount\`,1 AS \`date(IP.createdAt)\`,1 AS \`dueDate\`,1 AS \`transactionStatus\`,1 AS \`paymentType\`,1 AS \`date(TR.paidedAt)\`,1 AS \`Name_exp_16\``);
var vmTransactionsReadyToPayInCurrentMonth = mysqlView2("VM_TRANSACTIONS_READY_TO_PAY_IN_CURRENT_MONTH", {
  squidId: int4().default(0).notNull(),
  verificationStatus: int4().default(0).notNull(),
  verificationId: int4().default(0).notNull(),
  transactionId: int4().default(0).notNull(),
  dueDate: int4().default(0).notNull(),
  createdAt: int4().default(0).notNull(),
  netValue: int4().default(0).notNull(),
  transactionStatus: int4().default(0).notNull(),
  paidedAt: int4().default(0).notNull(),
  withdrawingDate: int4().default(0).notNull(),
  verificatedAt: int4().default(0).notNull(),
  updatedAt: int4().default(0).notNull(),
  bankAccountType: int4().default(0).notNull(),
  profileId: int4().default(0).notNull(),
  holderName: int4().default(0).notNull(),
  holderDocument: int4().default(0).notNull(),
  bankCode: int4().default(0).notNull(),
  bankAccountAgency: int4().default(0).notNull(),
  bankAccountNumber: int4().default(0).notNull(),
  bankAccountDigit: int4().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql4`select 1 AS \`squidId\`,1 AS \`verificationStatus\`,1 AS \`verificationId\`,1 AS \`transactionId\`,1 AS \`dueDate\`,1 AS \`createdAt\`,1 AS \`netValue\`,1 AS \`transactionStatus\`,1 AS \`paidedAt\`,1 AS \`withdrawingDate\`,1 AS \`verificatedAt\`,1 AS \`updatedAt\`,1 AS \`bankAccountType\`,1 AS \`profileId\`,1 AS \`holderName\`,1 AS \`holderDocument\`,1 AS \`bankCode\`,1 AS \`bankAccountAgency\`,1 AS \`bankAccountNumber\`,1 AS \`bankAccountDigit\``);
export {
  schema_exports as businessIntelligenceDb,
  schema_exports2 as influencersDb,
  schema_exports3 as npsDb,
  schema_exports4 as paymentDb,
  recruitment_exports as recruiment
};
