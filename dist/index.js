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
var src_exports = {};
__export(src_exports, {
  influencersDb: () => schema_exports,
  npsDb: () => schema_exports2,
  paymentDb: () => schema_exports3
});
module.exports = __toCommonJS(src_exports);

// src/databases/influencers/schema.ts
var schema_exports = {};
__export(schema_exports, {
  blockedtags: () => blockedtags,
  blockedusers: () => blockedusers,
  deletedProfiles: () => deletedProfiles,
  facebookTokens: () => facebookTokens,
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
var import_drizzle_orm = require("drizzle-orm");
var import_mysql_core = require("drizzle-orm/mysql-core");
var blockedtags = (0, import_mysql_core.mysqlTable)(
  "blockedtags",
  {
    id: (0, import_mysql_core.int)().autoincrement().notNull(),
    tag: (0, import_mysql_core.varchar)({ length: 20 })
  },
  (table) => {
    return {
      blockedtagsId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "blockedtags_id" }),
      tag: (0, import_mysql_core.unique)("tag").on(table.tag)
    };
  }
);
var blockedusers = (0, import_mysql_core.mysqlTable)(
  "blockedusers",
  {
    profileId: (0, import_mysql_core.varchar)({ length: 36 }).notNull().references(() => profiles.id),
    whitelabel: (0, import_mysql_core.varchar)({ length: 24 }).default("-").notNull(),
    organization: (0, import_mysql_core.varchar)({ length: 24 }).default("-").notNull(),
    reason: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    responsibleId: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    responsibleFullName: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    unregistered: (0, import_mysql_core.tinyint)().default(0).notNull(),
    createdAt: (0, import_mysql_core.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    logstashProcessedAt: (0, import_mysql_core.datetime)({ mode: "date" }),
    deletedAt: (0, import_mysql_core.datetime)({ mode: "date" }),
    campaignId: (0, import_mysql_core.varchar)({ length: 255 }),
    campaignName: (0, import_mysql_core.varchar)({ length: 255 })
  },
  (table) => {
    return {
      blockedusersProfileIdWhitelabel: (0, import_mysql_core.primaryKey)({ columns: [table.profileId, table.whitelabel], name: "blockedusers_profileId_whitelabel" })
    };
  }
);
var deletedProfiles = (0, import_mysql_core.mysqlTable)(
  "deletedProfiles",
  {
    id: (0, import_mysql_core.int)().autoincrement().notNull(),
    profileId: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    community: (0, import_mysql_core.varchar)({ length: 255 }),
    motivation: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    deletionDate: (0, import_mysql_core.date)({ mode: "date" }).notNull(),
    email: (0, import_mysql_core.varchar)({ length: 255 }),
    document: (0, import_mysql_core.varchar)({ length: 45 }),
    recordEmployment: (0, import_mysql_core.varchar)({ length: 50 }),
    createdAt: (0, import_mysql_core.date)({ mode: "date" }),
    updatedAt: (0, import_mysql_core.date)({ mode: "date" })
  },
  (table) => {
    return {
      deletedProfilesId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "deletedProfiles_id" })
    };
  }
);
var facebookTokens = (0, import_mysql_core.mysqlTable)(
  "facebookTokens",
  {
    profileId: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    createdAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`),
    valid: (0, import_mysql_core.tinyint)(),
    expiresAt: (0, import_mysql_core.datetime)({ mode: "date" }),
    status: (0, import_mysql_core.varchar)({ length: 1e3 }),
    permanentToken: (0, import_mysql_core.varchar)({ length: 512 }),
    accessToken: (0, import_mysql_core.varchar)({ length: 512 }),
    sevenDaysNotified: (0, import_mysql_core.tinyint)(),
    expiredTokenNotified: (0, import_mysql_core.tinyint)(),
    instagramBusinessId: (0, import_mysql_core.varchar)({ length: 30 }),
    facebookPageId: (0, import_mysql_core.varchar)({ length: 30 }),
    facebookUserId: (0, import_mysql_core.varchar)({ length: 30 })
  },
  (table) => {
    return {
      // validIdx: index().on(table.valid),
      notificationIdx: (0, import_mysql_core.index)("notification_index").on(table.valid, table.expiredTokenNotified, table.sevenDaysNotified, table.expiresAt),
      instagramBusinessIdIdx: (0, import_mysql_core.index)("facebookTokens_instagramBusinessId_IDX").on(table.instagramBusinessId),
      facebookTokensProfileId: (0, import_mysql_core.primaryKey)({ columns: [table.profileId], name: "facebookTokens_profileId" })
    };
  }
);
var genders = (0, import_mysql_core.mysqlTable)(
  "genders",
  {
    id: (0, import_mysql_core.int)().autoincrement().notNull(),
    description: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    descriptionEn: (0, import_mysql_core.varchar)("description_en", { length: 50 }).notNull(),
    descriptionEs: (0, import_mysql_core.varchar)("description_es", { length: 255 })
  },
  (table) => {
    return {
      gendersId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "genders_id" })
    };
  }
);
var googleTokens = (0, import_mysql_core.mysqlTable)(
  "googleTokens",
  {
    profileId: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    createdAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`),
    valid: (0, import_mysql_core.tinyint)(),
    expiresAt: (0, import_mysql_core.datetime)({ mode: "date" }),
    status: (0, import_mysql_core.varchar)({ length: 1e3 }),
    provider: (0, import_mysql_core.varchar)({ length: 50 }),
    accessToken: (0, import_mysql_core.varchar)({ length: 512 }),
    refreshToken: (0, import_mysql_core.varchar)({ length: 128 }),
    expiresIn: (0, import_mysql_core.bigint)({ mode: "number" }),
    connection: (0, import_mysql_core.varchar)({ length: 50 }),
    isSocial: (0, import_mysql_core.tinyint)(),
    gcloudProject: (0, import_mysql_core.varchar)({ length: 45 }).default("squid-apis")
  },
  (table) => {
    return {
      // validIdx: index().on(table.valid),
      googleTokensProfileId: (0, import_mysql_core.primaryKey)({ columns: [table.profileId], name: "googleTokens_profileId" })
    };
  }
);
var idInstagramUpdate = (0, import_mysql_core.mysqlTable)("idInstagramUpdate", {
  id: (0, import_mysql_core.varchar)({ length: 100 })
});
var influencerMetrics = (0, import_mysql_core.mysqlTable)(
  "influencer_metrics",
  {
    name: (0, import_mysql_core.varchar)({ length: 200 }).notNull(),
    value: (0, import_mysql_core.float)(),
    date: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`),
    id: (0, import_mysql_core.varchar)({ length: 100 }).notNull(),
    socialNetwork: (0, import_mysql_core.varchar)({ length: 100 }).notNull(),
    observation: (0, import_mysql_core.varchar)({ length: 200 }),
    type: (0, import_mysql_core.varchar)({ length: 45 }),
    createdAt: (0, import_mysql_core.datetime)({ mode: "date" }),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" })
  },
  (table) => {
    return {
      dateIdx: (0, import_mysql_core.index)("influencer_metrics_date_IDX").on(table.date),
      influencerMetricsIdSocialNetworkName: (0, import_mysql_core.primaryKey)({ columns: [table.id, table.socialNetwork, table.name], name: "influencer_metrics_id_socialNetwork_name" })
    };
  }
);
var instagramProfiles = (0, import_mysql_core.mysqlTable)(
  "instagramProfiles",
  {
    id: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    username: (0, import_mysql_core.varchar)({ length: 255 }),
    exists: (0, import_mysql_core.tinyint)().default(1).notNull(),
    searchable: (0, import_mysql_core.tinyint)().default(1).notNull(),
    macro: (0, import_mysql_core.tinyint)().default(0),
    notSearchReason: (0, import_mysql_core.varchar)({ length: 255 }),
    brandUser: (0, import_mysql_core.tinyint)().default(0).notNull(),
    picture: (0, import_mysql_core.text)(),
    fullName: (0, import_mysql_core.varchar)({ length: 255 }),
    email: (0, import_mysql_core.varchar)({ length: 255 }),
    bio: (0, import_mysql_core.text)(),
    website: (0, import_mysql_core.varchar)({ length: 255 }),
    language: (0, import_mysql_core.varchar)({ length: 10 }),
    isBusiness: (0, import_mysql_core.tinyint)().default(0).notNull(),
    isWorkAccount: (0, import_mysql_core.tinyint)(),
    hasSkip: (0, import_mysql_core.tinyint)(),
    facebookUserId: (0, import_mysql_core.varchar)({ length: 30 }),
    facebookPageId: (0, import_mysql_core.varchar)({ length: 30 }),
    instagramBusinessId: (0, import_mysql_core.varchar)({ length: 30 }),
    scrapperEngagementRate: (0, import_mysql_core.float)().notNull(),
    engagementRate: (0, import_mysql_core.float)(),
    totalMedias: (0, import_mysql_core.int)().default(0).notNull(),
    medias: (0, import_mysql_core.int)().default(0).notNull(),
    followers: (0, import_mysql_core.int)().default(0).notNull(),
    follows: (0, import_mysql_core.int)().default(0).notNull(),
    likes: (0, import_mysql_core.int)().default(0).notNull(),
    comments: (0, import_mysql_core.int)().default(0).notNull(),
    tier: (0, import_mysql_core.varchar)({ length: 45 }).default("undefined").notNull(),
    createdAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    logstashProcessedAt: (0, import_mysql_core.datetime)({ mode: "date" }),
    score: (0, import_mysql_core.float)(),
    score1: (0, import_mysql_core.float)(),
    score2: (0, import_mysql_core.float)(),
    score3: (0, import_mysql_core.float)(),
    score4: (0, import_mysql_core.float)(),
    score5: (0, import_mysql_core.float)(),
    storiesEngagementRate: (0, import_mysql_core.float)(),
    postEffectiveReach: (0, import_mysql_core.float)(),
    storiesEffectiveReach: (0, import_mysql_core.float)(),
    profileViews: (0, import_mysql_core.int)(),
    hasMediaKit: (0, import_mysql_core.tinyint)().default(0),
    categorizedAt: (0, import_mysql_core.datetime)({ mode: "date" }),
    averageComments: (0, import_mysql_core.float)().notNull(),
    averageCommentsImage: (0, import_mysql_core.float)().notNull(),
    averageCommentsVideo: (0, import_mysql_core.float)().notNull(),
    averageCommentsCarousel: (0, import_mysql_core.float)().notNull(),
    averageLikes: (0, import_mysql_core.float)().notNull(),
    averageLikesImage: (0, import_mysql_core.float)().notNull(),
    averageLikesVideo: (0, import_mysql_core.float)().notNull(),
    averageLikesCarousel: (0, import_mysql_core.float)().notNull(),
    commentLikesRate: (0, import_mysql_core.float)().notNull(),
    commentsRate: (0, import_mysql_core.float)().notNull(),
    totalStoriesImpressions: (0, import_mysql_core.float)(),
    totalStoriesReach: (0, import_mysql_core.float)(),
    totalStoriesReplies: (0, import_mysql_core.float)(),
    totalStoriesTapBacks: (0, import_mysql_core.float)(),
    totalStoriesTapFowardExits: (0, import_mysql_core.float)().notNull(),
    totalPostsReach: (0, import_mysql_core.float)(),
    totalPostsSaves: (0, import_mysql_core.float)(),
    totalPostsImpressions: (0, import_mysql_core.float)(),
    averageSaved: (0, import_mysql_core.float)().notNull(),
    averageSavedImage: (0, import_mysql_core.float)().notNull(),
    averageSavedVideo: (0, import_mysql_core.float)().notNull(),
    averageSavedCarousel: (0, import_mysql_core.float)().notNull(),
    averageTapBacks: (0, import_mysql_core.float)().notNull(),
    averageTapBacksImage: (0, import_mysql_core.float)().notNull(),
    averageTapBacksVideo: (0, import_mysql_core.float)().notNull(),
    averageReplies: (0, import_mysql_core.float)().notNull(),
    averageRepliesImage: (0, import_mysql_core.float)().notNull(),
    averageRepliesVideo: (0, import_mysql_core.float)().notNull(),
    averageTapFowardExits: (0, import_mysql_core.float)().notNull(),
    averageTapFowardExitsImage: (0, import_mysql_core.float)().notNull(),
    averageTapFowardExitsVideo: (0, import_mysql_core.float)().notNull(),
    completeVideoStoriesRate: (0, import_mysql_core.float)().notNull(),
    numberPostsActivityScore: (0, import_mysql_core.float)(),
    numberStoriesScore: (0, import_mysql_core.float)(),
    daysPostsScore: (0, import_mysql_core.float)(),
    daysStoriesScore: (0, import_mysql_core.float)(),
    advertisingPostsEngagementRate: (0, import_mysql_core.float)(),
    noAdvertisingPostsEngagementRate: (0, import_mysql_core.float)(),
    advertisingStoriesEngagementRate: (0, import_mysql_core.float)(),
    noAdvertisingStoriesEngagementRate: (0, import_mysql_core.float)(),
    advertisingContentPercentage: (0, import_mysql_core.float)(),
    advertisingPostsPercentage: (0, import_mysql_core.float)(),
    advertisingStoriesPercentage: (0, import_mysql_core.float)(),
    postImageEngagementRate: (0, import_mysql_core.float)(),
    postCarouselEngagementRate: (0, import_mysql_core.float)(),
    postVideoEngagementRate: (0, import_mysql_core.float)(),
    storiesVideoEngagementRate: (0, import_mysql_core.float)(),
    storiesImageEngagementRate: (0, import_mysql_core.float)(),
    storiesCompleteEngagementRate: (0, import_mysql_core.float)(),
    averagePostsReach: (0, import_mysql_core.float)().notNull(),
    averagePostsImpressions: (0, import_mysql_core.float)().notNull(),
    averagePostsFrequency: (0, import_mysql_core.float)().notNull(),
    averageStoriesReach: (0, import_mysql_core.float)().notNull(),
    averageStoriesImpressions: (0, import_mysql_core.float)().notNull(),
    averageStoriesFrequency: (0, import_mysql_core.float)().notNull(),
    adPostPermanceEngagementRate: (0, import_mysql_core.float)(),
    adStoriesPermanceEngagementRate: (0, import_mysql_core.float)(),
    identifyAt: (0, import_mysql_core.datetime)({ mode: "date" }),
    estimateMetric: (0, import_mysql_core.tinyint)().default(0),
    totalReels: (0, import_mysql_core.float)(),
    totalReachReels: (0, import_mysql_core.float)(),
    reelsEffectiveReach: (0, import_mysql_core.float)(),
    totalPlaysReels: (0, import_mysql_core.float)(),
    averagePlaysReels: (0, import_mysql_core.float)(),
    totalEngagementReels: (0, import_mysql_core.float)(),
    reelsEngagementRate: (0, import_mysql_core.float)(),
    averageLikesReels: (0, import_mysql_core.float)(),
    averageCommentsReels: (0, import_mysql_core.float)(),
    averageSavesReels: (0, import_mysql_core.float)(),
    hasMediaBoost: (0, import_mysql_core.tinyint)().default(0).notNull(),
    statusUidMigration: (0, import_mysql_core.varchar)({ length: 255 }).default("Not processed"),
    oldIgId: (0, import_mysql_core.varchar)({ length: 50 }),
    postCpm: (0, import_mysql_core.float)(),
    storySequenceCpm: (0, import_mysql_core.float)(),
    reelCpm: (0, import_mysql_core.float)(),
    cache: (0, import_mysql_core.float)(),
    postValue: (0, import_mysql_core.float)(),
    storySequenceValue: (0, import_mysql_core.float)(),
    reelValue: (0, import_mysql_core.float)(),
    medianPostsReach: (0, import_mysql_core.float)(),
    medianPostsSaves: (0, import_mysql_core.float)(),
    medianPostsImpressions: (0, import_mysql_core.float)(),
    medianStoriesImpressions: (0, import_mysql_core.float)(),
    medianStoriesReach: (0, import_mysql_core.float)(),
    medianStoriesReplies: (0, import_mysql_core.float)(),
    medianStoriesTapBacks: (0, import_mysql_core.float)(),
    medianStoriesTapFowardExits: (0, import_mysql_core.float)(),
    medianReachReels: (0, import_mysql_core.float)(),
    medianPlaysReels: (0, import_mysql_core.float)(),
    medianEngagementReels: (0, import_mysql_core.float)(),
    outdatedMetrics: (0, import_mysql_core.tinyint)().default(0),
    medianComments: (0, import_mysql_core.float)(),
    medianLikes: (0, import_mysql_core.float)(),
    insertOrigin: (0, import_mysql_core.varchar)({ length: 50 }),
    fullProfileProcess: (0, import_mysql_core.tinyint)().default(0),
    totalReelsLikes: (0, import_mysql_core.float)(),
    totalReelsComments: (0, import_mysql_core.float)(),
    totalReelsSaves: (0, import_mysql_core.float)(),
    userProfileViews: (0, import_mysql_core.float)(),
    userPostsEngagementRateByImpressions: (0, import_mysql_core.float)(),
    userReelsEngagementRateByImpressions: (0, import_mysql_core.float)(),
    userStoriesEngagementRateByImpressions: (0, import_mysql_core.float)(),
    userPostsEngagementRateByFollowers: (0, import_mysql_core.float)(),
    userReelsEngagementRateByFollowers: (0, import_mysql_core.float)(),
    userStoriesEngagementRateByFollowers: (0, import_mysql_core.float)(),
    userStoriesEffectiveReach: (0, import_mysql_core.float)(),
    userPostsEffectiveReach: (0, import_mysql_core.float)(),
    userReelsEffectiveReach: (0, import_mysql_core.float)(),
    userTotalPosts: (0, import_mysql_core.float)(),
    userTotalReels: (0, import_mysql_core.float)(),
    userTotalStories: (0, import_mysql_core.float)(),
    userAvgPostsReach: (0, import_mysql_core.float)(),
    userAvgReelsReach: (0, import_mysql_core.float)(),
    userAvgStoriesReach: (0, import_mysql_core.float)(),
    userAvgPostsImpressions: (0, import_mysql_core.float)(),
    userAvgStoriesImpressions: (0, import_mysql_core.float)(),
    userAvgReelsPlays: (0, import_mysql_core.float)(),
    userAvgPostsEngagement: (0, import_mysql_core.float)(),
    userAvgReelsEngagement: (0, import_mysql_core.float)(),
    userAvgStoriesEngagement: (0, import_mysql_core.float)(),
    userAvgPostsLikes: (0, import_mysql_core.float)(),
    userAvgReelsLikes: (0, import_mysql_core.float)(),
    userAvgStoriesLikes: (0, import_mysql_core.float)(),
    userAvgPostsComments: (0, import_mysql_core.float)(),
    userAvgReelsComments: (0, import_mysql_core.float)(),
    userAvgStoriesReplies: (0, import_mysql_core.float)(),
    userAvgPostsShares: (0, import_mysql_core.float)(),
    userAvgReelsShares: (0, import_mysql_core.float)(),
    userAvgStoriesShares: (0, import_mysql_core.float)(),
    userAvgPostsSaves: (0, import_mysql_core.float)(),
    userAvgReelsSaves: (0, import_mysql_core.float)(),
    userPostsCpm: (0, import_mysql_core.float)(),
    userStoriesCpm: (0, import_mysql_core.float)(),
    userReelsCpm: (0, import_mysql_core.float)(),
    storiesCpm: (0, import_mysql_core.float)(),
    storiesValue: (0, import_mysql_core.float)(),
    profileDescription: (0, import_mysql_core.varchar)({ length: 255 }),
    hasCreatorsInsights: (0, import_mysql_core.tinyint)()
  },
  (table) => {
    return {
      usernameIdx: (0, import_mysql_core.index)("username_index").on(table.username),
      idxInstagramProfilesFacebookUserId: (0, import_mysql_core.index)("idx_instagramProfiles_facebookUserId").on(table.facebookUserId),
      oldIgIdIdx: (0, import_mysql_core.index)("instagramProfiles_oldIgId_IDX").on(table.oldIgId),
      instagramProfilesId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "instagramProfiles_id" })
    };
  }
);
var locations = (0, import_mysql_core.mysqlTable)(
  "locations",
  {
    id: (0, import_mysql_core.bigint)({ mode: "number" }).notNull(),
    name: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    latitude: (0, import_mysql_core.decimal)({ precision: 9, scale: 6 }).notNull(),
    longitude: (0, import_mysql_core.decimal)({ precision: 9, scale: 6 }).notNull(),
    createdAt: (0, import_mysql_core.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).notNull()
  },
  (table) => {
    return {
      locationsId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "locations_id" })
    };
  }
);
var notSearchableUsers = (0, import_mysql_core.mysqlTable)(
  "notSearchableUsers",
  {
    id: (0, import_mysql_core.varchar)({ length: 45 }).notNull(),
    username: (0, import_mysql_core.varchar)({ length: 45 }),
    reasons: (0, import_mysql_core.varchar)({ length: 45 }).notNull(),
    socialNetwork: (0, import_mysql_core.varchar)({ length: 45 }).notNull(),
    createdAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    tags: (0, import_mysql_core.varchar)({ length: 255 }),
    followers: (0, import_mysql_core.int)(),
    engagement: (0, import_mysql_core.float)()
  },
  (table) => {
    return {
      notSearchableUsersId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "notSearchableUsers_id" })
    };
  }
);
var pinterestProfiles = (0, import_mysql_core.mysqlTable)(
  "pinterestProfiles",
  {
    id: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    squidId: (0, import_mysql_core.varchar)({ length: 36 }),
    username: (0, import_mysql_core.varchar)({ length: 255 }).default("Processando").notNull(),
    exists: (0, import_mysql_core.tinyint)().default(1).notNull(),
    isPartner: (0, import_mysql_core.tinyint)().default(1).notNull(),
    picture: (0, import_mysql_core.varchar)({ length: 255 }).default("Processando").notNull(),
    fullName: (0, import_mysql_core.varchar)({ length: 255 }),
    about: (0, import_mysql_core.text)(),
    since: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    engagementRate: (0, import_mysql_core.float)().notNull(),
    reach: (0, import_mysql_core.int)().default(0).notNull(),
    totalPins: (0, import_mysql_core.int)().default(0).notNull(),
    followers: (0, import_mysql_core.int)().default(0).notNull(),
    identificationPins: (0, import_mysql_core.int)().default(0).notNull(),
    identificationImpressions: (0, import_mysql_core.int)().default(0).notNull(),
    identificationSaves: (0, import_mysql_core.int)().default(0).notNull(),
    identificationClicks: (0, import_mysql_core.int)().default(0).notNull(),
    identificationCloseups: (0, import_mysql_core.int)().default(0).notNull(),
    identificationComments: (0, import_mysql_core.int)().default(0).notNull(),
    selfToken: (0, import_mysql_core.tinyint)().default(1).notNull(),
    createdAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      pinterestProfilesId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "pinterestProfiles_id" }),
      squidId: (0, import_mysql_core.unique)("squidId").on(table.squidId)
    };
  }
);
var profileAdditionalInfoBanks = (0, import_mysql_core.mysqlTable)(
  "profileAdditionalInfoBanks",
  {
    id: (0, import_mysql_core.int)().autoincrement().notNull(),
    profileId: (0, import_mysql_core.varchar)({ length: 36 }).notNull(),
    bankCode: (0, import_mysql_core.varchar)({ length: 10 }),
    bankName: (0, import_mysql_core.varchar)({ length: 100 }).notNull(),
    bankAccountNumber: (0, import_mysql_core.varchar)({ length: 50 }),
    bankAccountDigit: (0, import_mysql_core.varchar)({ length: 5 }),
    bankAccountAgency: (0, import_mysql_core.varchar)({ length: 11 }),
    bankAccountType: (0, import_mysql_core.varchar)({ length: 20 }),
    bankOperationCode: (0, import_mysql_core.varchar)({ length: 10 }),
    holderDocument: (0, import_mysql_core.varchar)({ length: 15 }),
    holderOpeningDate: (0, import_mysql_core.date)({ mode: "date" }),
    holderName: (0, import_mysql_core.varchar)({ length: 150 }),
    holderTradingName: (0, import_mysql_core.varchar)({ length: 150 }),
    isPersonAccount: (0, import_mysql_core.tinyint)().notNull(),
    createdAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    nationalDocument: (0, import_mysql_core.varchar)({ length: 50 }),
    recordEmployment: (0, import_mysql_core.varchar)({ length: 50 }),
    companyName: (0, import_mysql_core.varchar)({ length: 150 }),
    fantasyName: (0, import_mysql_core.varchar)({ length: 100 }),
    companyOpeningDate: (0, import_mysql_core.date)({ mode: "date" }),
    typeOfBusiness: (0, import_mysql_core.varchar)({ length: 150 }),
    paymentType: (0, import_mysql_core.varchar)({ length: 5 }),
    companyUf: (0, import_mysql_core.varchar)({ length: 2 }),
    companyCity: (0, import_mysql_core.varchar)({ length: 100 }),
    companyLegalNature: (0, import_mysql_core.varchar)({ length: 100 }),
    companyDocument: (0, import_mysql_core.varchar)({ length: 50 }),
    bankAccountAgencyDigit: (0, import_mysql_core.varchar)({ length: 15 }),
    verificationStatus: (0, import_mysql_core.float)(),
    verificationId: (0, import_mysql_core.char)({ length: 36 }),
    verificatedAt: (0, import_mysql_core.datetime)({ mode: "date" })
  },
  (table) => {
    return {
      profileAdditionalInfoBanksId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "profileAdditionalInfoBanks_id" }),
      profileIdUnique: (0, import_mysql_core.unique)("profileId_UNIQUE").on(table.profileId),
      profileId: (0, import_mysql_core.unique)("profileId").on(table.profileId, table.bankCode, table.bankAccountNumber)
    };
  }
);
var profileAdditionalInfos = (0, import_mysql_core.mysqlTable)(
  "profileAdditionalInfos",
  {
    profileId: (0, import_mysql_core.varchar)({ length: 36 }).notNull().references(() => profiles.id),
    loginUid: (0, import_mysql_core.varchar)({ length: 45 }),
    email: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    document: (0, import_mysql_core.varchar)({ length: 50 }),
    name: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    blog: (0, import_mysql_core.varchar)({ length: 255 }),
    birthday: (0, import_mysql_core.date)({ mode: "date" }).notNull(),
    gender: (0, import_mysql_core.char)({ length: 1 }),
    phone: (0, import_mysql_core.varchar)({ length: 25 }),
    zipcode: (0, import_mysql_core.varchar)({ length: 15 }),
    address: (0, import_mysql_core.varchar)({ length: 255 }),
    addressNumber: (0, import_mysql_core.varchar)({ length: 150 }),
    complement: (0, import_mysql_core.varchar)({ length: 255 }),
    city: (0, import_mysql_core.varchar)({ length: 255 }),
    neighborhood: (0, import_mysql_core.varchar)({ length: 255 }),
    uf: (0, import_mysql_core.varchar)({ length: 255 }),
    country: (0, import_mysql_core.varchar)({ length: 255 }).default("BR"),
    lat: (0, import_mysql_core.double)(),
    lng: (0, import_mysql_core.double)(),
    registeredFromSource: (0, import_mysql_core.varchar)({ length: 255 }),
    registeredFromCampaign: (0, import_mysql_core.varchar)({ length: 255 }),
    registeredFromMedium: (0, import_mysql_core.varchar)({ length: 255 }),
    createdAt: (0, import_mysql_core.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).notNull(),
    allowSms: (0, import_mysql_core.tinyint)().default(0),
    allowWhatsapp: (0, import_mysql_core.tinyint)().default(1),
    allowSuggestionEmail: (0, import_mysql_core.tinyint)().default(1),
    isPersonAccount: (0, import_mysql_core.tinyint)().notNull(),
    documentType: (0, import_mysql_core.varchar)({ length: 13 }).notNull(),
    hasSkip: (0, import_mysql_core.tinyint)().default(0),
    language: (0, import_mysql_core.varchar)({ length: 10 }).default("pt-br").notNull(),
    phoneValid: (0, import_mysql_core.tinyint)().default(0),
    phoneValidCode: (0, import_mysql_core.varchar)({ length: 15 }),
    phoneValidCodeCreatedAt: (0, import_mysql_core.datetime)({ mode: "date" }),
    race: (0, import_mysql_core.int)(),
    registeredFromAdId: (0, import_mysql_core.varchar)({ length: 255 }),
    registeredFromContent: (0, import_mysql_core.varchar)({ length: 255 }),
    registeredFromAdName: (0, import_mysql_core.varchar)({ length: 255 }),
    portalRegistration: (0, import_mysql_core.tinyint)().default(0),
    agent: (0, import_mysql_core.tinyint)().default(0),
    showWarning: (0, import_mysql_core.tinyint)().default(0),
    scenario: (0, import_mysql_core.varchar)({ length: 10 }),
    updateAddress: (0, import_mysql_core.tinyint)(),
    nationality: (0, import_mysql_core.varchar)({ length: 255 }),
    allowBrandLovers: (0, import_mysql_core.tinyint)().default(1),
    allowAffiliates: (0, import_mysql_core.tinyint)().default(1),
    allowResearch: (0, import_mysql_core.tinyint)().default(1),
    allowEmail: (0, import_mysql_core.tinyint)().default(1),
    socialName: (0, import_mysql_core.varchar)({ length: 50 }),
    descriptionCreatorsInsights: (0, import_mysql_core.varchar)({ length: 255 })
  },
  (table) => {
    return {
      profileAdditionalInfosProfileId: (0, import_mysql_core.primaryKey)({ columns: [table.profileId], name: "profileAdditionalInfos_profileId" }),
      emailUnique: (0, import_mysql_core.unique)("EMAIL_UNIQUE").on(table.email),
      auth0: (0, import_mysql_core.unique)("AUTH0").on(table.loginUid)
    };
  }
);
var profileAdditionalInfosOld = (0, import_mysql_core.mysqlTable)(
  "profileAdditionalInfos_old",
  {
    profileId: (0, import_mysql_core.varchar)({ length: 36 }).notNull().references(() => profiles.id),
    document: (0, import_mysql_core.varchar)({ length: 50 }),
    name: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    email: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    blog: (0, import_mysql_core.varchar)({ length: 255 }),
    birthday: (0, import_mysql_core.date)({ mode: "date" }).notNull(),
    gender: (0, import_mysql_core.char)({ length: 3 }).notNull(),
    phone: (0, import_mysql_core.varchar)({ length: 25 }).notNull(),
    zipcode: (0, import_mysql_core.varchar)({ length: 15 }).notNull(),
    address: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    addressNumber: (0, import_mysql_core.varchar)({ length: 255 }),
    complement: (0, import_mysql_core.varchar)({ length: 255 }),
    city: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    neighborhood: (0, import_mysql_core.varchar)({ length: 255 }),
    uf: (0, import_mysql_core.varchar)({ length: 255 }).default("").notNull(),
    country: (0, import_mysql_core.varchar)({ length: 255 }).default("BR"),
    registeredFromSource: (0, import_mysql_core.varchar)({ length: 255 }),
    registeredFromCampaign: (0, import_mysql_core.varchar)({ length: 255 }),
    registeredFromMedium: (0, import_mysql_core.varchar)({ length: 255 }),
    createdAt: (0, import_mysql_core.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).notNull(),
    allowSms: (0, import_mysql_core.tinyint)().default(0),
    allowWhatsapp: (0, import_mysql_core.tinyint)().default(1),
    allowSuggestionEmail: (0, import_mysql_core.tinyint)().default(1),
    isPersonAccount: (0, import_mysql_core.tinyint)().notNull(),
    documentType: (0, import_mysql_core.varchar)({ length: 13 }).default("CPF").notNull(),
    hasSkip: (0, import_mysql_core.tinyint)().default(0),
    auth0: (0, import_mysql_core.varchar)({ length: 45 }),
    language: (0, import_mysql_core.varchar)({ length: 5 }).default("pt-br").notNull(),
    phoneValid: (0, import_mysql_core.tinyint)().default(0),
    phoneValidCode: (0, import_mysql_core.varchar)({ length: 15 }),
    phoneValidCodeCreatedAt: (0, import_mysql_core.datetime)({ mode: "date" }),
    race: (0, import_mysql_core.int)(),
    registeredFromAdId: (0, import_mysql_core.varchar)({ length: 255 }),
    registeredFromContent: (0, import_mysql_core.varchar)({ length: 255 }),
    registeredFromAdName: (0, import_mysql_core.varchar)({ length: 255 }),
    portalRegistration: (0, import_mysql_core.tinyint)().default(0),
    agent: (0, import_mysql_core.tinyint)().default(0)
  },
  (table) => {
    return {
      profileAdditionalInfosOldProfileId: (0, import_mysql_core.primaryKey)({ columns: [table.profileId], name: "profileAdditionalInfos_old_profileId" }),
      emailUnique: (0, import_mysql_core.unique)("EMAIL_UNIQUE").on(table.email)
    };
  }
);
var profileAdditionalInfosWhitelabels = (0, import_mysql_core.mysqlTable)(
  "profileAdditionalInfos_whitelabels",
  {
    profileId: (0, import_mysql_core.varchar)({ length: 36 }).notNull(),
    whitelabel: (0, import_mysql_core.varchar)({ length: 24 }).default("-").notNull(),
    organization: (0, import_mysql_core.varchar)({ length: 24 }).default("-").notNull(),
    auth0: (0, import_mysql_core.varchar)({ length: 45 }),
    communityId: (0, import_mysql_core.varchar)("community_id", { length: 45 }),
    email: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    document: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    name: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    blog: (0, import_mysql_core.varchar)({ length: 255 }),
    birthday: (0, import_mysql_core.date)({ mode: "date" }).notNull(),
    gender: (0, import_mysql_core.char)({ length: 1 }),
    phone: (0, import_mysql_core.varchar)({ length: 25 }).notNull(),
    zipcode: (0, import_mysql_core.varchar)({ length: 15 }),
    address: (0, import_mysql_core.varchar)({ length: 255 }),
    addressNumber: (0, import_mysql_core.varchar)({ length: 150 }),
    complement: (0, import_mysql_core.varchar)({ length: 255 }),
    city: (0, import_mysql_core.varchar)({ length: 255 }),
    neighborhood: (0, import_mysql_core.varchar)({ length: 255 }),
    uf: (0, import_mysql_core.varchar)({ length: 255 }),
    country: (0, import_mysql_core.varchar)({ length: 255 }).default("BR"),
    nationality: (0, import_mysql_core.varchar)({ length: 255 }),
    registeredFromSource: (0, import_mysql_core.varchar)({ length: 255 }),
    registeredFromCampaign: (0, import_mysql_core.varchar)({ length: 255 }),
    registeredFromMedium: (0, import_mysql_core.varchar)({ length: 255 }),
    createdAt: (0, import_mysql_core.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).notNull(),
    allowSms: (0, import_mysql_core.tinyint)().default(0),
    allowWhatsapp: (0, import_mysql_core.tinyint)().default(1),
    allowSuggestionEmail: (0, import_mysql_core.tinyint)().default(1),
    isPersonAccount: (0, import_mysql_core.tinyint)().notNull(),
    documentType: (0, import_mysql_core.varchar)({ length: 13 }).notNull(),
    hasSkip: (0, import_mysql_core.tinyint)().default(0),
    language: (0, import_mysql_core.varchar)({ length: 10 }).default("pt-br").notNull(),
    phoneValid: (0, import_mysql_core.tinyint)().default(0),
    phoneValidCode: (0, import_mysql_core.varchar)({ length: 15 }),
    phoneValidCodeCreatedAt: (0, import_mysql_core.datetime)({ mode: "date" }),
    race: (0, import_mysql_core.int)(),
    registeredFromAdId: (0, import_mysql_core.varchar)({ length: 255 }),
    registeredFromContent: (0, import_mysql_core.varchar)({ length: 255 }),
    registeredFromAdName: (0, import_mysql_core.varchar)({ length: 255 }),
    portalRegistration: (0, import_mysql_core.tinyint)().default(0),
    agent: (0, import_mysql_core.tinyint)().default(0),
    showWarning: (0, import_mysql_core.tinyint)().default(0)
  },
  (table) => {
    return {
      profileAdditionalInfosWhitelabelsProfileIdWhitelabel: (0, import_mysql_core.primaryKey)({ columns: [table.profileId, table.whitelabel], name: "profileAdditionalInfos_whitelabels_profileId_whitelabel" }),
      emailUnique: (0, import_mysql_core.unique)("EMAIL_UNIQUE").on(table.email, table.whitelabel),
      auth0: (0, import_mysql_core.unique)("AUTH0").on(table.auth0)
    };
  }
);
var profileCategories = (0, import_mysql_core.mysqlTable)(
  "profileCategories",
  {
    id: (0, import_mysql_core.int)().autoincrement().notNull(),
    parentId: (0, import_mysql_core.int)(),
    description: (0, import_mysql_core.varchar)({ length: 50 }).default("").notNull(),
    descriptionEn: (0, import_mysql_core.varchar)("description_en", { length: 255 }).notNull(),
    descriptionEs: (0, import_mysql_core.varchar)("description_es", { length: 255 }),
    emoji: (0, import_mysql_core.text)(),
    percentageBase: (0, import_mysql_core.float)("percentage_base"),
    cacheVariation: (0, import_mysql_core.float)("cache_variation").default(1)
  },
  (table) => {
    return {
      profileCategoriesId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "profileCategories_id" }),
      description: (0, import_mysql_core.unique)("description").on(table.description)
    };
  }
);
var profileWhitelabels = (0, import_mysql_core.mysqlTable)(
  "profileWhitelabels",
  {
    id: (0, import_mysql_core.varchar)({ length: 36 }).notNull(),
    profileId: (0, import_mysql_core.varchar)({ length: 36 }).notNull().references(() => profiles.id, { onUpdate: "cascade" }),
    whitelabel: (0, import_mysql_core.varchar)({ length: 24 }),
    createdAt: (0, import_mysql_core.timestamp)("created_at", { mode: "date" }).defaultNow().notNull(),
    registeredFromSource: (0, import_mysql_core.varchar)({ length: 255 }),
    registeredFromCampaign: (0, import_mysql_core.varchar)({ length: 255 }),
    registeredFromMedium: (0, import_mysql_core.varchar)({ length: 255 }),
    registeredFromContent: (0, import_mysql_core.varchar)({ length: 255 }),
    registeredFromAdId: (0, import_mysql_core.varchar)({ length: 255 }),
    registeredFromAdName: (0, import_mysql_core.varchar)({ length: 255 })
  },
  (table) => {
    return {
      index3: (0, import_mysql_core.index)("profileWhitelabels_index_3").on(table.whitelabel),
      profileWhitelabelsId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "profileWhitelabels_id" })
    };
  }
);
var profiles = (0, import_mysql_core.mysqlTable)(
  "profiles",
  {
    id: (0, import_mysql_core.varchar)({ length: 36 }).notNull(),
    createdAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    deletedNetworks: (0, import_mysql_core.varchar)({ length: 100 }),
    deletedAt: (0, import_mysql_core.datetime)({ mode: "date" })
  },
  (table) => {
    return {
      id: (0, import_mysql_core.index)("id").on(table.id),
      profilesId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "profiles_id" })
    };
  }
);
var progressiveRegistrationAnswers = (0, import_mysql_core.mysqlTable)(
  "progressive_registration_answers",
  {
    id: (0, import_mysql_core.varchar)({ length: 36 }).notNull(),
    question: (0, import_mysql_core.varchar)({ length: 36 }).notNull().references(() => progressiveRegistrationQuestions.id, { onDelete: "cascade" }),
    squidId: (0, import_mysql_core.varchar)({ length: 50 }).notNull().references(() => profiles.id),
    answer: (0, import_mysql_core.varchar)({ length: 255 }),
    answerOption: (0, import_mysql_core.varchar)("answer_option", { length: 36 }).references(() => progressiveRegistrationQuestionOptions.id, { onDelete: "cascade" }),
    createdAt: (0, import_mysql_core.timestamp)("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: (0, import_mysql_core.timestamp)("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: (0, import_mysql_core.timestamp)("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      fkProgressiveRegistrationIdx1: (0, import_mysql_core.index)("fk_progressive_registration_idx1").on(table.question),
      fkProgressiveRegistrationIdx2: (0, import_mysql_core.index)("fk_progressive_registration_idx2").on(table.squidId),
      answersIdx: (0, import_mysql_core.index)("answers_idx").on(table.id),
      progressiveRegistrationAnswersId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "progressive_registration_answers_id" }),
      id: (0, import_mysql_core.unique)("id").on(table.id)
    };
  }
);
var progressiveRegistrationGroups = (0, import_mysql_core.mysqlTable)(
  "progressive_registration_groups",
  {
    id: (0, import_mysql_core.varchar)({ length: 36 }).notNull(),
    label: (0, import_mysql_core.varchar)({ length: 36 }).notNull().references(() => progressiveRegistrationLabels.id, { onDelete: "cascade", onUpdate: "cascade" }),
    icon: (0, import_mysql_core.varchar)({ length: 255 }).default("poll-people").notNull(),
    order: (0, import_mysql_core.int)().default(1).notNull(),
    createdAt: (0, import_mysql_core.timestamp)("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: (0, import_mysql_core.timestamp)("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: (0, import_mysql_core.timestamp)("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      label: (0, import_mysql_core.index)("LABEL").on(table.label),
      groupIdx: (0, import_mysql_core.index)("group_idx").on(table.id),
      progressiveRegistrationGroupsId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "progressive_registration_groups_id" }),
      id: (0, import_mysql_core.unique)("id").on(table.id)
    };
  }
);
var progressiveRegistrationLabels = (0, import_mysql_core.mysqlTable)(
  "progressive_registration_labels",
  {
    id: (0, import_mysql_core.varchar)({ length: 36 }).notNull(),
    pt: (0, import_mysql_core.varchar)({ length: 255 }),
    en: (0, import_mysql_core.varchar)({ length: 255 }),
    es: (0, import_mysql_core.varchar)({ length: 255 }),
    createdAt: (0, import_mysql_core.timestamp)("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: (0, import_mysql_core.timestamp)("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: (0, import_mysql_core.timestamp)("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      labelIdx: (0, import_mysql_core.index)("label_idx").on(table.id),
      progressiveRegistrationLabelsId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "progressive_registration_labels_id" }),
      id: (0, import_mysql_core.unique)("id").on(table.id)
    };
  }
);
var progressiveRegistrationQuestionOptions = (0, import_mysql_core.mysqlTable)(
  "progressive_registration_question_options",
  {
    id: (0, import_mysql_core.varchar)({ length: 36 }).notNull(),
    question: (0, import_mysql_core.varchar)({ length: 255 }).notNull().references(() => progressiveRegistrationQuestions.id, { onDelete: "cascade" }),
    label: (0, import_mysql_core.varchar)({ length: 36 }).notNull().references(() => progressiveRegistrationLabels.id, { onDelete: "cascade" }),
    createdAt: (0, import_mysql_core.timestamp)("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: (0, import_mysql_core.timestamp)("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: (0, import_mysql_core.timestamp)("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      fkProgressiveRegistrationQuestionOptionsProgressiveReIdx: (0, import_mysql_core.index)("fk_progressive_registration_question_options_progressive_re_idx").on(table.question),
      label: (0, import_mysql_core.index)("label").on(table.label),
      optionsIdx: (0, import_mysql_core.index)("options_idx").on(table.id),
      progressiveRegistrationQuestionOptionsId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "progressive_registration_question_options_id" }),
      id: (0, import_mysql_core.unique)("id").on(table.id)
    };
  }
);
var progressiveRegistrationQuestions = (0, import_mysql_core.mysqlTable)(
  "progressive_registration_questions",
  {
    id: (0, import_mysql_core.varchar)({ length: 36 }).notNull(),
    label: (0, import_mysql_core.varchar)({ length: 36 }).notNull().references(() => progressiveRegistrationLabels.id, { onDelete: "cascade" }),
    type: (0, import_mysql_core.varchar)({ length: 255 }).default("text").notNull(),
    group: (0, import_mysql_core.varchar)({ length: 255 }).notNull().references(() => progressiveRegistrationGroups.id, { onDelete: "cascade" }),
    createdAt: (0, import_mysql_core.timestamp)("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: (0, import_mysql_core.timestamp)("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: (0, import_mysql_core.timestamp)("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      fkProgressiveRegistrationQuestionsProgressiveRegistratIdx: (0, import_mysql_core.index)("fk_progressive_registration_questions_progressive_registrat_idx").on(table.group),
      label: (0, import_mysql_core.index)("LABEL").on(table.label),
      questionsIdx: (0, import_mysql_core.index)("questions_idx").on(table.id),
      progressiveRegistrationQuestionsId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "progressive_registration_questions_id" }),
      id: (0, import_mysql_core.unique)("id").on(table.id)
    };
  }
);
var progressiveRegistrationWhitelabels = (0, import_mysql_core.mysqlTable)(
  "progressive_registration_whitelabels",
  {
    whitelabel: (0, import_mysql_core.varchar)({ length: 24 }).default("hub").notNull(),
    question: (0, import_mysql_core.varchar)({ length: 255 }).notNull().references(() => progressiveRegistrationQuestions.id, { onDelete: "cascade", onUpdate: "cascade" }),
    group: (0, import_mysql_core.varchar)({ length: 255 }).notNull().references(() => progressiveRegistrationGroups.id, { onDelete: "cascade" }),
    active: (0, import_mysql_core.tinyint)().default(0).notNull(),
    order: (0, import_mysql_core.int)().default(1).notNull(),
    required: (0, import_mysql_core.tinyint)().default(0).notNull(),
    createdAt: (0, import_mysql_core.timestamp)("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: (0, import_mysql_core.timestamp)("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: (0, import_mysql_core.timestamp)("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      fkProgressiveRegistrationWhitelabelsProgressiveRegistrIdx: (0, import_mysql_core.index)("fk_progressive_registration_whitelabels_progressive_registr_idx").on(table.question),
      progressiveRegistrationWhitelabelsWhitelabelQuestionGroup: (0, import_mysql_core.primaryKey)({ columns: [table.whitelabel, table.question, table.group], name: "progressive_registration_whitelabels_whitelabel_question_group" })
    };
  }
);
var races = (0, import_mysql_core.mysqlTable)(
  "races",
  {
    id: (0, import_mysql_core.int)().autoincrement().notNull(),
    description: (0, import_mysql_core.varchar)({ length: 45 }).notNull(),
    descriptionEn: (0, import_mysql_core.varchar)("description_en", { length: 45 }).notNull(),
    descriptionEs: (0, import_mysql_core.varchar)("description_es", { length: 255 })
  },
  (table) => {
    return {
      racesId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "races_id" })
    };
  }
);
var scopesToken = (0, import_mysql_core.mysqlTable)(
  "scopesToken",
  {
    scopeType: (0, import_mysql_core.varchar)({ length: 64 }).notNull(),
    profileId: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    socialNetwork: (0, import_mysql_core.varchar)({ length: 45 }).notNull()
  },
  (table) => {
    return {
      scopesTokenScopeTypeProfileIdSocialNetwork: (0, import_mysql_core.primaryKey)({ columns: [table.scopeType, table.profileId, table.socialNetwork], name: "scopesToken_scopeType_profileId_socialNetwork" })
    };
  }
);
var socialNetworkProfiles = (0, import_mysql_core.mysqlTable)(
  "socialNetworkProfiles",
  {
    id: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    squidId: (0, import_mysql_core.varchar)({ length: 36 }).references(() => profiles.id, { onDelete: "cascade", onUpdate: "cascade" }),
    socialNetwork: (0, import_mysql_core.varchar)({ length: 45 }).notNull(),
    createdAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      socialNetworkProfilesIdSocialNetwork: (0, import_mysql_core.primaryKey)({ columns: [table.id, table.socialNetwork], name: "socialNetworkProfiles_id_socialNetwork" })
    };
  }
);
var socialNetworkProfilesCache = (0, import_mysql_core.mysqlTable)(
  "socialNetworkProfilesCache",
  {
    profileId: (0, import_mysql_core.varchar)({ length: 255 }).notNull(),
    contentType: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    contentValue: (0, import_mysql_core.decimal)({ precision: 10, scale: 2 }),
    createdAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      socialNetworkProfilesCacheProfileIdContentType: (0, import_mysql_core.primaryKey)({ columns: [table.profileId, table.contentType], name: "socialNetworkProfilesCache_profileId_contentType" }),
      socialNetworkProfilesCacheProfileIdIdx: (0, import_mysql_core.unique)("socialNetworkProfilesCache_profileId_IDX").on(table.profileId, table.contentType)
    };
  }
);
var socialNetworkProfilesCacheNew = (0, import_mysql_core.mysqlTable)("socialNetworkProfilesCache_new", {
  profileId: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
  contentType: (0, import_mysql_core.varchar)("ContentType", { length: 100 }).notNull(),
  contentValue: (0, import_mysql_core.decimal)({ precision: 10, scale: 2 }),
  createdAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`),
  updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`)
});
var socialNetworkProfilesCategories = (0, import_mysql_core.mysqlTable)(
  "socialNetworkProfilesCategories",
  {
    id: (0, import_mysql_core.int)().autoincrement().notNull(),
    categoryId: (0, import_mysql_core.int)().notNull().references(() => profileCategories.id, { onUpdate: "cascade" }),
    profileId: (0, import_mysql_core.varchar)({ length: 50 }).notNull().references(() => socialNetworkProfiles.id, { onUpdate: "cascade" }),
    socialNetwork: (0, import_mysql_core.varchar)({ length: 45 }).notNull(),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`)
  },
  (table) => {
    return {
      socialNetwork: (0, import_mysql_core.index)("socialNetwork").on(table.socialNetwork),
      socialNetworkProfilesCategoriesId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "socialNetworkProfilesCategories_id" })
    };
  }
);
var socialNetworkProfilesCategoriesWhitelabels = (0, import_mysql_core.mysqlTable)(
  "socialNetworkProfilesCategories_whitelabels",
  {
    id: (0, import_mysql_core.int)().autoincrement().notNull(),
    categoryId: (0, import_mysql_core.int)(),
    profileId: (0, import_mysql_core.varchar)({ length: 36 }),
    socialNetwork: (0, import_mysql_core.varchar)({ length: 45 }),
    whitelabel: (0, import_mysql_core.varchar)({ length: 24 }),
    organization: (0, import_mysql_core.varchar)({ length: 24 }),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`)
  },
  (table) => {
    return {
      socialNetworkProfilesCategoriesWhitelabelsId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "socialNetworkProfilesCategories_whitelabels_id" }),
      socialNetworkProfilesCategoriesUn: (0, import_mysql_core.unique)("socialNetworkProfilesCategories_UN").on(table.categoryId, table.profileId, table.socialNetwork, table.whitelabel, table.organization)
    };
  }
);
var socialNetworkProfilesWhitelabels = (0, import_mysql_core.mysqlTable)(
  "socialNetworkProfiles_whitelabels",
  {
    id: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    squidId: (0, import_mysql_core.varchar)({ length: 36 }).references(() => profiles.id),
    socialNetwork: (0, import_mysql_core.varchar)({ length: 45 }).notNull(),
    whitelabel: (0, import_mysql_core.varchar)({ length: 24 }).default("-").notNull(),
    organization: (0, import_mysql_core.varchar)({ length: 24 }).default("-").notNull(),
    createdAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      socialNetworkProfilesWhitelabelsIdSocialNetworkWhitelabel: (0, import_mysql_core.primaryKey)({ columns: [table.id, table.socialNetwork, table.whitelabel], name: "socialNetworkProfiles_whitelabels_id_socialNetwork_whitelabel" })
    };
  }
);
var stopWords = (0, import_mysql_core.mysqlTable)(
  "stopWords",
  {
    id: (0, import_mysql_core.int)().autoincrement().notNull(),
    word: (0, import_mysql_core.varchar)({ length: 255 }).notNull()
  },
  (table) => {
    return {
      stopWordsId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "stopWords_id" })
    };
  }
);
var tiktokProfiles = (0, import_mysql_core.mysqlTable)(
  "tiktokProfiles",
  {
    id: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    openId: (0, import_mysql_core.varchar)({ length: 50 }),
    unionId: (0, import_mysql_core.varchar)({ length: 50 }),
    exists: (0, import_mysql_core.tinyint)().default(1),
    verified: (0, import_mysql_core.tinyint)().default(1),
    username: (0, import_mysql_core.varchar)({ length: 255 }).default("Processando"),
    nickname: (0, import_mysql_core.varchar)({ length: 255 }).default("Processando"),
    macro: (0, import_mysql_core.tinyint)().default(0),
    brandUser: (0, import_mysql_core.tinyint)().default(0),
    picture: (0, import_mysql_core.text)(),
    bio: (0, import_mysql_core.text)(),
    engagementRate: (0, import_mysql_core.float)(),
    followers: (0, import_mysql_core.int)().default(0),
    following: (0, import_mysql_core.int)().default(0),
    likes: (0, import_mysql_core.float)(),
    averageLikes: (0, import_mysql_core.float)(),
    comments: (0, import_mysql_core.float)(),
    averageComments: (0, import_mysql_core.float)(),
    shares: (0, import_mysql_core.float)(),
    averageShares: (0, import_mysql_core.float)(),
    views: (0, import_mysql_core.float)(),
    averageViews: (0, import_mysql_core.float)(),
    createdAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    lastPictureUpdatedAt: (0, import_mysql_core.datetime)({ mode: "date" }),
    tcmStatus: (0, import_mysql_core.varchar)({ length: 15 }),
    insertOrigin: (0, import_mysql_core.varchar)({ length: 50 }),
    processAt: (0, import_mysql_core.datetime)({ mode: "date" }),
    hasCreatorsInsights: (0, import_mysql_core.tinyint)().default(0)
  },
  (table) => {
    return {
      usernameIdx: (0, import_mysql_core.index)("tiktokProfiles_username_IDX").on(table.username),
      processAtIdx: (0, import_mysql_core.index)("tiktokProfiles_processAt_IDX").on(table.processAt),
      tiktokProfilesId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "tiktokProfiles_id" })
    };
  }
);
var tiktokTokens = (0, import_mysql_core.mysqlTable)(
  "tiktokTokens",
  {
    profileId: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    valid: (0, import_mysql_core.tinyint)().default(1),
    status: (0, import_mysql_core.varchar)({ length: 1e3 }),
    accessToken: (0, import_mysql_core.varchar)({ length: 512 }),
    refreshToken: (0, import_mysql_core.varchar)({ length: 128 }),
    expiresAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`),
    createdAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`)
  },
  (table) => {
    return {
      validIdx: (0, import_mysql_core.index)("tiktokTokens_valid_IDX").on(table.valid),
      tiktokTokensProfileId: (0, import_mysql_core.primaryKey)({ columns: [table.profileId], name: "tiktokTokens_profileId" })
    };
  }
);
var twitterProfiles = (0, import_mysql_core.mysqlTable)(
  "twitterProfiles",
  {
    id: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    username: (0, import_mysql_core.varchar)({ length: 255 }).default("Processando").notNull(),
    fullName: (0, import_mysql_core.varchar)({ length: 255 }).default("").notNull(),
    picture: (0, import_mysql_core.varchar)({ length: 255 }).default("Processando").notNull(),
    followers: (0, import_mysql_core.int)().default(0).notNull(),
    follows: (0, import_mysql_core.int)().default(0).notNull(),
    bio: (0, import_mysql_core.text)(),
    createdAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    brandUser: (0, import_mysql_core.tinyint)().default(0).notNull(),
    exists: (0, import_mysql_core.tinyint)().default(1).notNull(),
    macro: (0, import_mysql_core.tinyint)().default(0),
    engagementRate: (0, import_mysql_core.float)(),
    totalRetweets: (0, import_mysql_core.float)(),
    totalLikes: (0, import_mysql_core.float)(),
    totalRetweetsReceived: (0, import_mysql_core.float)(),
    averageLikes: (0, import_mysql_core.float)(),
    averageRetweets: (0, import_mysql_core.float)(),
    totalTweets: (0, import_mysql_core.float)(),
    averageRepliesByLikes: (0, import_mysql_core.float)(),
    averageRepliesByTweet: (0, import_mysql_core.float)(),
    repliesRate: (0, import_mysql_core.float)(),
    effectiveImpressionReach: (0, import_mysql_core.float)(),
    averageImpressions: (0, import_mysql_core.float)(),
    countReplies: (0, import_mysql_core.int)(),
    adTweetsCount: (0, import_mysql_core.float)(),
    engagementRateAd: (0, import_mysql_core.float)(),
    tweetPostAdPerformance: (0, import_mysql_core.float)(),
    insertOrigin: (0, import_mysql_core.varchar)({ length: 50 }),
    processAt: (0, import_mysql_core.datetime)({ mode: "date" }),
    hasCreatorsInsights: (0, import_mysql_core.tinyint)().default(0)
  },
  (table) => {
    return {
      processAtIdx: (0, import_mysql_core.index)("twitterProfiles_processAt_IDX").on(table.processAt),
      twitterProfilesId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "twitterProfiles_id" })
    };
  }
);
var twitterTokens = (0, import_mysql_core.mysqlTable)(
  "twitterTokens",
  {
    profileId: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    createdAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`),
    valid: (0, import_mysql_core.tinyint)(),
    accessToken: (0, import_mysql_core.varchar)({ length: 256 }),
    oauthSecretToken: (0, import_mysql_core.varchar)({ length: 256 }),
    refreshToken: (0, import_mysql_core.varchar)({ length: 256 }),
    expiresIn: (0, import_mysql_core.int)().default(0)
  },
  (table) => {
    return {
      valid: (0, import_mysql_core.index)("twitterTokens_valid").on(table.valid),
      twitterTokensProfileId: (0, import_mysql_core.primaryKey)({ columns: [table.profileId], name: "twitterTokens_profileId" })
    };
  }
);
var youtubeProfiles = (0, import_mysql_core.mysqlTable)(
  "youtubeProfiles",
  {
    id: (0, import_mysql_core.varchar)({ length: 50 }).notNull(),
    googleId: (0, import_mysql_core.varchar)({ length: 255 }),
    exists: (0, import_mysql_core.tinyint)().default(1).notNull(),
    searchable: (0, import_mysql_core.tinyint)().default(1).notNull(),
    notSearchReason: (0, import_mysql_core.varchar)({ length: 255 }),
    email: (0, import_mysql_core.varchar)({ length: 255 }),
    channelTitle: (0, import_mysql_core.varchar)({ length: 255 }).default("Processando").notNull(),
    username: (0, import_mysql_core.varchar)({ length: 255 }).default("Processando").notNull(),
    picture: (0, import_mysql_core.varchar)({ length: 255 }).default("Processando").notNull(),
    fullName: (0, import_mysql_core.varchar)({ length: 255 }),
    description: (0, import_mysql_core.text)(),
    bio: (0, import_mysql_core.text)(),
    customUrl: (0, import_mysql_core.varchar)({ length: 255 }).default("Processando"),
    country: (0, import_mysql_core.varchar)({ length: 36 }).default("Processando").notNull(),
    since: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    followers: (0, import_mysql_core.int)().default(0).notNull(),
    subscribers: (0, import_mysql_core.int)().default(0).notNull(),
    engagementRate: (0, import_mysql_core.float)(),
    engagementRatePositive: (0, import_mysql_core.float)(),
    engagementRateNegative: (0, import_mysql_core.float)(),
    viewsRate: (0, import_mysql_core.float)(),
    viewsMedian: (0, import_mysql_core.float)(),
    comments: (0, import_mysql_core.int)().default(0),
    identificationComments: (0, import_mysql_core.int)().default(0),
    identificationLikes: (0, import_mysql_core.int)().default(0),
    identificationDislikes: (0, import_mysql_core.int)().default(0),
    averageComments: (0, import_mysql_core.float)(),
    averageLikes: (0, import_mysql_core.float)(),
    averageDislikes: (0, import_mysql_core.float)(),
    shares: (0, import_mysql_core.int)().default(0),
    averageShares: (0, import_mysql_core.float)(),
    commentLikesRate: (0, import_mysql_core.float)(),
    commentViewsRate: (0, import_mysql_core.float)(),
    averageViewsDuration: (0, import_mysql_core.int)().default(0),
    averageViewPercentage: (0, import_mysql_core.float)(),
    averageVideoDuration: (0, import_mysql_core.float)(),
    videoEffectiveReach: (0, import_mysql_core.float)(),
    videos: (0, import_mysql_core.int)().default(0),
    identificationVideos: (0, import_mysql_core.int)().default(0),
    views: (0, import_mysql_core.bigint)({ mode: "number" }),
    identificationViews: (0, import_mysql_core.int)().default(0),
    privacyStatus: (0, import_mysql_core.varchar)({ length: 36 }).default("Processando").notNull(),
    language: (0, import_mysql_core.varchar)({ length: 36 }),
    createdAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core.datetime)({ mode: "date" }).default(import_drizzle_orm.sql`(CURRENT_TIMESTAMP)`).notNull(),
    logstashProcessedAt: (0, import_mysql_core.datetime)({ mode: "date" }),
    macro: (0, import_mysql_core.tinyint)().default(0),
    brandUser: (0, import_mysql_core.tinyint)().default(0),
    insertOrigin: (0, import_mysql_core.varchar)({ length: 50 }),
    processAt: (0, import_mysql_core.datetime)({ mode: "date" }),
    hasCreatorsInsights: (0, import_mysql_core.tinyint)().default(0)
  },
  (table) => {
    return {
      youtuberofilesSearchableIdx: (0, import_mysql_core.index)("youtuberofiles_searchable_index").on(table.searchable),
      googleIdIdx: (0, import_mysql_core.index)("youtubeProfiles_googleId_IDX").on(table.googleId),
      processAtIdx: (0, import_mysql_core.index)("youtubeProfiles_processAt_IDX").on(table.processAt),
      youtubeProfilesId: (0, import_mysql_core.primaryKey)({ columns: [table.id], name: "youtubeProfiles_id" })
    };
  }
);
var fullInstagramProfileAll = (0, import_mysql_core.mysqlView)("full_instagram_profile_all", {
  id: (0, import_mysql_core.int)().default(0).notNull(),
  squidid: (0, import_mysql_core.int)().default(0).notNull(),
  username: (0, import_mysql_core.int)().default(0).notNull(),
  identifiedat: (0, import_mysql_core.int)().default(0).notNull(),
  followers: (0, import_mysql_core.int)().default(0).notNull(),
  following: (0, import_mysql_core.int)().default(0).notNull(),
  picture: (0, import_mysql_core.int)().default(0).notNull(),
  engagementrate: (0, import_mysql_core.int)().default(0).notNull(),
  isbusiness: (0, import_mysql_core.int)().default(0).notNull(),
  searchable: (0, import_mysql_core.int)().default(0).notNull(),
  facebooklinked: (0, import_mysql_core.int)().default(0).notNull(),
  name: (0, import_mysql_core.int)().default(0).notNull(),
  email: (0, import_mysql_core.int)().default(0).notNull(),
  birthday: (0, import_mysql_core.int)().default(0).notNull(),
  gender: (0, import_mysql_core.int)().default(0).notNull(),
  phone: (0, import_mysql_core.int)().default(0).notNull(),
  address: (0, import_mysql_core.int)().default(0).notNull(),
  addressNumber: (0, import_mysql_core.int)().default(0).notNull(),
  complement: (0, import_mysql_core.int)().default(0).notNull(),
  city: (0, import_mysql_core.int)().default(0).notNull(),
  uf: (0, import_mysql_core.int)().default(0).notNull(),
  zipcode: (0, import_mysql_core.int)().default(0).notNull(),
  document: (0, import_mysql_core.int)().default(0).notNull(),
  loginUid: (0, import_mysql_core.int)().default(0).notNull(),
  recordEmployment: (0, import_mysql_core.int)().default(0).notNull(),
  isPersonAccount: (0, import_mysql_core.int)().default(0).notNull(),
  registeredat: (0, import_mysql_core.int)().default(0).notNull(),
  race: (0, import_mysql_core.int)().default(0).notNull(),
  blackuser: (0, import_mysql_core.int)().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm.sql`select 1 AS \`id\`,1 AS \`squidid\`,1 AS \`username\`,1 AS \`identifiedat\`,1 AS \`followers\`,1 AS \`following\`,1 AS \`picture\`,1 AS \`engagementrate\`,1 AS \`isbusiness\`,1 AS \`searchable\`,1 AS \`facebooklinked\`,1 AS \`name\`,1 AS \`email\`,1 AS \`birthday\`,1 AS \`gender\`,1 AS \`phone\`,1 AS \`address\`,1 AS \`addressNumber\`,1 AS \`complement\`,1 AS \`city\`,1 AS \`uf\`,1 AS \`zipcode\`,1 AS \`document\`,1 AS \`loginUid\`,1 AS \`recordEmployment\`,1 AS \`isPersonAccount\`,1 AS \`registeredat\`,1 AS \`race\`,1 AS \`blackuser\``);
var vwProgressiveRegistrationAnswers = (0, import_mysql_core.mysqlView)("vw_progressive_registration_answers", {
  squidId: (0, import_mysql_core.int)().default(0).notNull(),
  groupId: (0, import_mysql_core.int)("group_id").default(0).notNull(),
  groupPt: (0, import_mysql_core.int)("group_pt").default(0).notNull(),
  groupEn: (0, import_mysql_core.int)("group_en").default(0).notNull(),
  groupEs: (0, import_mysql_core.int)("group_es").default(0).notNull(),
  questionId: (0, import_mysql_core.int)("question_id").default(0).notNull(),
  questionPt: (0, import_mysql_core.int)("question_pt").default(0).notNull(),
  questionEn: (0, import_mysql_core.int)("question_en").default(0).notNull(),
  questionEs: (0, import_mysql_core.int)("question_es").default(0).notNull(),
  questionType: (0, import_mysql_core.int)("question_type").default(0).notNull(),
  answerOptionId: (0, import_mysql_core.int)("answer_option_id").default(0).notNull(),
  answerPt: (0, import_mysql_core.int)("answer_pt").default(0).notNull(),
  answerEs: (0, import_mysql_core.int)("answer_es").default(0).notNull(),
  answerEn: (0, import_mysql_core.int)("answer_en").default(0).notNull(),
  answer: (0, import_mysql_core.int)().default(0).notNull(),
  whitelabel: (0, import_mysql_core.int)().default(0).notNull(),
  whitelabelQuestionActive: (0, import_mysql_core.int)("whitelabel_question_active").default(0).notNull(),
  whitelabelQuestionRequired: (0, import_mysql_core.int)("whitelabel_question_required").default(0).notNull(),
  createdAt: (0, import_mysql_core.int)("created_at").default(0).notNull(),
  updatedAt: (0, import_mysql_core.int)("updated_at").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm.sql`select 1 AS \`squidId\`,1 AS \`group_id\`,1 AS \`group_pt\`,1 AS \`group_en\`,1 AS \`group_es\`,1 AS \`question_id\`,1 AS \`question_pt\`,1 AS \`question_en\`,1 AS \`question_es\`,1 AS \`question_type\`,1 AS \`answer_option_id\`,1 AS \`answer_pt\`,1 AS \`answer_es\`,1 AS \`answer_en\`,1 AS \`answer\`,1 AS \`whitelabel\`,1 AS \`whitelabel_question_active\`,1 AS \`whitelabel_question_required\`,1 AS \`created_at\`,1 AS \`updated_at\``);
var fullInstagramProfile = (0, import_mysql_core.mysqlView)("full_instagram_profile", {
  id: (0, import_mysql_core.int)().default(0).notNull(),
  squidid: (0, import_mysql_core.int)().default(0).notNull(),
  username: (0, import_mysql_core.int)().default(0).notNull(),
  identifiedat: (0, import_mysql_core.int)().default(0).notNull(),
  followers: (0, import_mysql_core.int)().default(0).notNull(),
  following: (0, import_mysql_core.int)().default(0).notNull(),
  engagementrate: (0, import_mysql_core.int)().default(0).notNull(),
  score: (0, import_mysql_core.int)().default(0).notNull(),
  isbusiness: (0, import_mysql_core.int)().default(0).notNull(),
  facebooklinked: (0, import_mysql_core.int)().default(0).notNull(),
  name: (0, import_mysql_core.int)().default(0).notNull(),
  email: (0, import_mysql_core.int)().default(0).notNull(),
  birthday: (0, import_mysql_core.int)().default(0).notNull(),
  gender: (0, import_mysql_core.int)().default(0).notNull(),
  phone: (0, import_mysql_core.int)().default(0).notNull(),
  address: (0, import_mysql_core.int)().default(0).notNull(),
  complement: (0, import_mysql_core.int)().default(0).notNull(),
  city: (0, import_mysql_core.int)().default(0).notNull(),
  uf: (0, import_mysql_core.int)().default(0).notNull(),
  country: (0, import_mysql_core.int)().default(0).notNull(),
  zipcode: (0, import_mysql_core.int)().default(0).notNull(),
  document: (0, import_mysql_core.int)().default(0).notNull(),
  isPersonAccount: (0, import_mysql_core.int)().default(0).notNull(),
  registeredat: (0, import_mysql_core.int)().default(0).notNull(),
  allowSuggestionEmail: (0, import_mysql_core.int)().default(0).notNull(),
  race: (0, import_mysql_core.int)().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm.sql`select 1 AS \`id\`,1 AS \`squidid\`,1 AS \`username\`,1 AS \`identifiedat\`,1 AS \`followers\`,1 AS \`following\`,1 AS \`engagementrate\`,1 AS \`score\`,1 AS \`isbusiness\`,1 AS \`facebooklinked\`,1 AS \`name\`,1 AS \`email\`,1 AS \`birthday\`,1 AS \`gender\`,1 AS \`phone\`,1 AS \`address\`,1 AS \`complement\`,1 AS \`city\`,1 AS \`uf\`,1 AS \`country\`,1 AS \`zipcode\`,1 AS \`document\`,1 AS \`isPersonAccount\`,1 AS \`registeredat\`,1 AS \`allowSuggestionEmail\`,1 AS \`race\``);
var instagramProfileMetrics = (0, import_mysql_core.mysqlView)("instagram_profile_metrics", {
  id: (0, import_mysql_core.int)().default(0).notNull(),
  squidId: (0, import_mysql_core.int)().default(0).notNull(),
  username: (0, import_mysql_core.int)().default(0).notNull(),
  exists: (0, import_mysql_core.int)().default(0).notNull(),
  searchable: (0, import_mysql_core.int)().default(0).notNull(),
  followers: (0, import_mysql_core.int)().default(0).notNull(),
  isBusiness: (0, import_mysql_core.int)().default(0).notNull(),
  scrapperEngagementRate: (0, import_mysql_core.int)().default(0).notNull(),
  totalMedias: (0, import_mysql_core.int)().default(0).notNull(),
  medias: (0, import_mysql_core.int)().default(0).notNull(),
  follows: (0, import_mysql_core.int)().default(0).notNull(),
  likes: (0, import_mysql_core.int)().default(0).notNull(),
  comments: (0, import_mysql_core.int)().default(0).notNull(),
  tier: (0, import_mysql_core.int)().default(0).notNull(),
  score: (0, import_mysql_core.int)().default(0).notNull(),
  score1: (0, import_mysql_core.int)().default(0).notNull(),
  score2: (0, import_mysql_core.int)().default(0).notNull(),
  score3: (0, import_mysql_core.int)().default(0).notNull(),
  score4: (0, import_mysql_core.int)().default(0).notNull(),
  score5: (0, import_mysql_core.int)().default(0).notNull(),
  storiesEffectiveReach: (0, import_mysql_core.int)().default(0).notNull(),
  profileViews: (0, import_mysql_core.int)().default(0).notNull(),
  hasMediaKit: (0, import_mysql_core.int)().default(0).notNull(),
  totalStoriesImpressions: (0, import_mysql_core.int)().default(0).notNull(),
  totalStoriesReach: (0, import_mysql_core.int)().default(0).notNull(),
  totalStoriesReplies: (0, import_mysql_core.int)().default(0).notNull(),
  totalStoriesTapBacks: (0, import_mysql_core.int)().default(0).notNull(),
  totalPostsReach: (0, import_mysql_core.int)().default(0).notNull(),
  totalPostsSaves: (0, import_mysql_core.int)().default(0).notNull(),
  totalPostsImpressions: (0, import_mysql_core.int)().default(0).notNull(),
  numberPostsActivityScore: (0, import_mysql_core.int)().default(0).notNull(),
  numberStoriesScore: (0, import_mysql_core.int)().default(0).notNull(),
  daysPostsScore: (0, import_mysql_core.int)().default(0).notNull(),
  daysStoriesScore: (0, import_mysql_core.int)().default(0).notNull(),
  advertisingPostsEngagementRate: (0, import_mysql_core.int)().default(0).notNull(),
  noAdvertisingPostsEngagementRate: (0, import_mysql_core.int)().default(0).notNull(),
  advertisingStoriesEngagementRate: (0, import_mysql_core.int)().default(0).notNull(),
  noAdvertisingStoriesEngagementRate: (0, import_mysql_core.int)().default(0).notNull(),
  advertisingContentPercentage: (0, import_mysql_core.int)().default(0).notNull(),
  advertisingPostsPercentage: (0, import_mysql_core.int)().default(0).notNull(),
  advertisingStoriesPercentage: (0, import_mysql_core.int)().default(0).notNull(),
  postImageEngagementRate: (0, import_mysql_core.int)().default(0).notNull(),
  postCarouselEngagementRate: (0, import_mysql_core.int)().default(0).notNull(),
  postVideoEngagementRate: (0, import_mysql_core.int)().default(0).notNull(),
  storiesVideoEngagementRate: (0, import_mysql_core.int)().default(0).notNull(),
  storiesImageEngagementRate: (0, import_mysql_core.int)().default(0).notNull(),
  storiesCompleteEngagementRate: (0, import_mysql_core.int)().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm.sql`select 1 AS \`id\`,1 AS \`squidId\`,1 AS \`username\`,1 AS \`exists\`,1 AS \`searchable\`,1 AS \`followers\`,1 AS \`isBusiness\`,1 AS \`scrapperEngagementRate\`,1 AS \`totalMedias\`,1 AS \`medias\`,1 AS \`follows\`,1 AS \`likes\`,1 AS \`comments\`,1 AS \`tier\`,1 AS \`score\`,1 AS \`score1\`,1 AS \`score2\`,1 AS \`score3\`,1 AS \`score4\`,1 AS \`score5\`,1 AS \`storiesEffectiveReach\`,1 AS \`profileViews\`,1 AS \`hasMediaKit\`,1 AS \`totalStoriesImpressions\`,1 AS \`totalStoriesReach\`,1 AS \`totalStoriesReplies\`,1 AS \`totalStoriesTapBacks\`,1 AS \`totalPostsReach\`,1 AS \`totalPostsSaves\`,1 AS \`totalPostsImpressions\`,1 AS \`numberPostsActivityScore\`,1 AS \`numberStoriesScore\`,1 AS \`daysPostsScore\`,1 AS \`daysStoriesScore\`,1 AS \`advertisingPostsEngagementRate\`,1 AS \`noAdvertisingPostsEngagementRate\`,1 AS \`advertisingStoriesEngagementRate\`,1 AS \`noAdvertisingStoriesEngagementRate\`,1 AS \`advertisingContentPercentage\`,1 AS \`advertisingPostsPercentage\`,1 AS \`advertisingStoriesPercentage\`,1 AS \`postImageEngagementRate\`,1 AS \`postCarouselEngagementRate\`,1 AS \`postVideoEngagementRate\`,1 AS \`storiesVideoEngagementRate\`,1 AS \`storiesImageEngagementRate\`,1 AS \`storiesCompleteEngagementRate\``);
var vwInfluencersToValidateBankAccount = (0, import_mysql_core.mysqlView)("VW_INFLUENCERS_TO_VALIDATE_BANK_ACCOUNT", {
  profileId: (0, import_mysql_core.int)().default(0).notNull(),
  updatedAt: (0, import_mysql_core.int)().default(0).notNull(),
  verificationStatus: (0, import_mysql_core.int)().default(0).notNull(),
  verificationId: (0, import_mysql_core.int)().default(0).notNull(),
  verificatedAt: (0, import_mysql_core.int)().default(0).notNull(),
  bankName: (0, import_mysql_core.int)().default(0).notNull(),
  bankCode: (0, import_mysql_core.int)().default(0).notNull(),
  bankAccountType: (0, import_mysql_core.int)().default(0).notNull(),
  bankAccountAgency: (0, import_mysql_core.int)().default(0).notNull(),
  bankAccountNumber: (0, import_mysql_core.int)().default(0).notNull(),
  bankAccountDigit: (0, import_mysql_core.int)().default(0).notNull(),
  socialNetwork: (0, import_mysql_core.int)().default(0).notNull(),
  valid: (0, import_mysql_core.int)().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm.sql`select 1 AS \`profileId\`,1 AS \`updatedAt\`,1 AS \`verificationStatus\`,1 AS \`verificationId\`,1 AS \`verificatedAt\`,1 AS \`bankName\`,1 AS \`bankCode\`,1 AS \`bankAccountType\`,1 AS \`bankAccountAgency\`,1 AS \`bankAccountNumber\`,1 AS \`bankAccountDigit\`,1 AS \`socialNetwork\`,1 AS \`valid\``);
var vwInfluencersCanAnticipate = (0, import_mysql_core.mysqlView)("VW_INFLUENCERS_CAN_ANTICIPATE", {
  id: (0, import_mysql_core.int)().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm.sql`select 1 AS \`id\``);
var vwProgressiveRegistrationQuestions = (0, import_mysql_core.mysqlView)("vw_progressive_registration_questions", {
  questionId: (0, import_mysql_core.int)("question_id").default(0).notNull(),
  questionPt: (0, import_mysql_core.int)("question_pt").default(0).notNull(),
  questionEn: (0, import_mysql_core.int)("question_en").default(0).notNull(),
  questionEs: (0, import_mysql_core.int)("question_es").default(0).notNull(),
  questionType: (0, import_mysql_core.int)("question_type").default(0).notNull(),
  groupId: (0, import_mysql_core.int)("group_id").default(0).notNull(),
  groupPt: (0, import_mysql_core.int)("group_pt").default(0).notNull(),
  groupEn: (0, import_mysql_core.int)("group_en").default(0).notNull(),
  groupEs: (0, import_mysql_core.int)("group_es").default(0).notNull(),
  answerOptionId: (0, import_mysql_core.int)("answer_option_id").default(0).notNull(),
  answerPt: (0, import_mysql_core.int)("answer_pt").default(0).notNull(),
  answerEs: (0, import_mysql_core.int)("answer_es").default(0).notNull(),
  answerEn: (0, import_mysql_core.int)("answer_en").default(0).notNull(),
  whitelabel: (0, import_mysql_core.int)().default(0).notNull(),
  whitelabelQuestionActive: (0, import_mysql_core.int)("whitelabel_question_active").default(0).notNull(),
  whitelabelQuestionRequired: (0, import_mysql_core.int)("whitelabel_question_required").default(0).notNull(),
  whitelabelQuestionCreatedAt: (0, import_mysql_core.int)("whitelabel_question_created_at").default(0).notNull(),
  whitelabelQuestionUpdatedAt: (0, import_mysql_core.int)("whitelabel_question_updated_at").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm.sql`select 1 AS \`question_id\`,1 AS \`question_pt\`,1 AS \`question_en\`,1 AS \`question_es\`,1 AS \`question_type\`,1 AS \`group_id\`,1 AS \`group_pt\`,1 AS \`group_en\`,1 AS \`group_es\`,1 AS \`answer_option_id\`,1 AS \`answer_pt\`,1 AS \`answer_es\`,1 AS \`answer_en\`,1 AS \`whitelabel\`,1 AS \`whitelabel_question_active\`,1 AS \`whitelabel_question_required\`,1 AS \`whitelabel_question_created_at\`,1 AS \`whitelabel_question_updated_at\``);

// src/databases/nps/schema.ts
var schema_exports2 = {};
__export(schema_exports2, {
  research: () => research,
  researchAnswer: () => researchAnswer,
  researchQuestion: () => researchQuestion,
  researchQuestionGroup: () => researchQuestionGroup
});
var import_drizzle_orm2 = require("drizzle-orm");
var import_mysql_core2 = require("drizzle-orm/mysql-core");
var research = (0, import_mysql_core2.mysqlTable)(
  "research",
  {
    id: (0, import_mysql_core2.varchar)({ length: 36 }).notNull(),
    userId: (0, import_mysql_core2.varchar)("user_id", { length: 255 }).notNull(),
    userName: (0, import_mysql_core2.varchar)("user_name", { length: 150 }),
    userEmail: (0, import_mysql_core2.varchar)("user_email", { length: 100 }),
    campaignId: (0, import_mysql_core2.varchar)("campaign_id", { length: 255 }).notNull(),
    campaignTitle: (0, import_mysql_core2.varchar)("campaign_title", { length: 150 }),
    organizationId: (0, import_mysql_core2.varchar)("organization_id", { length: 255 }),
    organizationName: (0, import_mysql_core2.varchar)("organization_name", { length: 255 }),
    systemType: (0, import_mysql_core2.varchar)("system_type", { length: 50 }).notNull(),
    questionGroupId: (0, import_mysql_core2.varchar)("question_group_id", { length: 36 }).notNull().references(() => researchQuestionGroup.id),
    seenTime: (0, import_mysql_core2.int)("seen_time").default(0).notNull(),
    done: (0, import_mysql_core2.tinyint)().default(0).notNull(),
    createdAt: (0, import_mysql_core2.datetime)("created_at", { mode: "string", fsp: 3 }).notNull(),
    updatedAt: (0, import_mysql_core2.datetime)("updated_at", { mode: "string" }),
    deletedAt: (0, import_mysql_core2.datetime)("deleted_at", { mode: "string" })
  },
  (table) => {
    return {
      questionGroupId: (0, import_mysql_core2.index)("question_group_id").on(table.questionGroupId),
      researchId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "research_id" }),
      userId: (0, import_mysql_core2.unique)("user_id").on(table.userId, table.campaignId, table.questionGroupId)
    };
  }
);
var researchAnswer = (0, import_mysql_core2.mysqlTable)(
  "research_answer",
  {
    id: (0, import_mysql_core2.varchar)({ length: 36 }).notNull(),
    researchAnswer: (0, import_mysql_core2.varchar)("research_answer", { length: 255 }),
    score: (0, import_mysql_core2.int)(),
    sharedQuestionId: (0, import_mysql_core2.varchar)("shared_question_id", { length: 36 }).references(() => researchQuestion.sharedQuestionId),
    researchId: (0, import_mysql_core2.varchar)("research_id", { length: 36 }).references(() => research.id, { onDelete: "cascade" }),
    createdAt: (0, import_mysql_core2.datetime)("created_at", { mode: "string" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core2.datetime)("updated_at", { mode: "string" }),
    deletedAt: (0, import_mysql_core2.datetime)("deleted_at", { mode: "string" }),
    optionalQuestion: (0, import_mysql_core2.int)("optional_question").default(0)
  },
  (table) => {
    return {
      sharedQuestionId: (0, import_mysql_core2.index)("shared_question_id").on(table.sharedQuestionId),
      researchAnswerId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "research_answer_id" })
    };
  }
);
var researchQuestion = (0, import_mysql_core2.mysqlTable)(
  "research_question",
  {
    id: (0, import_mysql_core2.varchar)({ length: 36 }).notNull(),
    sharedQuestionId: (0, import_mysql_core2.varchar)("shared_question_id", { length: 36 }),
    question: (0, import_mysql_core2.varchar)({ length: 255 }),
    questionType: (0, import_mysql_core2.varchar)("question_type", { length: 50 }),
    questionGroupId: (0, import_mysql_core2.varchar)("question_group_id", { length: 36 }).references(() => researchQuestionGroup.id),
    language: (0, import_mysql_core2.varchar)({ length: 5 }).default("pt-br").notNull(),
    createdAt: (0, import_mysql_core2.datetime)("created_at", { mode: "string" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core2.datetime)("updated_at", { mode: "string" }),
    deletedAt: (0, import_mysql_core2.datetime)("deleted_at", { mode: "string" }),
    optional: (0, import_mysql_core2.int)().default(0)
  },
  (table) => {
    return {
      questionGroupId: (0, import_mysql_core2.index)("question_group_id").on(table.questionGroupId),
      researchQuestionId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "research_question_id" }),
      sharedQuestionId: (0, import_mysql_core2.unique)("shared_question_id").on(table.sharedQuestionId, table.language)
    };
  }
);
var researchQuestionGroup = (0, import_mysql_core2.mysqlTable)(
  "research_question_group",
  {
    id: (0, import_mysql_core2.varchar)({ length: 36 }).notNull(),
    name: (0, import_mysql_core2.varchar)({ length: 255 }),
    tag: (0, import_mysql_core2.varchar)({ length: 100 }).notNull(),
    createdAt: (0, import_mysql_core2.datetime)("created_at", { mode: "string" }).default(import_drizzle_orm2.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core2.datetime)("updated_at", { mode: "string" }),
    deletedAt: (0, import_mysql_core2.datetime)("deleted_at", { mode: "string" })
  },
  (table) => {
    return {
      researchQuestionGroupId: (0, import_mysql_core2.primaryKey)({ columns: [table.id], name: "research_question_group_id" }),
      tag: (0, import_mysql_core2.unique)("tag").on(table.tag)
    };
  }
);

// src/databases/payment/schema.ts
var schema_exports3 = {};
__export(schema_exports3, {
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
var import_drizzle_orm3 = require("drizzle-orm");
var import_mysql_core3 = require("drizzle-orm/mysql-core");
var charges = (0, import_mysql_core3.mysqlTable)(
  "charges",
  {
    seqId: (0, import_mysql_core3.bigint)({ mode: "number" }).autoincrement().notNull(),
    createdAt: (0, import_mysql_core3.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core3.datetime)({ mode: "date" }),
    deletedAt: (0, import_mysql_core3.datetime)({ mode: "date" }),
    amount: (0, import_mysql_core3.double)({ precision: 10, scale: 2 }).notNull(),
    totalAmount: (0, import_mysql_core3.double)({ precision: 10, scale: 2 }).notNull(),
    fees: (0, import_mysql_core3.double)({ precision: 10, scale: 2 }).notNull(),
    dueDate: (0, import_mysql_core3.date)({ mode: "date" }),
    currency: (0, import_mysql_core3.varchar)({ length: 3 }).default("BRL").notNull(),
    paymentOrderUrl: (0, import_mysql_core3.longtext)(),
    paymentGatewayTransactionId: (0, import_mysql_core3.longtext)()
  },
  (table) => {
    return {
      chargesSeqId: (0, import_mysql_core3.primaryKey)({ columns: [table.seqId], name: "charges_seqId" })
    };
  }
);
var companyFiles = (0, import_mysql_core3.mysqlTable)(
  "companyFiles",
  {
    seqId: (0, import_mysql_core3.bigint)({ mode: "number" }).autoincrement().notNull(),
    squidId: (0, import_mysql_core3.varchar)({ length: 36 }).notNull(),
    companyDocument: (0, import_mysql_core3.varchar)({ length: 50 }).notNull(),
    urlStorage: (0, import_mysql_core3.text)(),
    status: (0, import_mysql_core3.varchar)({ length: 40 }).notNull(),
    reason: (0, import_mysql_core3.varchar)({ length: 100 }),
    uploadedAt: (0, import_mysql_core3.date)({ mode: "date" }),
    validatedAt: (0, import_mysql_core3.date)({ mode: "date" }),
    deletedAt: (0, import_mysql_core3.date)({ mode: "date" })
  },
  (table) => {
    return {
      companyFilesSeqId: (0, import_mysql_core3.primaryKey)({ columns: [table.seqId], name: "companyFiles_seqId" })
    };
  }
);
var compositions = (0, import_mysql_core3.mysqlTable)(
  "compositions",
  {
    seqId: (0, import_mysql_core3.int)().autoincrement().notNull(),
    chargeId: (0, import_mysql_core3.int)().notNull(),
    squidId: (0, import_mysql_core3.varchar)({ length: 36 }),
    username: (0, import_mysql_core3.varchar)({ length: 255 }),
    paymentType: (0, import_mysql_core3.varchar)({ length: 5 }),
    document: (0, import_mysql_core3.varchar)({ length: 50 }),
    fullName: (0, import_mysql_core3.varchar)({ length: 255 }),
    birthday: (0, import_mysql_core3.date)({ mode: "date" }),
    transactionId: (0, import_mysql_core3.varchar)({ length: 60 }),
    dueDate: (0, import_mysql_core3.date)({ mode: "date" }),
    transactionStatus: (0, import_mysql_core3.varchar)({ length: 50 }),
    netValue: (0, import_mysql_core3.float)(),
    grossValue: (0, import_mysql_core3.float)(),
    nf: (0, import_mysql_core3.varchar)({ length: 255 }),
    pis: (0, import_mysql_core3.varchar)({ length: 50 }),
    address: (0, import_mysql_core3.varchar)({ length: 255 }),
    addressNumber: (0, import_mysql_core3.varchar)({ length: 45 }),
    neighborhood: (0, import_mysql_core3.varchar)({ length: 255 }),
    zipcode: (0, import_mysql_core3.varchar)({ length: 15 }),
    city: (0, import_mysql_core3.varchar)({ length: 255 }),
    uf: (0, import_mysql_core3.varchar)({ length: 255 }),
    country: (0, import_mysql_core3.varchar)({ length: 255 }),
    bankAccountNumber: (0, import_mysql_core3.varchar)({ length: 50 }),
    bankAccountDigit: (0, import_mysql_core3.varchar)({ length: 5 }),
    bankAccountAgency: (0, import_mysql_core3.varchar)({ length: 11 }),
    bankCode: (0, import_mysql_core3.varchar)({ length: 10 }),
    bankName: (0, import_mysql_core3.varchar)({ length: 100 }),
    bankAccountType: (0, import_mysql_core3.varchar)({ length: 20 })
  },
  (table) => {
    return {
      compositionsSeqId: (0, import_mysql_core3.primaryKey)({ columns: [table.seqId], name: "compositions_seqId" }),
      transactionId: (0, import_mysql_core3.unique)("transactionId").on(table.transactionId)
    };
  }
);
var customerPayments = (0, import_mysql_core3.mysqlTable)(
  "customerPayments",
  {
    seqId: (0, import_mysql_core3.bigint)({ mode: "number" }).autoincrement().notNull(),
    transactionId: (0, import_mysql_core3.varchar)({ length: 60 }).notNull().references(() => transactions.transactionId),
    createdAt: (0, import_mysql_core3.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core3.datetime)({ mode: "date" }),
    deletedAt: (0, import_mysql_core3.datetime)({ mode: "date" })
  },
  (table) => {
    return {
      transactionId: (0, import_mysql_core3.index)("transactionId").on(table.transactionId),
      customerPaymentsSeqId: (0, import_mysql_core3.primaryKey)({ columns: [table.seqId], name: "customerPayments_seqId" })
    };
  }
);
var influencerPayments = (0, import_mysql_core3.mysqlTable)(
  "influencerPayments",
  {
    seqId: (0, import_mysql_core3.bigint)({ mode: "number" }).autoincrement().notNull(),
    transactionId: (0, import_mysql_core3.varchar)({ length: 60 }).notNull().references(() => transactions.transactionId, { onDelete: "cascade", onUpdate: "cascade" }),
    recruitmentId: (0, import_mysql_core3.varchar)({ length: 60 }).notNull(),
    campaignId: (0, import_mysql_core3.varchar)({ length: 50 }).notNull(),
    campaignName: (0, import_mysql_core3.varchar)({ length: 150 }).notNull(),
    campaignEndDate: (0, import_mysql_core3.datetime)({ mode: "date" }),
    campaignTimezone: (0, import_mysql_core3.varchar)({ length: 100 }),
    dateUsedToCalculate: (0, import_mysql_core3.datetime)({ mode: "date" }),
    squidId: (0, import_mysql_core3.varchar)({ length: 60 }).notNull(),
    instagramUsername: (0, import_mysql_core3.varchar)({ length: 50 }),
    instagramProfileId: (0, import_mysql_core3.bigint)({ mode: "number" }),
    youtubeChannel: (0, import_mysql_core3.varchar)({ length: 50 }),
    youtubeChannelId: (0, import_mysql_core3.varchar)({ length: 36 }),
    pinterestUsername: (0, import_mysql_core3.varchar)({ length: 50 }),
    pinterestProfileId: (0, import_mysql_core3.varchar)({ length: 36 }),
    nfId: (0, import_mysql_core3.varchar)({ length: 60 }),
    whitelabelId: (0, import_mysql_core3.varchar)({ length: 24 }),
    whitelabelDomain: (0, import_mysql_core3.varchar)({ length: 150 }),
    createdAt: (0, import_mysql_core3.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core3.datetime)({ mode: "date" }),
    deletedAt: (0, import_mysql_core3.datetime)({ mode: "date" }),
    paymentStatus: (0, import_mysql_core3.varchar)({ length: 50 }).default("").notNull(),
    amount: (0, import_mysql_core3.float)().notNull(),
    sourceId: (0, import_mysql_core3.bigint)({ mode: "number" }),
    socialNetwork: (0, import_mysql_core3.varchar)({ length: 255 }),
    socialNetworkId: (0, import_mysql_core3.varchar)({ length: 255 }),
    socialNetworkUsername: (0, import_mysql_core3.varchar)({ length: 255 }),
    responsiblePayment: (0, import_mysql_core3.varchar)({ length: 200 }),
    responsibleId: (0, import_mysql_core3.varchar)({ length: 200 }),
    idPipefy: (0, import_mysql_core3.varchar)({ length: 60 }),
    description: (0, import_mysql_core3.varchar)({ length: 50 }),
    customDueDate: (0, import_mysql_core3.date)({ mode: "date" }),
    note: (0, import_mysql_core3.varchar)({ length: 1e3 }),
    scopeId: (0, import_mysql_core3.varchar)({ length: 32 })
  },
  (table) => {
    return {
      deletedAtIdx: (0, import_mysql_core3.index)("influencerPayments_deletedAt_IDX").on(table.deletedAt),
      idPipefyIdx: (0, import_mysql_core3.index)("influencerPayments_idPipefy_IDX").on(table.idPipefy, table.campaignId, table.seqId),
      influencerPaymentsSeqId: (0, import_mysql_core3.primaryKey)({ columns: [table.seqId], name: "influencerPayments_seqId" })
    };
  }
);
var influencerZoopBankAccounts = (0, import_mysql_core3.mysqlTable)(
  "influencerZoopBankAccounts",
  {
    seqId: (0, import_mysql_core3.bigint)({ mode: "number" }).autoincrement().notNull(),
    squidId: (0, import_mysql_core3.varchar)({ length: 60 }).notNull(),
    paymentGatewaySellerId: (0, import_mysql_core3.varchar)({ length: 60 }).notNull(),
    paymentGatewayBankAccountId: (0, import_mysql_core3.varchar)({ length: 60 }).notNull(),
    paymentGatewayBankAccountToken: (0, import_mysql_core3.varchar)({ length: 60 }).default(""),
    bankCode: (0, import_mysql_core3.varchar)({ length: 10 }).notNull(),
    bankName: (0, import_mysql_core3.varchar)({ length: 100 }).notNull(),
    bankAccountHolderName: (0, import_mysql_core3.varchar)({ length: 100 }),
    bankAccountHolderDocument: (0, import_mysql_core3.varchar)({ length: 15 }).notNull(),
    bankAccountHolderTradingName: (0, import_mysql_core3.varchar)({ length: 100 }),
    bankAccountRoutingNumber: (0, import_mysql_core3.varchar)({ length: 10 }).notNull(),
    bankAccountNumber: (0, import_mysql_core3.varchar)({ length: 50 }).notNull(),
    bankAccountVerificationNumber: (0, import_mysql_core3.varchar)({ length: 1 }).notNull(),
    bankAccountType: (0, import_mysql_core3.varchar)({ length: 20 }).notNull(),
    bankAccountHolderType: (0, import_mysql_core3.varchar)({ length: 20 }).notNull(),
    createdAt: (0, import_mysql_core3.datetime)({ mode: "date" }),
    updatedAt: (0, import_mysql_core3.datetime)({ mode: "date" }),
    deletedAt: (0, import_mysql_core3.datetime)({ mode: "date" })
  },
  (table) => {
    return {
      influencerZoopBankAccountsSeqId: (0, import_mysql_core3.primaryKey)({ columns: [table.seqId], name: "influencerZoopBankAccounts_seqId" }),
      squidId: (0, import_mysql_core3.unique)("squidId").on(table.squidId)
    };
  }
);
var nfCnaes = (0, import_mysql_core3.mysqlTable)(
  "nf_cnaes",
  {
    id: (0, import_mysql_core3.int)().autoincrement().notNull(),
    uf: (0, import_mysql_core3.char)({ length: 2 }).notNull(),
    codigo: (0, import_mysql_core3.varchar)({ length: 45 }).notNull(),
    createdAt: (0, import_mysql_core3.datetime)("created_at", { mode: "date" }).default(import_drizzle_orm3.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core3.datetime)("updated_at", { mode: "date" }).default(import_drizzle_orm3.sql`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      nfCnaesId: (0, import_mysql_core3.primaryKey)({ columns: [table.id], name: "nf_cnaes_id" }),
      idUnique: (0, import_mysql_core3.unique)("id_UNIQUE").on(table.id)
    };
  }
);
var nfImport = (0, import_mysql_core3.mysqlTable)(
  "nf_import",
  {
    id: (0, import_mysql_core3.int)().autoincrement().notNull(),
    objectId: (0, import_mysql_core3.varchar)({ length: 24 }).notNull(),
    numeroNf: (0, import_mysql_core3.varchar)("numero_nf", { length: 45 }).notNull(),
    dataEmissao: (0, import_mysql_core3.datetime)("data_emissao", { mode: "date" }).notNull(),
    ufGerador: (0, import_mysql_core3.char)("uf_gerador", { length: 2 }).notNull(),
    codigoMunicipio: (0, import_mysql_core3.varchar)("codigo_municipio", { length: 45 }),
    razaoSocial: (0, import_mysql_core3.varchar)("razao_social", { length: 450 }).notNull(),
    identificacaoPrestador: (0, import_mysql_core3.varchar)("identificacao_prestador", { length: 14 }).notNull(),
    inscricaoEstadual: (0, import_mysql_core3.varchar)("inscricao_estadual", { length: 14 }),
    inscricaoMunicipal: (0, import_mysql_core3.varchar)("inscricao_municipal", { length: 45 }),
    discriminacaoServico: (0, import_mysql_core3.longtext)("discriminacao_servico"),
    valorAliquota: (0, import_mysql_core3.float)("valor_aliquota"),
    valorServico: (0, import_mysql_core3.float)("valor_servico"),
    valorIss: (0, import_mysql_core3.float)("valor_iss"),
    issRetido: (0, import_mysql_core3.float)("iss_retido"),
    listaServico: (0, import_mysql_core3.varchar)("lista_servico", { length: 45 }),
    municipioServico: (0, import_mysql_core3.varchar)("municipio_servico", { length: 10 }),
    chave: (0, import_mysql_core3.varchar)({ length: 90 }).notNull(),
    nfStorageTmp: (0, import_mysql_core3.varchar)("nf_storage_tmp", { length: 150 }).notNull(),
    codigoVerificacao: (0, import_mysql_core3.varchar)("codigo_verificacao", { length: 45 }).notNull(),
    createdAt: (0, import_mysql_core3.datetime)("created_at", { mode: "date" }).default(import_drizzle_orm3.sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: (0, import_mysql_core3.datetime)("updated_at", { mode: "date" }).default(import_drizzle_orm3.sql`(CURRENT_TIMESTAMP)`).notNull(),
    deletedAt: (0, import_mysql_core3.datetime)("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      nfImportId: (0, import_mysql_core3.primaryKey)({ columns: [table.id], name: "nf_import_id" }),
      idUnique: (0, import_mysql_core3.unique)("id_UNIQUE").on(table.id),
      chaveUnique: (0, import_mysql_core3.unique)("chave_UNIQUE").on(table.chave)
    };
  }
);
var nfs = (0, import_mysql_core3.mysqlTable)(
  "nfs",
  {
    seqId: (0, import_mysql_core3.bigint)({ mode: "number" }).autoincrement().notNull(),
    nfId: (0, import_mysql_core3.varchar)({ length: 60 }).notNull(),
    transactionId: (0, import_mysql_core3.varchar)({ length: 60 }).notNull().references(() => transactions.transactionId),
    squidId: (0, import_mysql_core3.varchar)({ length: 60 }).notNull(),
    serialnumber: (0, import_mysql_core3.varchar)({ length: 45 }),
    value: (0, import_mysql_core3.double)(),
    emissionDate: (0, import_mysql_core3.date)({ mode: "date" }),
    urlStorage: (0, import_mysql_core3.text)().notNull(),
    xmlUrlStorage: (0, import_mysql_core3.text)(),
    backofficeApproved: (0, import_mysql_core3.tinyint)().default(0).notNull(),
    parsedValue: (0, import_mysql_core3.double)(),
    parsedEmissionDate: (0, import_mysql_core3.date)({ mode: "date" }),
    parsedSerialNumber: (0, import_mysql_core3.varchar)({ length: 45 }),
    parsedCnae: (0, import_mysql_core3.varchar)({ length: 45 }),
    issValue: (0, import_mysql_core3.float)(),
    imported: (0, import_mysql_core3.varchar)({ length: 90 }),
    createdAt: (0, import_mysql_core3.datetime)({ mode: "date" }).default(import_drizzle_orm3.sql`(CURRENT_TIMESTAMP)`).notNull(),
    deletedAt: (0, import_mysql_core3.datetime)({ mode: "date" })
  },
  (table) => {
    return {
      transactionId: (0, import_mysql_core3.index)("transactionId").on(table.transactionId),
      nfsSeqId: (0, import_mysql_core3.primaryKey)({ columns: [table.seqId], name: "nfs_seqId" })
    };
  }
);
var transactionBankAccounts = (0, import_mysql_core3.mysqlTable)(
  "transactionBankAccounts",
  {
    seqId: (0, import_mysql_core3.bigint)({ mode: "number" }).autoincrement().notNull(),
    transactionId: (0, import_mysql_core3.varchar)({ length: 60 }).notNull().references(() => transactions.transactionId),
    bankCode: (0, import_mysql_core3.varchar)({ length: 20 }).notNull(),
    bankName: (0, import_mysql_core3.varchar)({ length: 100 }).notNull(),
    bankAccountHolderName: (0, import_mysql_core3.varchar)({ length: 150 }).notNull(),
    bankAccountHolderDocument: (0, import_mysql_core3.varchar)({ length: 100 }).notNull(),
    bankAccountHolderTradingName: (0, import_mysql_core3.varchar)({ length: 150 }),
    bankAccountRoutingNumber: (0, import_mysql_core3.varchar)({ length: 20 }).notNull(),
    bankAccountNumber: (0, import_mysql_core3.bigint)({ mode: "number" }).notNull(),
    bankAccountVerificationNumber: (0, import_mysql_core3.varchar)({ length: 3 }),
    bankAccountType: (0, import_mysql_core3.varchar)({ length: 20 }).default("checking").notNull(),
    bankAccountHolderType: (0, import_mysql_core3.varchar)({ length: 2 }).default("PF").notNull(),
    paymentGatewayToken: (0, import_mysql_core3.varchar)({ length: 60 }),
    createdAt: (0, import_mysql_core3.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core3.datetime)({ mode: "date" }),
    deletedAt: (0, import_mysql_core3.datetime)({ mode: "date" }),
    paymentGatewayWithdrawTransactionId: (0, import_mysql_core3.varchar)({ length: 60 }),
    paymentGatewayWithdrawAuthorizationCode: (0, import_mysql_core3.varchar)({ length: 100 })
  },
  (table) => {
    return {
      transactionBankAccountsSeqId: (0, import_mysql_core3.primaryKey)({ columns: [table.seqId], name: "transactionBankAccounts_seqId" }),
      transactionIdUnique: (0, import_mysql_core3.unique)("transactionId_UNIQUE").on(table.transactionId)
    };
  }
);
var transactionBeneficiaries = (0, import_mysql_core3.mysqlTable)(
  "transactionBeneficiaries",
  {
    seqId: (0, import_mysql_core3.bigint)({ mode: "number" }).autoincrement().notNull(),
    transactionId: (0, import_mysql_core3.varchar)({ length: 60 }).notNull().references(() => transactions.transactionId, { onDelete: "cascade", onUpdate: "cascade" }).references(() => transactions.transactionId),
    beneficiaryTradingName: (0, import_mysql_core3.varchar)({ length: 150 }),
    beneficiaryFirstName: (0, import_mysql_core3.varchar)({ length: 100 }),
    beneficiaryLastName: (0, import_mysql_core3.varchar)({ length: 100 }),
    beneficiaryEmail: (0, import_mysql_core3.varchar)({ length: 100 }).notNull(),
    beneficiaryDocumentNumber: (0, import_mysql_core3.varchar)({ length: 20 }).notNull(),
    beneficiaryBirthDate: (0, import_mysql_core3.date)({ mode: "date" }),
    paymentGatewayId: (0, import_mysql_core3.varchar)({ length: 60 }),
    createdAt: (0, import_mysql_core3.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core3.datetime)({ mode: "date" }),
    deletedAt: (0, import_mysql_core3.datetime)({ mode: "date" }),
    recordEmployment: (0, import_mysql_core3.varchar)({ length: 50 }),
    companyFileId: (0, import_mysql_core3.int)()
  },
  (table) => {
    return {
      transactionBeneficiariesSeqId: (0, import_mysql_core3.primaryKey)({ columns: [table.seqId], name: "transactionBeneficiaries_seqId" }),
      transactionIdUnique: (0, import_mysql_core3.unique)("transactionId_UNIQUE").on(table.transactionId)
    };
  }
);
var transactions = (0, import_mysql_core3.mysqlTable)(
  "transactions",
  {
    transactionId: (0, import_mysql_core3.varchar)({ length: 60 }).notNull(),
    squidId: (0, import_mysql_core3.varchar)({ length: 60 }),
    transactionStatus: (0, import_mysql_core3.varchar)({ length: 50 }).default("pending").notNull(),
    paymentType: (0, import_mysql_core3.varchar)({ length: 5 }),
    netValue: (0, import_mysql_core3.float)().notNull(),
    grossValue: (0, import_mysql_core3.float)().notNull(),
    inssAliquot: (0, import_mysql_core3.float)(),
    inssValue: (0, import_mysql_core3.float)(),
    irAliquot: (0, import_mysql_core3.float)(),
    irDeduct: (0, import_mysql_core3.float)(),
    irValue: (0, import_mysql_core3.float)(),
    nfId: (0, import_mysql_core3.varchar)({ length: 60 }),
    issAliquot: (0, import_mysql_core3.float)(),
    issValue: (0, import_mysql_core3.float)(),
    agent: (0, import_mysql_core3.tinyint)().default(0),
    credit: (0, import_mysql_core3.float)(),
    transactionStatusDetail: (0, import_mysql_core3.varchar)({ length: 450 }),
    amount: (0, import_mysql_core3.float)().notNull(),
    anticipationValue: (0, import_mysql_core3.float)(),
    anticipationAliquot: (0, import_mysql_core3.float)(),
    anticipationContractAccepted: (0, import_mysql_core3.varchar)({ length: 450 }),
    anticipationReceiptUrl: (0, import_mysql_core3.varchar)({ length: 450 }),
    anticipationIgnore: (0, import_mysql_core3.tinyint)().default(0).notNull(),
    inOrOut: (0, import_mysql_core3.varchar)({ length: 3 }).default("out").notNull(),
    currency: (0, import_mysql_core3.varchar)({ length: 3 }).default("BRL").notNull(),
    transactionIdSource: (0, import_mysql_core3.varchar)({ length: 60 }),
    transactionErrorDetail: (0, import_mysql_core3.varchar)({ length: 200 }),
    paymentGatewayTransactionId: (0, import_mysql_core3.varchar)({ length: 255 }),
    paymentGatewayReceiptUrl: (0, import_mysql_core3.varchar)({ length: 450 }),
    paymentGatewayReceiptBankUrl: (0, import_mysql_core3.varchar)({ length: 450 }),
    dueDate: (0, import_mysql_core3.date)({ mode: "date" }),
    transactionDate: (0, import_mysql_core3.datetime)({ mode: "date" }).notNull(),
    paidedAt: (0, import_mysql_core3.datetime)({ mode: "date" }),
    withdrawingDate: (0, import_mysql_core3.datetime)({ mode: "date" }),
    createdAt: (0, import_mysql_core3.datetime)({ mode: "date" }).notNull(),
    updatedAt: (0, import_mysql_core3.datetime)({ mode: "date" }),
    deletedAt: (0, import_mysql_core3.datetime)({ mode: "date" })
  },
  (table) => {
    return {
      transactionStatusIdx: (0, import_mysql_core3.index)("transactions_transactionStatus_IDX").on(table.transactionStatus),
      deletedAtIdx: (0, import_mysql_core3.index)("transactions_deletedAt_IDX").on(table.deletedAt),
      transactionsTransactionId: (0, import_mysql_core3.primaryKey)({ columns: [table.transactionId], name: "transactions_transactionId" })
    };
  }
);
var transactionsHistory = (0, import_mysql_core3.mysqlTable)("transactionsHistory", {
  transactionId: (0, import_mysql_core3.varchar)({ length: 60 }).notNull(),
  squidId: (0, import_mysql_core3.varchar)({ length: 60 }),
  transactionStatus: (0, import_mysql_core3.varchar)({ length: 50 }).default("pending").notNull(),
  paymentType: (0, import_mysql_core3.varchar)({ length: 5 }),
  netValue: (0, import_mysql_core3.float)().notNull(),
  grossValue: (0, import_mysql_core3.float)().notNull(),
  inssAliquot: (0, import_mysql_core3.float)(),
  inssValue: (0, import_mysql_core3.float)(),
  irAliquot: (0, import_mysql_core3.float)(),
  inOrOut: (0, import_mysql_core3.varchar)({ length: 3 }).default("out").notNull(),
  irDeduct: (0, import_mysql_core3.float)(),
  irValue: (0, import_mysql_core3.float)(),
  nfId: (0, import_mysql_core3.varchar)({ length: 60 }),
  issAliquot: (0, import_mysql_core3.float)(),
  issValue: (0, import_mysql_core3.float)(),
  anticipationAliquot: (0, import_mysql_core3.float)(),
  anticipationValue: (0, import_mysql_core3.float)(),
  anticipationContractAccepted: (0, import_mysql_core3.varchar)({ length: 450 }),
  paymentGatewayTransactionId: (0, import_mysql_core3.longtext)(),
  currency: (0, import_mysql_core3.varchar)({ length: 3 }).default("BRL").notNull(),
  amount: (0, import_mysql_core3.float)().notNull(),
  transactionStatusDetail: (0, import_mysql_core3.varchar)({ length: 450 }),
  transactionErrorDetail: (0, import_mysql_core3.varchar)({ length: 200 }),
  transactionDate: (0, import_mysql_core3.datetime)({ mode: "date" }).notNull(),
  dueDate: (0, import_mysql_core3.date)({ mode: "date" }),
  createdAt: (0, import_mysql_core3.datetime)({ mode: "date" }).notNull(),
  updatedAt: (0, import_mysql_core3.datetime)({ mode: "date" }),
  paidedAt: (0, import_mysql_core3.datetime)({ mode: "date" }),
  withdrawingDate: (0, import_mysql_core3.datetime)({ mode: "date" }),
  deletedAt: (0, import_mysql_core3.datetime)({ mode: "date" })
});
var transactionsSchedule = (0, import_mysql_core3.mysqlTable)(
  "transactions_schedule",
  {
    id: (0, import_mysql_core3.int)().autoincrement().notNull(),
    scheduleDate: (0, import_mysql_core3.date)("schedule_date", { mode: "date" }).notNull(),
    flowId: (0, import_mysql_core3.int)("flow_id").notNull(),
    description: (0, import_mysql_core3.varchar)({ length: 45 }),
    createdAt: (0, import_mysql_core3.datetime)("created_at", { mode: "date" }).default(import_drizzle_orm3.sql`(CURRENT_TIMESTAMP)`),
    updatedAt: (0, import_mysql_core3.datetime)("updated_at", { mode: "date" }).default(import_drizzle_orm3.sql`(CURRENT_TIMESTAMP)`)
  },
  (table) => {
    return {
      transactionsScheduleId: (0, import_mysql_core3.primaryKey)({ columns: [table.id], name: "transactions_schedule_id" }),
      idUnique: (0, import_mysql_core3.unique)("id_UNIQUE").on(table.id)
    };
  }
);
var transfeeraRawDataCallback = (0, import_mysql_core3.mysqlTable)(
  "transfeeraRawDataCallback",
  {
    id: (0, import_mysql_core3.int)({ unsigned: true }).autoincrement().notNull(),
    header: (0, import_mysql_core3.mediumtext)().notNull(),
    payload: (0, import_mysql_core3.json)(),
    validationTest: (0, import_mysql_core3.json)(),
    createdAt: (0, import_mysql_core3.datetime)("created_at", { mode: "date" }).default(import_drizzle_orm3.sql`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      transfeeraRawDataCallbackId: (0, import_mysql_core3.primaryKey)({ columns: [table.id], name: "transfeeraRawDataCallback_id" })
    };
  }
);
var webhooksLogs = (0, import_mysql_core3.mysqlTable)(
  "webhooks_logs",
  {
    id: (0, import_mysql_core3.int)().autoincrement().notNull(),
    header: (0, import_mysql_core3.longtext)(),
    payload: (0, import_mysql_core3.longtext)(),
    querystring: (0, import_mysql_core3.varchar)({ length: 255 }),
    service: (0, import_mysql_core3.varchar)({ length: 45 }).notNull(),
    authentication: (0, import_mysql_core3.longtext)(),
    createdAt: (0, import_mysql_core3.datetime)("created_at", { mode: "date" }).default(import_drizzle_orm3.sql`(CURRENT_TIMESTAMP)`)
  },
  (table) => {
    return {
      webhooksLogsId: (0, import_mysql_core3.primaryKey)({ columns: [table.id], name: "webhooks_logs_id" }),
      idUnique: (0, import_mysql_core3.unique)("id_UNIQUE").on(table.id)
    };
  }
);
var dueDateTransactions = (0, import_mysql_core3.mysqlView)("dueDate_transactions", {
  dueDate: (0, import_mysql_core3.int)().default(0).notNull(),
  minCreatedAt: (0, import_mysql_core3.int)("min_createdAt").default(0).notNull(),
  maxCreatedAt: (0, import_mysql_core3.int)("max_createdAt").default(0).notNull(),
  countTotal: (0, import_mysql_core3.int)("count_total").default(0).notNull(),
  sumTotal: (0, import_mysql_core3.int)("sum_total").default(0).notNull(),
  countPaid: (0, import_mysql_core3.int)("count_paid").default(0).notNull(),
  somaPaid: (0, import_mysql_core3.int)("soma_paid").default(0).notNull(),
  countNew: (0, import_mysql_core3.int)("count_new").default(0).notNull(),
  somaNew: (0, import_mysql_core3.int)("soma_new").default(0).notNull(),
  countPending: (0, import_mysql_core3.int)("count_pending").default(0).notNull(),
  somaPending: (0, import_mysql_core3.int)("soma_pending").default(0).notNull(),
  countProcessing: (0, import_mysql_core3.int)("count_processing").default(0).notNull(),
  somaProcessing: (0, import_mysql_core3.int)("soma_processing").default(0).notNull(),
  countReadyToPay: (0, import_mysql_core3.int)("count_readyToPay").default(0).notNull(),
  somaReadyToPay: (0, import_mysql_core3.int)("soma_readyToPay").default(0).notNull(),
  countWithdrawing: (0, import_mysql_core3.int)("count_withdrawing").default(0).notNull(),
  somaWithdrawing: (0, import_mysql_core3.int)("soma_withdrawing").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm3.sql`select 1 AS \`dueDate\`,1 AS \`min_createdAt\`,1 AS \`max_createdAt\`,1 AS \`count_total\`,1 AS \`sum_total\`,1 AS \`count_paid\`,1 AS \`soma_paid\`,1 AS \`count_new\`,1 AS \`soma_new\`,1 AS \`count_pending\`,1 AS \`soma_pending\`,1 AS \`count_processing\`,1 AS \`soma_processing\`,1 AS \`count_readyToPay\`,1 AS \`soma_readyToPay\`,1 AS \`count_withdrawing\`,1 AS \`soma_withdrawing\``);
var transactionConsolidated = (0, import_mysql_core3.mysqlView)("transaction_consolidated", {
  transactionId: (0, import_mysql_core3.int)().default(0).notNull(),
  recruitmentId: (0, import_mysql_core3.int)().default(0).notNull(),
  campaignId: (0, import_mysql_core3.int)().default(0).notNull(),
  campaignName: (0, import_mysql_core3.int)().default(0).notNull(),
  squidId: (0, import_mysql_core3.int)().default(0).notNull(),
  instagramUsername: (0, import_mysql_core3.int)().default(0).notNull(),
  instagramProfileId: (0, import_mysql_core3.int)().default(0).notNull(),
  youtubeChannel: (0, import_mysql_core3.int)().default(0).notNull(),
  youtubeChannelId: (0, import_mysql_core3.int)().default(0).notNull(),
  pinterestUsername: (0, import_mysql_core3.int)().default(0).notNull(),
  pinterestProfileId: (0, import_mysql_core3.int)().default(0).notNull(),
  createdAt: (0, import_mysql_core3.int)().default(0).notNull(),
  updatedAt: (0, import_mysql_core3.int)().default(0).notNull(),
  deletedAt: (0, import_mysql_core3.int)().default(0).notNull(),
  paymentStatus: (0, import_mysql_core3.int)().default(0).notNull(),
  amount: (0, import_mysql_core3.int)().default(0).notNull(),
  dueDate: (0, import_mysql_core3.int)().default(0).notNull(),
  transactionStatus: (0, import_mysql_core3.int)().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm3.sql`select 1 AS \`transactionId\`,1 AS \`recruitmentId\`,1 AS \`campaignId\`,1 AS \`campaignName\`,1 AS \`squidId\`,1 AS \`instagramUsername\`,1 AS \`instagramProfileId\`,1 AS \`youtubeChannel\`,1 AS \`youtubeChannelId\`,1 AS \`pinterestUsername\`,1 AS \`pinterestProfileId\`,1 AS \`createdAt\`,1 AS \`updatedAt\`,1 AS \`deletedAt\`,1 AS \`paymentStatus\`,1 AS \`amount\`,1 AS \`dueDate\`,1 AS \`transactionStatus\``);
var vwTransfeeraWebhookReturn = (0, import_mysql_core3.mysqlView)("VW_TRANSFEERA_WEBHOOK_RETURN", {
  webhookId: (0, import_mysql_core3.int)().default(0).notNull(),
  idTransfer: (0, import_mysql_core3.int)().default(0).notNull(),
  transactionId: (0, import_mysql_core3.int)().default(0).notNull(),
  status: (0, import_mysql_core3.int)().default(0).notNull(),
  description: (0, import_mysql_core3.int)().default(0).notNull(),
  savedAt: (0, import_mysql_core3.int)().default(0).notNull(),
  tipo: (0, import_mysql_core3.int)().default(0).notNull(),
  payload: (0, import_mysql_core3.int)().default(0).notNull(),
  signature: (0, import_mysql_core3.int)().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm3.sql`select 1 AS \`webhookId\`,1 AS \`idTransfer\`,1 AS \`transactionId\`,1 AS \`status\`,1 AS \`description\`,1 AS \`savedAt\`,1 AS \`tipo\`,1 AS \`payload\`,1 AS \`signature\``);
var campaignsTransactions = (0, import_mysql_core3.mysqlView)("campaigns_transactions", {
  campaignId: (0, import_mysql_core3.int)().default(0).notNull(),
  campaignName: (0, import_mysql_core3.int)().default(0).notNull(),
  minCreatedAt: (0, import_mysql_core3.int)("min_createdAt").default(0).notNull(),
  maxCreatedAt: (0, import_mysql_core3.int)("max_createdAt").default(0).notNull(),
  minDueDate: (0, import_mysql_core3.int)("min_dueDate").default(0).notNull(),
  maxDueDate: (0, import_mysql_core3.int)("max_dueDate").default(0).notNull(),
  countTotal: (0, import_mysql_core3.int)("count_total").default(0).notNull(),
  sumTotal: (0, import_mysql_core3.int)("sum_total").default(0).notNull(),
  countPaid: (0, import_mysql_core3.int)("count_paid").default(0).notNull(),
  somaPaid: (0, import_mysql_core3.int)("soma_paid").default(0).notNull(),
  countNew: (0, import_mysql_core3.int)("count_new").default(0).notNull(),
  somaNew: (0, import_mysql_core3.int)("soma_new").default(0).notNull(),
  countPending: (0, import_mysql_core3.int)("count_pending").default(0).notNull(),
  somaPending: (0, import_mysql_core3.int)("soma_pending").default(0).notNull(),
  countProcessing: (0, import_mysql_core3.int)("count_processing").default(0).notNull(),
  somaProcessing: (0, import_mysql_core3.int)("soma_processing").default(0).notNull(),
  countReadyToPay: (0, import_mysql_core3.int)("count_readyToPay").default(0).notNull(),
  somaReadyToPay: (0, import_mysql_core3.int)("soma_readyToPay").default(0).notNull(),
  countWithdrawing: (0, import_mysql_core3.int)("count_withdrawing").default(0).notNull(),
  somaWithdrawing: (0, import_mysql_core3.int)("soma_withdrawing").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm3.sql`select 1 AS \`campaignId\`,1 AS \`campaignName\`,1 AS \`min_createdAt\`,1 AS \`max_createdAt\`,1 AS \`min_dueDate\`,1 AS \`max_dueDate\`,1 AS \`count_total\`,1 AS \`sum_total\`,1 AS \`count_paid\`,1 AS \`soma_paid\`,1 AS \`count_new\`,1 AS \`soma_new\`,1 AS \`count_pending\`,1 AS \`soma_pending\`,1 AS \`count_processing\`,1 AS \`soma_processing\`,1 AS \`count_readyToPay\`,1 AS \`soma_readyToPay\`,1 AS \`count_withdrawing\`,1 AS \`soma_withdrawing\``);
var anoMesDueDateTransactions = (0, import_mysql_core3.mysqlView)("ano_mes_dueDate_transactions", {
  anoMes: (0, import_mysql_core3.int)("ano_mes").default(0).notNull(),
  minCreatedAt: (0, import_mysql_core3.int)("min_createdAt").default(0).notNull(),
  maxCreatedAt: (0, import_mysql_core3.int)("max_createdAt").default(0).notNull(),
  minDueDate: (0, import_mysql_core3.int)("min_dueDate").default(0).notNull(),
  maxDueDate: (0, import_mysql_core3.int)("max_dueDate").default(0).notNull(),
  countTotal: (0, import_mysql_core3.int)("count_total").default(0).notNull(),
  sumTotal: (0, import_mysql_core3.int)("sum_total").default(0).notNull(),
  countPaid: (0, import_mysql_core3.int)("count_paid").default(0).notNull(),
  somaPaid: (0, import_mysql_core3.int)("soma_paid").default(0).notNull(),
  countNew: (0, import_mysql_core3.int)("count_new").default(0).notNull(),
  somaNew: (0, import_mysql_core3.int)("soma_new").default(0).notNull(),
  countPending: (0, import_mysql_core3.int)("count_pending").default(0).notNull(),
  somaPending: (0, import_mysql_core3.int)("soma_pending").default(0).notNull(),
  countProcessing: (0, import_mysql_core3.int)("count_processing").default(0).notNull(),
  somaProcessing: (0, import_mysql_core3.int)("soma_processing").default(0).notNull(),
  countReadyToPay: (0, import_mysql_core3.int)("count_readyToPay").default(0).notNull(),
  somaReadyToPay: (0, import_mysql_core3.int)("soma_readyToPay").default(0).notNull(),
  countWithdrawing: (0, import_mysql_core3.int)("count_withdrawing").default(0).notNull(),
  somaWithdrawing: (0, import_mysql_core3.int)("soma_withdrawing").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm3.sql`select 1 AS \`ano_mes\`,1 AS \`min_createdAt\`,1 AS \`max_createdAt\`,1 AS \`min_dueDate\`,1 AS \`max_dueDate\`,1 AS \`count_total\`,1 AS \`sum_total\`,1 AS \`count_paid\`,1 AS \`soma_paid\`,1 AS \`count_new\`,1 AS \`soma_new\`,1 AS \`count_pending\`,1 AS \`soma_pending\`,1 AS \`count_processing\`,1 AS \`soma_processing\`,1 AS \`count_readyToPay\`,1 AS \`soma_readyToPay\`,1 AS \`count_withdrawing\`,1 AS \`soma_withdrawing\``);
var vwTransactionsWithoutInfluencerPayment = (0, import_mysql_core3.mysqlView)("VW_TRANSACTIONS_WITHOUT_INFLUENCER_PAYMENT", {
  transactionId: (0, import_mysql_core3.int)().default(0).notNull(),
  dueDate: (0, import_mysql_core3.int)().default(0).notNull(),
  createdAt: (0, import_mysql_core3.int)().default(0).notNull(),
  deletedAt: (0, import_mysql_core3.int)().default(0).notNull(),
  squidId: (0, import_mysql_core3.int)().default(0).notNull(),
  transactionStatus: (0, import_mysql_core3.int)().default(0).notNull(),
  netValue: (0, import_mysql_core3.int)().default(0).notNull(),
  grossValue: (0, import_mysql_core3.int)().default(0).notNull(),
  paymentType: (0, import_mysql_core3.int)().default(0).notNull(),
  transactionIdInfluencerPayments: (0, import_mysql_core3.int)("transactionId.influencerPayments").default(0).notNull(),
  seqid: (0, import_mysql_core3.int)().default(0).notNull(),
  responsiblePayment: (0, import_mysql_core3.int)().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm3.sql`select 1 AS \`transactionId\`,1 AS \`dueDate\`,1 AS \`createdAt\`,1 AS \`deletedAt\`,1 AS \`squidId\`,1 AS \`transactionStatus\`,1 AS \`netValue\`,1 AS \`grossValue\`,1 AS \`paymentType\`,1 AS \`transactionId.influencerPayments\`,1 AS \`seqid\`,1 AS \`responsiblePayment\``);
var influencersTotalTransactions = (0, import_mysql_core3.mysqlView)("influencers_total_transactions", {
  squidId: (0, import_mysql_core3.int)().default(0).notNull(),
  instagramUsername: (0, import_mysql_core3.int)().default(0).notNull(),
  instagramProfileId: (0, import_mysql_core3.int)().default(0).notNull(),
  youtubeChannel: (0, import_mysql_core3.int)().default(0).notNull(),
  youtubeChannelId: (0, import_mysql_core3.int)().default(0).notNull(),
  pinterestUsername: (0, import_mysql_core3.int)().default(0).notNull(),
  pinterestProfileId: (0, import_mysql_core3.int)().default(0).notNull(),
  minCreatedAt: (0, import_mysql_core3.int)("min_createdAt").default(0).notNull(),
  maxCreatedAt: (0, import_mysql_core3.int)("max_createdAt").default(0).notNull(),
  minDueDate: (0, import_mysql_core3.int)("min_dueDate").default(0).notNull(),
  maxDueDate: (0, import_mysql_core3.int)("max_dueDate").default(0).notNull(),
  countTotal: (0, import_mysql_core3.int)("count_total").default(0).notNull(),
  sumTotal: (0, import_mysql_core3.int)("sum_total").default(0).notNull(),
  countPaid: (0, import_mysql_core3.int)("count_paid").default(0).notNull(),
  somaPaid: (0, import_mysql_core3.int)("soma_paid").default(0).notNull(),
  countNew: (0, import_mysql_core3.int)("count_new").default(0).notNull(),
  somaNew: (0, import_mysql_core3.int)("soma_new").default(0).notNull(),
  countPending: (0, import_mysql_core3.int)("count_pending").default(0).notNull(),
  somaPending: (0, import_mysql_core3.int)("soma_pending").default(0).notNull(),
  countProcessing: (0, import_mysql_core3.int)("count_processing").default(0).notNull(),
  somaProcessing: (0, import_mysql_core3.int)("soma_processing").default(0).notNull(),
  countReadyToPay: (0, import_mysql_core3.int)("count_readyToPay").default(0).notNull(),
  somaReadyToPay: (0, import_mysql_core3.int)("soma_readyToPay").default(0).notNull(),
  countWithdrawing: (0, import_mysql_core3.int)("count_withdrawing").default(0).notNull(),
  somaWithdrawing: (0, import_mysql_core3.int)("soma_withdrawing").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm3.sql`select 1 AS \`squidId\`,1 AS \`instagramUsername\`,1 AS \`instagramProfileId\`,1 AS \`youtubeChannel\`,1 AS \`youtubeChannelId\`,1 AS \`pinterestUsername\`,1 AS \`pinterestProfileId\`,1 AS \`min_createdAt\`,1 AS \`max_createdAt\`,1 AS \`min_dueDate\`,1 AS \`max_dueDate\`,1 AS \`count_total\`,1 AS \`sum_total\`,1 AS \`count_paid\`,1 AS \`soma_paid\`,1 AS \`count_new\`,1 AS \`soma_new\`,1 AS \`count_pending\`,1 AS \`soma_pending\`,1 AS \`count_processing\`,1 AS \`soma_processing\`,1 AS \`count_readyToPay\`,1 AS \`soma_readyToPay\`,1 AS \`count_withdrawing\`,1 AS \`soma_withdrawing\``);
var pagamentosForaDoPrazo = (0, import_mysql_core3.mysqlView)("pagamentos_fora_do_prazo", {
  seqId: (0, import_mysql_core3.int)().default(0).notNull(),
  transactionId: (0, import_mysql_core3.int)().default(0).notNull(),
  recruitmentId: (0, import_mysql_core3.int)().default(0).notNull(),
  campaignId: (0, import_mysql_core3.int)().default(0).notNull(),
  campaignName: (0, import_mysql_core3.int)().default(0).notNull(),
  "date(ipCampaignEndDate)": (0, import_mysql_core3.int)("date(IP.campaignEndDate)").default(0).notNull(),
  squidId: (0, import_mysql_core3.int)().default(0).notNull(),
  instagramUsername: (0, import_mysql_core3.int)().default(0).notNull(),
  youtubeChannel: (0, import_mysql_core3.int)().default(0).notNull(),
  amount: (0, import_mysql_core3.int)().default(0).notNull(),
  "date(ipCreatedAt)": (0, import_mysql_core3.int)("date(IP.createdAt)").default(0).notNull(),
  dueDate: (0, import_mysql_core3.int)().default(0).notNull(),
  transactionStatus: (0, import_mysql_core3.int)().default(0).notNull(),
  paymentType: (0, import_mysql_core3.int)().default(0).notNull(),
  "date(trPaidedAt)": (0, import_mysql_core3.int)("date(TR.paidedAt)").default(0).notNull(),
  nameExp16: (0, import_mysql_core3.int)("Name_exp_16").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm3.sql`select 1 AS \`seqId\`,1 AS \`transactionId\`,1 AS \`recruitmentId\`,1 AS \`campaignId\`,1 AS \`campaignName\`,1 AS \`date(IP.campaignEndDate)\`,1 AS \`squidId\`,1 AS \`instagramUsername\`,1 AS \`youtubeChannel\`,1 AS \`amount\`,1 AS \`date(IP.createdAt)\`,1 AS \`dueDate\`,1 AS \`transactionStatus\`,1 AS \`paymentType\`,1 AS \`date(TR.paidedAt)\`,1 AS \`Name_exp_16\``);
var vmTransactionsReadyToPayInCurrentMonth = (0, import_mysql_core3.mysqlView)("VM_TRANSACTIONS_READY_TO_PAY_IN_CURRENT_MONTH", {
  squidId: (0, import_mysql_core3.int)().default(0).notNull(),
  verificationStatus: (0, import_mysql_core3.int)().default(0).notNull(),
  verificationId: (0, import_mysql_core3.int)().default(0).notNull(),
  transactionId: (0, import_mysql_core3.int)().default(0).notNull(),
  dueDate: (0, import_mysql_core3.int)().default(0).notNull(),
  createdAt: (0, import_mysql_core3.int)().default(0).notNull(),
  netValue: (0, import_mysql_core3.int)().default(0).notNull(),
  transactionStatus: (0, import_mysql_core3.int)().default(0).notNull(),
  paidedAt: (0, import_mysql_core3.int)().default(0).notNull(),
  withdrawingDate: (0, import_mysql_core3.int)().default(0).notNull(),
  verificatedAt: (0, import_mysql_core3.int)().default(0).notNull(),
  updatedAt: (0, import_mysql_core3.int)().default(0).notNull(),
  bankAccountType: (0, import_mysql_core3.int)().default(0).notNull(),
  profileId: (0, import_mysql_core3.int)().default(0).notNull(),
  holderName: (0, import_mysql_core3.int)().default(0).notNull(),
  holderDocument: (0, import_mysql_core3.int)().default(0).notNull(),
  bankCode: (0, import_mysql_core3.int)().default(0).notNull(),
  bankAccountAgency: (0, import_mysql_core3.int)().default(0).notNull(),
  bankAccountNumber: (0, import_mysql_core3.int)().default(0).notNull(),
  bankAccountDigit: (0, import_mysql_core3.int)().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(import_drizzle_orm3.sql`select 1 AS \`squidId\`,1 AS \`verificationStatus\`,1 AS \`verificationId\`,1 AS \`transactionId\`,1 AS \`dueDate\`,1 AS \`createdAt\`,1 AS \`netValue\`,1 AS \`transactionStatus\`,1 AS \`paidedAt\`,1 AS \`withdrawingDate\`,1 AS \`verificatedAt\`,1 AS \`updatedAt\`,1 AS \`bankAccountType\`,1 AS \`profileId\`,1 AS \`holderName\`,1 AS \`holderDocument\`,1 AS \`bankCode\`,1 AS \`bankAccountAgency\`,1 AS \`bankAccountNumber\`,1 AS \`bankAccountDigit\``);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  influencersDb,
  npsDb,
  paymentDb
});
