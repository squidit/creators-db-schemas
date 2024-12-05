var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

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
import { sql } from "drizzle-orm";
import { bigint, char, date, datetime, decimal, double, float, index, int, mysqlTable, mysqlView, primaryKey, text, timestamp, tinyint, unique, varchar } from "drizzle-orm/mysql-core";
var blockedtags = mysqlTable(
  "blockedtags",
  {
    id: int().autoincrement().notNull(),
    tag: varchar({ length: 20 })
  },
  (table) => {
    return {
      blockedtagsId: primaryKey({ columns: [table.id], name: "blockedtags_id" }),
      tag: unique("tag").on(table.tag)
    };
  }
);
var blockedusers = mysqlTable(
  "blockedusers",
  {
    profileId: varchar({ length: 36 }).notNull().references(() => profiles.id),
    whitelabel: varchar({ length: 24 }).default("-").notNull(),
    organization: varchar({ length: 24 }).default("-").notNull(),
    reason: varchar({ length: 255 }).notNull(),
    responsibleId: varchar({ length: 255 }).notNull(),
    responsibleFullName: varchar({ length: 255 }).notNull(),
    unregistered: tinyint().default(0).notNull(),
    createdAt: datetime({ mode: "date" }).notNull(),
    updatedAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    logstashProcessedAt: datetime({ mode: "date" }),
    deletedAt: datetime({ mode: "date" }),
    campaignId: varchar({ length: 255 }),
    campaignName: varchar({ length: 255 })
  },
  (table) => {
    return {
      blockedusersProfileIdWhitelabel: primaryKey({ columns: [table.profileId, table.whitelabel], name: "blockedusers_profileId_whitelabel" })
    };
  }
);
var deletedProfiles = mysqlTable(
  "deletedProfiles",
  {
    id: int().autoincrement().notNull(),
    profileId: varchar({ length: 50 }).notNull(),
    community: varchar({ length: 255 }),
    motivation: varchar({ length: 255 }).notNull(),
    deletionDate: date({ mode: "date" }).notNull(),
    email: varchar({ length: 255 }),
    document: varchar({ length: 45 }),
    recordEmployment: varchar({ length: 50 }),
    createdAt: date({ mode: "date" }),
    updatedAt: date({ mode: "date" })
  },
  (table) => {
    return {
      deletedProfilesId: primaryKey({ columns: [table.id], name: "deletedProfiles_id" })
    };
  }
);
var facebookTokens = mysqlTable(
  "facebookTokens",
  {
    profileId: varchar({ length: 50 }).notNull(),
    createdAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`),
    valid: tinyint(),
    expiresAt: datetime({ mode: "date" }),
    status: varchar({ length: 1e3 }),
    permanentToken: varchar({ length: 512 }),
    accessToken: varchar({ length: 512 }),
    sevenDaysNotified: tinyint(),
    expiredTokenNotified: tinyint(),
    instagramBusinessId: varchar({ length: 30 }),
    facebookPageId: varchar({ length: 30 }),
    facebookUserId: varchar({ length: 30 })
  },
  (table) => {
    return {
      // validIdx: index().on(table.valid),
      notificationIdx: index("notification_index").on(table.valid, table.expiredTokenNotified, table.sevenDaysNotified, table.expiresAt),
      instagramBusinessIdIdx: index("facebookTokens_instagramBusinessId_IDX").on(table.instagramBusinessId),
      facebookTokensProfileId: primaryKey({ columns: [table.profileId], name: "facebookTokens_profileId" })
    };
  }
);
var genders = mysqlTable(
  "genders",
  {
    id: int().autoincrement().notNull(),
    description: varchar({ length: 50 }).notNull(),
    descriptionEn: varchar("description_en", { length: 50 }).notNull(),
    descriptionEs: varchar("description_es", { length: 255 })
  },
  (table) => {
    return {
      gendersId: primaryKey({ columns: [table.id], name: "genders_id" })
    };
  }
);
var googleTokens = mysqlTable(
  "googleTokens",
  {
    profileId: varchar({ length: 50 }).notNull(),
    createdAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`),
    valid: tinyint(),
    expiresAt: datetime({ mode: "date" }),
    status: varchar({ length: 1e3 }),
    provider: varchar({ length: 50 }),
    accessToken: varchar({ length: 512 }),
    refreshToken: varchar({ length: 128 }),
    expiresIn: bigint({ mode: "number" }),
    connection: varchar({ length: 50 }),
    isSocial: tinyint(),
    gcloudProject: varchar({ length: 45 }).default("squid-apis")
  },
  (table) => {
    return {
      // validIdx: index().on(table.valid),
      googleTokensProfileId: primaryKey({ columns: [table.profileId], name: "googleTokens_profileId" })
    };
  }
);
var idInstagramUpdate = mysqlTable("idInstagramUpdate", {
  id: varchar({ length: 100 })
});
var influencerMetrics = mysqlTable(
  "influencer_metrics",
  {
    name: varchar({ length: 200 }).notNull(),
    value: float(),
    date: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`),
    id: varchar({ length: 100 }).notNull(),
    socialNetwork: varchar({ length: 100 }).notNull(),
    observation: varchar({ length: 200 }),
    type: varchar({ length: 45 }),
    createdAt: datetime({ mode: "date" }),
    updatedAt: datetime({ mode: "date" })
  },
  (table) => {
    return {
      dateIdx: index("influencer_metrics_date_IDX").on(table.date),
      influencerMetricsIdSocialNetworkName: primaryKey({ columns: [table.id, table.socialNetwork, table.name], name: "influencer_metrics_id_socialNetwork_name" })
    };
  }
);
var instagramProfiles = mysqlTable(
  "instagramProfiles",
  {
    id: varchar({ length: 50 }).notNull(),
    username: varchar({ length: 255 }),
    exists: tinyint().default(1).notNull(),
    searchable: tinyint().default(1).notNull(),
    macro: tinyint().default(0),
    notSearchReason: varchar({ length: 255 }),
    brandUser: tinyint().default(0).notNull(),
    picture: text(),
    fullName: varchar({ length: 255 }),
    email: varchar({ length: 255 }),
    bio: text(),
    website: varchar({ length: 255 }),
    language: varchar({ length: 10 }),
    isBusiness: tinyint().default(0).notNull(),
    isWorkAccount: tinyint(),
    hasSkip: tinyint(),
    facebookUserId: varchar({ length: 30 }),
    facebookPageId: varchar({ length: 30 }),
    instagramBusinessId: varchar({ length: 30 }),
    scrapperEngagementRate: float().notNull(),
    engagementRate: float(),
    totalMedias: int().default(0).notNull(),
    medias: int().default(0).notNull(),
    followers: int().default(0).notNull(),
    follows: int().default(0).notNull(),
    likes: int().default(0).notNull(),
    comments: int().default(0).notNull(),
    tier: varchar({ length: 45 }).default("undefined").notNull(),
    createdAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    logstashProcessedAt: datetime({ mode: "date" }),
    score: float(),
    score1: float(),
    score2: float(),
    score3: float(),
    score4: float(),
    score5: float(),
    storiesEngagementRate: float(),
    postEffectiveReach: float(),
    storiesEffectiveReach: float(),
    profileViews: int(),
    hasMediaKit: tinyint().default(0),
    categorizedAt: datetime({ mode: "date" }),
    averageComments: float().notNull(),
    averageCommentsImage: float().notNull(),
    averageCommentsVideo: float().notNull(),
    averageCommentsCarousel: float().notNull(),
    averageLikes: float().notNull(),
    averageLikesImage: float().notNull(),
    averageLikesVideo: float().notNull(),
    averageLikesCarousel: float().notNull(),
    commentLikesRate: float().notNull(),
    commentsRate: float().notNull(),
    totalStoriesImpressions: float(),
    totalStoriesReach: float(),
    totalStoriesReplies: float(),
    totalStoriesTapBacks: float(),
    totalStoriesTapFowardExits: float().notNull(),
    totalPostsReach: float(),
    totalPostsSaves: float(),
    totalPostsImpressions: float(),
    averageSaved: float().notNull(),
    averageSavedImage: float().notNull(),
    averageSavedVideo: float().notNull(),
    averageSavedCarousel: float().notNull(),
    averageTapBacks: float().notNull(),
    averageTapBacksImage: float().notNull(),
    averageTapBacksVideo: float().notNull(),
    averageReplies: float().notNull(),
    averageRepliesImage: float().notNull(),
    averageRepliesVideo: float().notNull(),
    averageTapFowardExits: float().notNull(),
    averageTapFowardExitsImage: float().notNull(),
    averageTapFowardExitsVideo: float().notNull(),
    completeVideoStoriesRate: float().notNull(),
    numberPostsActivityScore: float(),
    numberStoriesScore: float(),
    daysPostsScore: float(),
    daysStoriesScore: float(),
    advertisingPostsEngagementRate: float(),
    noAdvertisingPostsEngagementRate: float(),
    advertisingStoriesEngagementRate: float(),
    noAdvertisingStoriesEngagementRate: float(),
    advertisingContentPercentage: float(),
    advertisingPostsPercentage: float(),
    advertisingStoriesPercentage: float(),
    postImageEngagementRate: float(),
    postCarouselEngagementRate: float(),
    postVideoEngagementRate: float(),
    storiesVideoEngagementRate: float(),
    storiesImageEngagementRate: float(),
    storiesCompleteEngagementRate: float(),
    averagePostsReach: float().notNull(),
    averagePostsImpressions: float().notNull(),
    averagePostsFrequency: float().notNull(),
    averageStoriesReach: float().notNull(),
    averageStoriesImpressions: float().notNull(),
    averageStoriesFrequency: float().notNull(),
    adPostPermanceEngagementRate: float(),
    adStoriesPermanceEngagementRate: float(),
    identifyAt: datetime({ mode: "date" }),
    estimateMetric: tinyint().default(0),
    totalReels: float(),
    totalReachReels: float(),
    reelsEffectiveReach: float(),
    totalPlaysReels: float(),
    averagePlaysReels: float(),
    totalEngagementReels: float(),
    reelsEngagementRate: float(),
    averageLikesReels: float(),
    averageCommentsReels: float(),
    averageSavesReels: float(),
    hasMediaBoost: tinyint().default(0).notNull(),
    statusUidMigration: varchar({ length: 255 }).default("Not processed"),
    oldIgId: varchar({ length: 50 }),
    postCpm: float(),
    storySequenceCpm: float(),
    reelCpm: float(),
    cache: float(),
    postValue: float(),
    storySequenceValue: float(),
    reelValue: float(),
    medianPostsReach: float(),
    medianPostsSaves: float(),
    medianPostsImpressions: float(),
    medianStoriesImpressions: float(),
    medianStoriesReach: float(),
    medianStoriesReplies: float(),
    medianStoriesTapBacks: float(),
    medianStoriesTapFowardExits: float(),
    medianReachReels: float(),
    medianPlaysReels: float(),
    medianEngagementReels: float(),
    outdatedMetrics: tinyint().default(0),
    medianComments: float(),
    medianLikes: float(),
    insertOrigin: varchar({ length: 50 }),
    fullProfileProcess: tinyint().default(0),
    totalReelsLikes: float(),
    totalReelsComments: float(),
    totalReelsSaves: float(),
    userProfileViews: float(),
    userPostsEngagementRateByImpressions: float(),
    userReelsEngagementRateByImpressions: float(),
    userStoriesEngagementRateByImpressions: float(),
    userPostsEngagementRateByFollowers: float(),
    userReelsEngagementRateByFollowers: float(),
    userStoriesEngagementRateByFollowers: float(),
    userStoriesEffectiveReach: float(),
    userPostsEffectiveReach: float(),
    userReelsEffectiveReach: float(),
    userTotalPosts: float(),
    userTotalReels: float(),
    userTotalStories: float(),
    userAvgPostsReach: float(),
    userAvgReelsReach: float(),
    userAvgStoriesReach: float(),
    userAvgPostsImpressions: float(),
    userAvgStoriesImpressions: float(),
    userAvgReelsPlays: float(),
    userAvgPostsEngagement: float(),
    userAvgReelsEngagement: float(),
    userAvgStoriesEngagement: float(),
    userAvgPostsLikes: float(),
    userAvgReelsLikes: float(),
    userAvgStoriesLikes: float(),
    userAvgPostsComments: float(),
    userAvgReelsComments: float(),
    userAvgStoriesReplies: float(),
    userAvgPostsShares: float(),
    userAvgReelsShares: float(),
    userAvgStoriesShares: float(),
    userAvgPostsSaves: float(),
    userAvgReelsSaves: float(),
    userPostsCpm: float(),
    userStoriesCpm: float(),
    userReelsCpm: float(),
    storiesCpm: float(),
    storiesValue: float(),
    profileDescription: varchar({ length: 255 }),
    hasCreatorsInsights: tinyint()
  },
  (table) => {
    return {
      usernameIdx: index("username_index").on(table.username),
      idxInstagramProfilesFacebookUserId: index("idx_instagramProfiles_facebookUserId").on(table.facebookUserId),
      oldIgIdIdx: index("instagramProfiles_oldIgId_IDX").on(table.oldIgId),
      instagramProfilesId: primaryKey({ columns: [table.id], name: "instagramProfiles_id" })
    };
  }
);
var locations = mysqlTable(
  "locations",
  {
    id: bigint({ mode: "number" }).notNull(),
    name: varchar({ length: 255 }).notNull(),
    latitude: decimal({ precision: 9, scale: 6 }).notNull(),
    longitude: decimal({ precision: 9, scale: 6 }).notNull(),
    createdAt: datetime({ mode: "date" }).notNull(),
    updatedAt: datetime({ mode: "date" }).notNull()
  },
  (table) => {
    return {
      locationsId: primaryKey({ columns: [table.id], name: "locations_id" })
    };
  }
);
var notSearchableUsers = mysqlTable(
  "notSearchableUsers",
  {
    id: varchar({ length: 45 }).notNull(),
    username: varchar({ length: 45 }),
    reasons: varchar({ length: 45 }).notNull(),
    socialNetwork: varchar({ length: 45 }).notNull(),
    createdAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    tags: varchar({ length: 255 }),
    followers: int(),
    engagement: float()
  },
  (table) => {
    return {
      notSearchableUsersId: primaryKey({ columns: [table.id], name: "notSearchableUsers_id" })
    };
  }
);
var pinterestProfiles = mysqlTable(
  "pinterestProfiles",
  {
    id: varchar({ length: 50 }).notNull(),
    squidId: varchar({ length: 36 }),
    username: varchar({ length: 255 }).default("Processando").notNull(),
    exists: tinyint().default(1).notNull(),
    isPartner: tinyint().default(1).notNull(),
    picture: varchar({ length: 255 }).default("Processando").notNull(),
    fullName: varchar({ length: 255 }),
    about: text(),
    since: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    engagementRate: float().notNull(),
    reach: int().default(0).notNull(),
    totalPins: int().default(0).notNull(),
    followers: int().default(0).notNull(),
    identificationPins: int().default(0).notNull(),
    identificationImpressions: int().default(0).notNull(),
    identificationSaves: int().default(0).notNull(),
    identificationClicks: int().default(0).notNull(),
    identificationCloseups: int().default(0).notNull(),
    identificationComments: int().default(0).notNull(),
    selfToken: tinyint().default(1).notNull(),
    createdAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      pinterestProfilesId: primaryKey({ columns: [table.id], name: "pinterestProfiles_id" }),
      squidId: unique("squidId").on(table.squidId)
    };
  }
);
var profileAdditionalInfoBanks = mysqlTable(
  "profileAdditionalInfoBanks",
  {
    id: int().autoincrement().notNull(),
    profileId: varchar({ length: 36 }).notNull(),
    bankCode: varchar({ length: 10 }),
    bankName: varchar({ length: 100 }).notNull(),
    bankAccountNumber: varchar({ length: 50 }),
    bankAccountDigit: varchar({ length: 5 }),
    bankAccountAgency: varchar({ length: 11 }),
    bankAccountType: varchar({ length: 20 }),
    bankOperationCode: varchar({ length: 10 }),
    holderDocument: varchar({ length: 15 }),
    holderOpeningDate: date({ mode: "date" }),
    holderName: varchar({ length: 150 }),
    holderTradingName: varchar({ length: 150 }),
    isPersonAccount: tinyint().notNull(),
    createdAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    nationalDocument: varchar({ length: 50 }),
    recordEmployment: varchar({ length: 50 }),
    companyName: varchar({ length: 150 }),
    fantasyName: varchar({ length: 100 }),
    companyOpeningDate: date({ mode: "date" }),
    typeOfBusiness: varchar({ length: 150 }),
    paymentType: varchar({ length: 5 }),
    companyUf: varchar({ length: 2 }),
    companyCity: varchar({ length: 100 }),
    companyLegalNature: varchar({ length: 100 }),
    companyDocument: varchar({ length: 50 }),
    bankAccountAgencyDigit: varchar({ length: 15 }),
    verificationStatus: float(),
    verificationId: char({ length: 36 }),
    verificatedAt: datetime({ mode: "date" })
  },
  (table) => {
    return {
      profileAdditionalInfoBanksId: primaryKey({ columns: [table.id], name: "profileAdditionalInfoBanks_id" }),
      profileIdUnique: unique("profileId_UNIQUE").on(table.profileId),
      profileId: unique("profileId").on(table.profileId, table.bankCode, table.bankAccountNumber)
    };
  }
);
var profileAdditionalInfos = mysqlTable(
  "profileAdditionalInfos",
  {
    profileId: varchar({ length: 36 }).notNull().references(() => profiles.id),
    loginUid: varchar({ length: 45 }),
    email: varchar({ length: 255 }).notNull(),
    document: varchar({ length: 50 }),
    name: varchar({ length: 255 }).notNull(),
    blog: varchar({ length: 255 }),
    birthday: date({ mode: "date" }).notNull(),
    gender: char({ length: 1 }),
    phone: varchar({ length: 25 }),
    zipcode: varchar({ length: 15 }),
    address: varchar({ length: 255 }),
    addressNumber: varchar({ length: 150 }),
    complement: varchar({ length: 255 }),
    city: varchar({ length: 255 }),
    neighborhood: varchar({ length: 255 }),
    uf: varchar({ length: 255 }),
    country: varchar({ length: 255 }).default("BR"),
    lat: double(),
    lng: double(),
    registeredFromSource: varchar({ length: 255 }),
    registeredFromCampaign: varchar({ length: 255 }),
    registeredFromMedium: varchar({ length: 255 }),
    createdAt: datetime({ mode: "date" }).notNull(),
    updatedAt: datetime({ mode: "date" }).notNull(),
    allowSms: tinyint().default(0),
    allowWhatsapp: tinyint().default(1),
    allowSuggestionEmail: tinyint().default(1),
    isPersonAccount: tinyint().notNull(),
    documentType: varchar({ length: 13 }).notNull(),
    hasSkip: tinyint().default(0),
    language: varchar({ length: 10 }).default("pt-br").notNull(),
    phoneValid: tinyint().default(0),
    phoneValidCode: varchar({ length: 15 }),
    phoneValidCodeCreatedAt: datetime({ mode: "date" }),
    race: int(),
    registeredFromAdId: varchar({ length: 255 }),
    registeredFromContent: varchar({ length: 255 }),
    registeredFromAdName: varchar({ length: 255 }),
    portalRegistration: tinyint().default(0),
    agent: tinyint().default(0),
    showWarning: tinyint().default(0),
    scenario: varchar({ length: 10 }),
    updateAddress: tinyint(),
    nationality: varchar({ length: 255 }),
    allowBrandLovers: tinyint().default(1),
    allowAffiliates: tinyint().default(1),
    allowResearch: tinyint().default(1),
    allowEmail: tinyint().default(1),
    socialName: varchar({ length: 50 }),
    descriptionCreatorsInsights: varchar({ length: 255 })
  },
  (table) => {
    return {
      profileAdditionalInfosProfileId: primaryKey({ columns: [table.profileId], name: "profileAdditionalInfos_profileId" }),
      emailUnique: unique("EMAIL_UNIQUE").on(table.email),
      auth0: unique("AUTH0").on(table.loginUid)
    };
  }
);
var profileAdditionalInfosOld = mysqlTable(
  "profileAdditionalInfos_old",
  {
    profileId: varchar({ length: 36 }).notNull().references(() => profiles.id),
    document: varchar({ length: 50 }),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull(),
    blog: varchar({ length: 255 }),
    birthday: date({ mode: "date" }).notNull(),
    gender: char({ length: 3 }).notNull(),
    phone: varchar({ length: 25 }).notNull(),
    zipcode: varchar({ length: 15 }).notNull(),
    address: varchar({ length: 255 }).notNull(),
    addressNumber: varchar({ length: 255 }),
    complement: varchar({ length: 255 }),
    city: varchar({ length: 255 }).notNull(),
    neighborhood: varchar({ length: 255 }),
    uf: varchar({ length: 255 }).default("").notNull(),
    country: varchar({ length: 255 }).default("BR"),
    registeredFromSource: varchar({ length: 255 }),
    registeredFromCampaign: varchar({ length: 255 }),
    registeredFromMedium: varchar({ length: 255 }),
    createdAt: datetime({ mode: "date" }).notNull(),
    updatedAt: datetime({ mode: "date" }).notNull(),
    allowSms: tinyint().default(0),
    allowWhatsapp: tinyint().default(1),
    allowSuggestionEmail: tinyint().default(1),
    isPersonAccount: tinyint().notNull(),
    documentType: varchar({ length: 13 }).default("CPF").notNull(),
    hasSkip: tinyint().default(0),
    auth0: varchar({ length: 45 }),
    language: varchar({ length: 5 }).default("pt-br").notNull(),
    phoneValid: tinyint().default(0),
    phoneValidCode: varchar({ length: 15 }),
    phoneValidCodeCreatedAt: datetime({ mode: "date" }),
    race: int(),
    registeredFromAdId: varchar({ length: 255 }),
    registeredFromContent: varchar({ length: 255 }),
    registeredFromAdName: varchar({ length: 255 }),
    portalRegistration: tinyint().default(0),
    agent: tinyint().default(0)
  },
  (table) => {
    return {
      profileAdditionalInfosOldProfileId: primaryKey({ columns: [table.profileId], name: "profileAdditionalInfos_old_profileId" }),
      emailUnique: unique("EMAIL_UNIQUE").on(table.email)
    };
  }
);
var profileAdditionalInfosWhitelabels = mysqlTable(
  "profileAdditionalInfos_whitelabels",
  {
    profileId: varchar({ length: 36 }).notNull(),
    whitelabel: varchar({ length: 24 }).default("-").notNull(),
    organization: varchar({ length: 24 }).default("-").notNull(),
    auth0: varchar({ length: 45 }),
    communityId: varchar("community_id", { length: 45 }),
    email: varchar({ length: 255 }).notNull(),
    document: varchar({ length: 50 }).notNull(),
    name: varchar({ length: 255 }).notNull(),
    blog: varchar({ length: 255 }),
    birthday: date({ mode: "date" }).notNull(),
    gender: char({ length: 1 }),
    phone: varchar({ length: 25 }).notNull(),
    zipcode: varchar({ length: 15 }),
    address: varchar({ length: 255 }),
    addressNumber: varchar({ length: 150 }),
    complement: varchar({ length: 255 }),
    city: varchar({ length: 255 }),
    neighborhood: varchar({ length: 255 }),
    uf: varchar({ length: 255 }),
    country: varchar({ length: 255 }).default("BR"),
    nationality: varchar({ length: 255 }),
    registeredFromSource: varchar({ length: 255 }),
    registeredFromCampaign: varchar({ length: 255 }),
    registeredFromMedium: varchar({ length: 255 }),
    createdAt: datetime({ mode: "date" }).notNull(),
    updatedAt: datetime({ mode: "date" }).notNull(),
    allowSms: tinyint().default(0),
    allowWhatsapp: tinyint().default(1),
    allowSuggestionEmail: tinyint().default(1),
    isPersonAccount: tinyint().notNull(),
    documentType: varchar({ length: 13 }).notNull(),
    hasSkip: tinyint().default(0),
    language: varchar({ length: 10 }).default("pt-br").notNull(),
    phoneValid: tinyint().default(0),
    phoneValidCode: varchar({ length: 15 }),
    phoneValidCodeCreatedAt: datetime({ mode: "date" }),
    race: int(),
    registeredFromAdId: varchar({ length: 255 }),
    registeredFromContent: varchar({ length: 255 }),
    registeredFromAdName: varchar({ length: 255 }),
    portalRegistration: tinyint().default(0),
    agent: tinyint().default(0),
    showWarning: tinyint().default(0)
  },
  (table) => {
    return {
      profileAdditionalInfosWhitelabelsProfileIdWhitelabel: primaryKey({ columns: [table.profileId, table.whitelabel], name: "profileAdditionalInfos_whitelabels_profileId_whitelabel" }),
      emailUnique: unique("EMAIL_UNIQUE").on(table.email, table.whitelabel),
      auth0: unique("AUTH0").on(table.auth0)
    };
  }
);
var profileCategories = mysqlTable(
  "profileCategories",
  {
    id: int().autoincrement().notNull(),
    parentId: int(),
    description: varchar({ length: 50 }).default("").notNull(),
    descriptionEn: varchar("description_en", { length: 255 }).notNull(),
    descriptionEs: varchar("description_es", { length: 255 }),
    emoji: text(),
    percentageBase: float("percentage_base"),
    cacheVariation: float("cache_variation").default(1)
  },
  (table) => {
    return {
      profileCategoriesId: primaryKey({ columns: [table.id], name: "profileCategories_id" }),
      description: unique("description").on(table.description)
    };
  }
);
var profileWhitelabels = mysqlTable(
  "profileWhitelabels",
  {
    id: varchar({ length: 36 }).notNull(),
    profileId: varchar({ length: 36 }).notNull().references(() => profiles.id, { onUpdate: "cascade" }),
    whitelabel: varchar({ length: 24 }),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    registeredFromSource: varchar({ length: 255 }),
    registeredFromCampaign: varchar({ length: 255 }),
    registeredFromMedium: varchar({ length: 255 }),
    registeredFromContent: varchar({ length: 255 }),
    registeredFromAdId: varchar({ length: 255 }),
    registeredFromAdName: varchar({ length: 255 })
  },
  (table) => {
    return {
      index3: index("profileWhitelabels_index_3").on(table.whitelabel),
      profileWhitelabelsId: primaryKey({ columns: [table.id], name: "profileWhitelabels_id" })
    };
  }
);
var profiles = mysqlTable(
  "profiles",
  {
    id: varchar({ length: 36 }).notNull(),
    createdAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    deletedNetworks: varchar({ length: 100 }),
    deletedAt: datetime({ mode: "date" })
  },
  (table) => {
    return {
      id: index("id").on(table.id),
      profilesId: primaryKey({ columns: [table.id], name: "profiles_id" })
    };
  }
);
var progressiveRegistrationAnswers = mysqlTable(
  "progressive_registration_answers",
  {
    id: varchar({ length: 36 }).notNull(),
    question: varchar({ length: 36 }).notNull().references(() => progressiveRegistrationQuestions.id, { onDelete: "cascade" }),
    squidId: varchar({ length: 50 }).notNull().references(() => profiles.id),
    answer: varchar({ length: 255 }),
    answerOption: varchar("answer_option", { length: 36 }).references(() => progressiveRegistrationQuestionOptions.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: timestamp("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      fkProgressiveRegistrationIdx1: index("fk_progressive_registration_idx1").on(table.question),
      fkProgressiveRegistrationIdx2: index("fk_progressive_registration_idx2").on(table.squidId),
      answersIdx: index("answers_idx").on(table.id),
      progressiveRegistrationAnswersId: primaryKey({ columns: [table.id], name: "progressive_registration_answers_id" }),
      id: unique("id").on(table.id)
    };
  }
);
var progressiveRegistrationGroups = mysqlTable(
  "progressive_registration_groups",
  {
    id: varchar({ length: 36 }).notNull(),
    label: varchar({ length: 36 }).notNull().references(() => progressiveRegistrationLabels.id, { onDelete: "cascade", onUpdate: "cascade" }),
    icon: varchar({ length: 255 }).default("poll-people").notNull(),
    order: int().default(1).notNull(),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: timestamp("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      label: index("LABEL").on(table.label),
      groupIdx: index("group_idx").on(table.id),
      progressiveRegistrationGroupsId: primaryKey({ columns: [table.id], name: "progressive_registration_groups_id" }),
      id: unique("id").on(table.id)
    };
  }
);
var progressiveRegistrationLabels = mysqlTable(
  "progressive_registration_labels",
  {
    id: varchar({ length: 36 }).notNull(),
    pt: varchar({ length: 255 }),
    en: varchar({ length: 255 }),
    es: varchar({ length: 255 }),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: timestamp("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      labelIdx: index("label_idx").on(table.id),
      progressiveRegistrationLabelsId: primaryKey({ columns: [table.id], name: "progressive_registration_labels_id" }),
      id: unique("id").on(table.id)
    };
  }
);
var progressiveRegistrationQuestionOptions = mysqlTable(
  "progressive_registration_question_options",
  {
    id: varchar({ length: 36 }).notNull(),
    question: varchar({ length: 255 }).notNull().references(() => progressiveRegistrationQuestions.id, { onDelete: "cascade" }),
    label: varchar({ length: 36 }).notNull().references(() => progressiveRegistrationLabels.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: timestamp("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      fkProgressiveRegistrationQuestionOptionsProgressiveReIdx: index("fk_progressive_registration_question_options_progressive_re_idx").on(table.question),
      label: index("label").on(table.label),
      optionsIdx: index("options_idx").on(table.id),
      progressiveRegistrationQuestionOptionsId: primaryKey({ columns: [table.id], name: "progressive_registration_question_options_id" }),
      id: unique("id").on(table.id)
    };
  }
);
var progressiveRegistrationQuestions = mysqlTable(
  "progressive_registration_questions",
  {
    id: varchar({ length: 36 }).notNull(),
    label: varchar({ length: 36 }).notNull().references(() => progressiveRegistrationLabels.id, { onDelete: "cascade" }),
    type: varchar({ length: 255 }).default("text").notNull(),
    group: varchar({ length: 255 }).notNull().references(() => progressiveRegistrationGroups.id, { onDelete: "cascade" }),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: timestamp("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      fkProgressiveRegistrationQuestionsProgressiveRegistratIdx: index("fk_progressive_registration_questions_progressive_registrat_idx").on(table.group),
      label: index("LABEL").on(table.label),
      questionsIdx: index("questions_idx").on(table.id),
      progressiveRegistrationQuestionsId: primaryKey({ columns: [table.id], name: "progressive_registration_questions_id" }),
      id: unique("id").on(table.id)
    };
  }
);
var progressiveRegistrationWhitelabels = mysqlTable(
  "progressive_registration_whitelabels",
  {
    whitelabel: varchar({ length: 24 }).default("hub").notNull(),
    question: varchar({ length: 255 }).notNull().references(() => progressiveRegistrationQuestions.id, { onDelete: "cascade", onUpdate: "cascade" }),
    group: varchar({ length: 255 }).notNull().references(() => progressiveRegistrationGroups.id, { onDelete: "cascade" }),
    active: tinyint().default(0).notNull(),
    order: int().default(1).notNull(),
    required: tinyint().default(0).notNull(),
    createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
    deletedAt: timestamp("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      fkProgressiveRegistrationWhitelabelsProgressiveRegistrIdx: index("fk_progressive_registration_whitelabels_progressive_registr_idx").on(table.question),
      progressiveRegistrationWhitelabelsWhitelabelQuestionGroup: primaryKey({ columns: [table.whitelabel, table.question, table.group], name: "progressive_registration_whitelabels_whitelabel_question_group" })
    };
  }
);
var races = mysqlTable(
  "races",
  {
    id: int().autoincrement().notNull(),
    description: varchar({ length: 45 }).notNull(),
    descriptionEn: varchar("description_en", { length: 45 }).notNull(),
    descriptionEs: varchar("description_es", { length: 255 })
  },
  (table) => {
    return {
      racesId: primaryKey({ columns: [table.id], name: "races_id" })
    };
  }
);
var scopesToken = mysqlTable(
  "scopesToken",
  {
    scopeType: varchar({ length: 64 }).notNull(),
    profileId: varchar({ length: 50 }).notNull(),
    socialNetwork: varchar({ length: 45 }).notNull()
  },
  (table) => {
    return {
      scopesTokenScopeTypeProfileIdSocialNetwork: primaryKey({ columns: [table.scopeType, table.profileId, table.socialNetwork], name: "scopesToken_scopeType_profileId_socialNetwork" })
    };
  }
);
var socialNetworkProfiles = mysqlTable(
  "socialNetworkProfiles",
  {
    id: varchar({ length: 50 }).notNull(),
    squidId: varchar({ length: 36 }).references(() => profiles.id, { onDelete: "cascade", onUpdate: "cascade" }),
    socialNetwork: varchar({ length: 45 }).notNull(),
    createdAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      socialNetworkProfilesIdSocialNetwork: primaryKey({ columns: [table.id, table.socialNetwork], name: "socialNetworkProfiles_id_socialNetwork" })
    };
  }
);
var socialNetworkProfilesCache = mysqlTable(
  "socialNetworkProfilesCache",
  {
    profileId: varchar({ length: 255 }).notNull(),
    contentType: varchar({ length: 50 }).notNull(),
    contentValue: decimal({ precision: 10, scale: 2 }),
    createdAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      socialNetworkProfilesCacheProfileIdContentType: primaryKey({ columns: [table.profileId, table.contentType], name: "socialNetworkProfilesCache_profileId_contentType" }),
      socialNetworkProfilesCacheProfileIdIdx: unique("socialNetworkProfilesCache_profileId_IDX").on(table.profileId, table.contentType)
    };
  }
);
var socialNetworkProfilesCacheNew = mysqlTable("socialNetworkProfilesCache_new", {
  profileId: varchar({ length: 50 }).notNull(),
  contentType: varchar("ContentType", { length: 100 }).notNull(),
  contentValue: decimal({ precision: 10, scale: 2 }),
  createdAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`),
  updatedAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`)
});
var socialNetworkProfilesCategories = mysqlTable(
  "socialNetworkProfilesCategories",
  {
    id: int().autoincrement().notNull(),
    categoryId: int().notNull().references(() => profileCategories.id, { onUpdate: "cascade" }),
    profileId: varchar({ length: 50 }).notNull().references(() => socialNetworkProfiles.id, { onUpdate: "cascade" }),
    socialNetwork: varchar({ length: 45 }).notNull(),
    updatedAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`)
  },
  (table) => {
    return {
      socialNetwork: index("socialNetwork").on(table.socialNetwork),
      socialNetworkProfilesCategoriesId: primaryKey({ columns: [table.id], name: "socialNetworkProfilesCategories_id" })
    };
  }
);
var socialNetworkProfilesCategoriesWhitelabels = mysqlTable(
  "socialNetworkProfilesCategories_whitelabels",
  {
    id: int().autoincrement().notNull(),
    categoryId: int(),
    profileId: varchar({ length: 36 }),
    socialNetwork: varchar({ length: 45 }),
    whitelabel: varchar({ length: 24 }),
    organization: varchar({ length: 24 }),
    updatedAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`)
  },
  (table) => {
    return {
      socialNetworkProfilesCategoriesWhitelabelsId: primaryKey({ columns: [table.id], name: "socialNetworkProfilesCategories_whitelabels_id" }),
      socialNetworkProfilesCategoriesUn: unique("socialNetworkProfilesCategories_UN").on(table.categoryId, table.profileId, table.socialNetwork, table.whitelabel, table.organization)
    };
  }
);
var socialNetworkProfilesWhitelabels = mysqlTable(
  "socialNetworkProfiles_whitelabels",
  {
    id: varchar({ length: 50 }).notNull(),
    squidId: varchar({ length: 36 }).references(() => profiles.id),
    socialNetwork: varchar({ length: 45 }).notNull(),
    whitelabel: varchar({ length: 24 }).default("-").notNull(),
    organization: varchar({ length: 24 }).default("-").notNull(),
    createdAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      socialNetworkProfilesWhitelabelsIdSocialNetworkWhitelabel: primaryKey({ columns: [table.id, table.socialNetwork, table.whitelabel], name: "socialNetworkProfiles_whitelabels_id_socialNetwork_whitelabel" })
    };
  }
);
var stopWords = mysqlTable(
  "stopWords",
  {
    id: int().autoincrement().notNull(),
    word: varchar({ length: 255 }).notNull()
  },
  (table) => {
    return {
      stopWordsId: primaryKey({ columns: [table.id], name: "stopWords_id" })
    };
  }
);
var tiktokProfiles = mysqlTable(
  "tiktokProfiles",
  {
    id: varchar({ length: 50 }).notNull(),
    openId: varchar({ length: 50 }),
    unionId: varchar({ length: 50 }),
    exists: tinyint().default(1),
    verified: tinyint().default(1),
    username: varchar({ length: 255 }).default("Processando"),
    nickname: varchar({ length: 255 }).default("Processando"),
    macro: tinyint().default(0),
    brandUser: tinyint().default(0),
    picture: text(),
    bio: text(),
    engagementRate: float(),
    followers: int().default(0),
    following: int().default(0),
    likes: float(),
    averageLikes: float(),
    comments: float(),
    averageComments: float(),
    shares: float(),
    averageShares: float(),
    views: float(),
    averageViews: float(),
    createdAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    lastPictureUpdatedAt: datetime({ mode: "date" }),
    tcmStatus: varchar({ length: 15 }),
    insertOrigin: varchar({ length: 50 }),
    processAt: datetime({ mode: "date" }),
    hasCreatorsInsights: tinyint().default(0)
  },
  (table) => {
    return {
      usernameIdx: index("tiktokProfiles_username_IDX").on(table.username),
      processAtIdx: index("tiktokProfiles_processAt_IDX").on(table.processAt),
      tiktokProfilesId: primaryKey({ columns: [table.id], name: "tiktokProfiles_id" })
    };
  }
);
var tiktokTokens = mysqlTable(
  "tiktokTokens",
  {
    profileId: varchar({ length: 50 }).notNull(),
    valid: tinyint().default(1),
    status: varchar({ length: 1e3 }),
    accessToken: varchar({ length: 512 }),
    refreshToken: varchar({ length: 128 }),
    expiresAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`),
    createdAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`)
  },
  (table) => {
    return {
      validIdx: index("tiktokTokens_valid_IDX").on(table.valid),
      tiktokTokensProfileId: primaryKey({ columns: [table.profileId], name: "tiktokTokens_profileId" })
    };
  }
);
var twitterProfiles = mysqlTable(
  "twitterProfiles",
  {
    id: varchar({ length: 50 }).notNull(),
    username: varchar({ length: 255 }).default("Processando").notNull(),
    fullName: varchar({ length: 255 }).default("").notNull(),
    picture: varchar({ length: 255 }).default("Processando").notNull(),
    followers: int().default(0).notNull(),
    follows: int().default(0).notNull(),
    bio: text(),
    createdAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    brandUser: tinyint().default(0).notNull(),
    exists: tinyint().default(1).notNull(),
    macro: tinyint().default(0),
    engagementRate: float(),
    totalRetweets: float(),
    totalLikes: float(),
    totalRetweetsReceived: float(),
    averageLikes: float(),
    averageRetweets: float(),
    totalTweets: float(),
    averageRepliesByLikes: float(),
    averageRepliesByTweet: float(),
    repliesRate: float(),
    effectiveImpressionReach: float(),
    averageImpressions: float(),
    countReplies: int(),
    adTweetsCount: float(),
    engagementRateAd: float(),
    tweetPostAdPerformance: float(),
    insertOrigin: varchar({ length: 50 }),
    processAt: datetime({ mode: "date" }),
    hasCreatorsInsights: tinyint().default(0)
  },
  (table) => {
    return {
      processAtIdx: index("twitterProfiles_processAt_IDX").on(table.processAt),
      twitterProfilesId: primaryKey({ columns: [table.id], name: "twitterProfiles_id" })
    };
  }
);
var twitterTokens = mysqlTable(
  "twitterTokens",
  {
    profileId: varchar({ length: 50 }).notNull(),
    createdAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`),
    updatedAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`),
    valid: tinyint(),
    accessToken: varchar({ length: 256 }),
    oauthSecretToken: varchar({ length: 256 }),
    refreshToken: varchar({ length: 256 }),
    expiresIn: int().default(0)
  },
  (table) => {
    return {
      valid: index("twitterTokens_valid").on(table.valid),
      twitterTokensProfileId: primaryKey({ columns: [table.profileId], name: "twitterTokens_profileId" })
    };
  }
);
var youtubeProfiles = mysqlTable(
  "youtubeProfiles",
  {
    id: varchar({ length: 50 }).notNull(),
    googleId: varchar({ length: 255 }),
    exists: tinyint().default(1).notNull(),
    searchable: tinyint().default(1).notNull(),
    notSearchReason: varchar({ length: 255 }),
    email: varchar({ length: 255 }),
    channelTitle: varchar({ length: 255 }).default("Processando").notNull(),
    username: varchar({ length: 255 }).default("Processando").notNull(),
    picture: varchar({ length: 255 }).default("Processando").notNull(),
    fullName: varchar({ length: 255 }),
    description: text(),
    bio: text(),
    customUrl: varchar({ length: 255 }).default("Processando"),
    country: varchar({ length: 36 }).default("Processando").notNull(),
    since: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    followers: int().default(0).notNull(),
    subscribers: int().default(0).notNull(),
    engagementRate: float(),
    engagementRatePositive: float(),
    engagementRateNegative: float(),
    viewsRate: float(),
    viewsMedian: float(),
    comments: int().default(0),
    identificationComments: int().default(0),
    identificationLikes: int().default(0),
    identificationDislikes: int().default(0),
    averageComments: float(),
    averageLikes: float(),
    averageDislikes: float(),
    shares: int().default(0),
    averageShares: float(),
    commentLikesRate: float(),
    commentViewsRate: float(),
    averageViewsDuration: int().default(0),
    averageViewPercentage: float(),
    averageVideoDuration: float(),
    videoEffectiveReach: float(),
    videos: int().default(0),
    identificationVideos: int().default(0),
    views: bigint({ mode: "number" }),
    identificationViews: int().default(0),
    privacyStatus: varchar({ length: 36 }).default("Processando").notNull(),
    language: varchar({ length: 36 }),
    createdAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime({ mode: "date" }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
    logstashProcessedAt: datetime({ mode: "date" }),
    macro: tinyint().default(0),
    brandUser: tinyint().default(0),
    insertOrigin: varchar({ length: 50 }),
    processAt: datetime({ mode: "date" }),
    hasCreatorsInsights: tinyint().default(0)
  },
  (table) => {
    return {
      youtuberofilesSearchableIdx: index("youtuberofiles_searchable_index").on(table.searchable),
      googleIdIdx: index("youtubeProfiles_googleId_IDX").on(table.googleId),
      processAtIdx: index("youtubeProfiles_processAt_IDX").on(table.processAt),
      youtubeProfilesId: primaryKey({ columns: [table.id], name: "youtubeProfiles_id" })
    };
  }
);
var fullInstagramProfileAll = mysqlView("full_instagram_profile_all", {
  id: int().default(0).notNull(),
  squidid: int().default(0).notNull(),
  username: int().default(0).notNull(),
  identifiedat: int().default(0).notNull(),
  followers: int().default(0).notNull(),
  following: int().default(0).notNull(),
  picture: int().default(0).notNull(),
  engagementrate: int().default(0).notNull(),
  isbusiness: int().default(0).notNull(),
  searchable: int().default(0).notNull(),
  facebooklinked: int().default(0).notNull(),
  name: int().default(0).notNull(),
  email: int().default(0).notNull(),
  birthday: int().default(0).notNull(),
  gender: int().default(0).notNull(),
  phone: int().default(0).notNull(),
  address: int().default(0).notNull(),
  addressNumber: int().default(0).notNull(),
  complement: int().default(0).notNull(),
  city: int().default(0).notNull(),
  uf: int().default(0).notNull(),
  zipcode: int().default(0).notNull(),
  document: int().default(0).notNull(),
  loginUid: int().default(0).notNull(),
  recordEmployment: int().default(0).notNull(),
  isPersonAccount: int().default(0).notNull(),
  registeredat: int().default(0).notNull(),
  race: int().default(0).notNull(),
  blackuser: int().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`id\`,1 AS \`squidid\`,1 AS \`username\`,1 AS \`identifiedat\`,1 AS \`followers\`,1 AS \`following\`,1 AS \`picture\`,1 AS \`engagementrate\`,1 AS \`isbusiness\`,1 AS \`searchable\`,1 AS \`facebooklinked\`,1 AS \`name\`,1 AS \`email\`,1 AS \`birthday\`,1 AS \`gender\`,1 AS \`phone\`,1 AS \`address\`,1 AS \`addressNumber\`,1 AS \`complement\`,1 AS \`city\`,1 AS \`uf\`,1 AS \`zipcode\`,1 AS \`document\`,1 AS \`loginUid\`,1 AS \`recordEmployment\`,1 AS \`isPersonAccount\`,1 AS \`registeredat\`,1 AS \`race\`,1 AS \`blackuser\``);
var vwProgressiveRegistrationAnswers = mysqlView("vw_progressive_registration_answers", {
  squidId: int().default(0).notNull(),
  groupId: int("group_id").default(0).notNull(),
  groupPt: int("group_pt").default(0).notNull(),
  groupEn: int("group_en").default(0).notNull(),
  groupEs: int("group_es").default(0).notNull(),
  questionId: int("question_id").default(0).notNull(),
  questionPt: int("question_pt").default(0).notNull(),
  questionEn: int("question_en").default(0).notNull(),
  questionEs: int("question_es").default(0).notNull(),
  questionType: int("question_type").default(0).notNull(),
  answerOptionId: int("answer_option_id").default(0).notNull(),
  answerPt: int("answer_pt").default(0).notNull(),
  answerEs: int("answer_es").default(0).notNull(),
  answerEn: int("answer_en").default(0).notNull(),
  answer: int().default(0).notNull(),
  whitelabel: int().default(0).notNull(),
  whitelabelQuestionActive: int("whitelabel_question_active").default(0).notNull(),
  whitelabelQuestionRequired: int("whitelabel_question_required").default(0).notNull(),
  createdAt: int("created_at").default(0).notNull(),
  updatedAt: int("updated_at").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`squidId\`,1 AS \`group_id\`,1 AS \`group_pt\`,1 AS \`group_en\`,1 AS \`group_es\`,1 AS \`question_id\`,1 AS \`question_pt\`,1 AS \`question_en\`,1 AS \`question_es\`,1 AS \`question_type\`,1 AS \`answer_option_id\`,1 AS \`answer_pt\`,1 AS \`answer_es\`,1 AS \`answer_en\`,1 AS \`answer\`,1 AS \`whitelabel\`,1 AS \`whitelabel_question_active\`,1 AS \`whitelabel_question_required\`,1 AS \`created_at\`,1 AS \`updated_at\``);
var fullInstagramProfile = mysqlView("full_instagram_profile", {
  id: int().default(0).notNull(),
  squidid: int().default(0).notNull(),
  username: int().default(0).notNull(),
  identifiedat: int().default(0).notNull(),
  followers: int().default(0).notNull(),
  following: int().default(0).notNull(),
  engagementrate: int().default(0).notNull(),
  score: int().default(0).notNull(),
  isbusiness: int().default(0).notNull(),
  facebooklinked: int().default(0).notNull(),
  name: int().default(0).notNull(),
  email: int().default(0).notNull(),
  birthday: int().default(0).notNull(),
  gender: int().default(0).notNull(),
  phone: int().default(0).notNull(),
  address: int().default(0).notNull(),
  complement: int().default(0).notNull(),
  city: int().default(0).notNull(),
  uf: int().default(0).notNull(),
  country: int().default(0).notNull(),
  zipcode: int().default(0).notNull(),
  document: int().default(0).notNull(),
  isPersonAccount: int().default(0).notNull(),
  registeredat: int().default(0).notNull(),
  allowSuggestionEmail: int().default(0).notNull(),
  race: int().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`id\`,1 AS \`squidid\`,1 AS \`username\`,1 AS \`identifiedat\`,1 AS \`followers\`,1 AS \`following\`,1 AS \`engagementrate\`,1 AS \`score\`,1 AS \`isbusiness\`,1 AS \`facebooklinked\`,1 AS \`name\`,1 AS \`email\`,1 AS \`birthday\`,1 AS \`gender\`,1 AS \`phone\`,1 AS \`address\`,1 AS \`complement\`,1 AS \`city\`,1 AS \`uf\`,1 AS \`country\`,1 AS \`zipcode\`,1 AS \`document\`,1 AS \`isPersonAccount\`,1 AS \`registeredat\`,1 AS \`allowSuggestionEmail\`,1 AS \`race\``);
var instagramProfileMetrics = mysqlView("instagram_profile_metrics", {
  id: int().default(0).notNull(),
  squidId: int().default(0).notNull(),
  username: int().default(0).notNull(),
  exists: int().default(0).notNull(),
  searchable: int().default(0).notNull(),
  followers: int().default(0).notNull(),
  isBusiness: int().default(0).notNull(),
  scrapperEngagementRate: int().default(0).notNull(),
  totalMedias: int().default(0).notNull(),
  medias: int().default(0).notNull(),
  follows: int().default(0).notNull(),
  likes: int().default(0).notNull(),
  comments: int().default(0).notNull(),
  tier: int().default(0).notNull(),
  score: int().default(0).notNull(),
  score1: int().default(0).notNull(),
  score2: int().default(0).notNull(),
  score3: int().default(0).notNull(),
  score4: int().default(0).notNull(),
  score5: int().default(0).notNull(),
  storiesEffectiveReach: int().default(0).notNull(),
  profileViews: int().default(0).notNull(),
  hasMediaKit: int().default(0).notNull(),
  totalStoriesImpressions: int().default(0).notNull(),
  totalStoriesReach: int().default(0).notNull(),
  totalStoriesReplies: int().default(0).notNull(),
  totalStoriesTapBacks: int().default(0).notNull(),
  totalPostsReach: int().default(0).notNull(),
  totalPostsSaves: int().default(0).notNull(),
  totalPostsImpressions: int().default(0).notNull(),
  numberPostsActivityScore: int().default(0).notNull(),
  numberStoriesScore: int().default(0).notNull(),
  daysPostsScore: int().default(0).notNull(),
  daysStoriesScore: int().default(0).notNull(),
  advertisingPostsEngagementRate: int().default(0).notNull(),
  noAdvertisingPostsEngagementRate: int().default(0).notNull(),
  advertisingStoriesEngagementRate: int().default(0).notNull(),
  noAdvertisingStoriesEngagementRate: int().default(0).notNull(),
  advertisingContentPercentage: int().default(0).notNull(),
  advertisingPostsPercentage: int().default(0).notNull(),
  advertisingStoriesPercentage: int().default(0).notNull(),
  postImageEngagementRate: int().default(0).notNull(),
  postCarouselEngagementRate: int().default(0).notNull(),
  postVideoEngagementRate: int().default(0).notNull(),
  storiesVideoEngagementRate: int().default(0).notNull(),
  storiesImageEngagementRate: int().default(0).notNull(),
  storiesCompleteEngagementRate: int().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`id\`,1 AS \`squidId\`,1 AS \`username\`,1 AS \`exists\`,1 AS \`searchable\`,1 AS \`followers\`,1 AS \`isBusiness\`,1 AS \`scrapperEngagementRate\`,1 AS \`totalMedias\`,1 AS \`medias\`,1 AS \`follows\`,1 AS \`likes\`,1 AS \`comments\`,1 AS \`tier\`,1 AS \`score\`,1 AS \`score1\`,1 AS \`score2\`,1 AS \`score3\`,1 AS \`score4\`,1 AS \`score5\`,1 AS \`storiesEffectiveReach\`,1 AS \`profileViews\`,1 AS \`hasMediaKit\`,1 AS \`totalStoriesImpressions\`,1 AS \`totalStoriesReach\`,1 AS \`totalStoriesReplies\`,1 AS \`totalStoriesTapBacks\`,1 AS \`totalPostsReach\`,1 AS \`totalPostsSaves\`,1 AS \`totalPostsImpressions\`,1 AS \`numberPostsActivityScore\`,1 AS \`numberStoriesScore\`,1 AS \`daysPostsScore\`,1 AS \`daysStoriesScore\`,1 AS \`advertisingPostsEngagementRate\`,1 AS \`noAdvertisingPostsEngagementRate\`,1 AS \`advertisingStoriesEngagementRate\`,1 AS \`noAdvertisingStoriesEngagementRate\`,1 AS \`advertisingContentPercentage\`,1 AS \`advertisingPostsPercentage\`,1 AS \`advertisingStoriesPercentage\`,1 AS \`postImageEngagementRate\`,1 AS \`postCarouselEngagementRate\`,1 AS \`postVideoEngagementRate\`,1 AS \`storiesVideoEngagementRate\`,1 AS \`storiesImageEngagementRate\`,1 AS \`storiesCompleteEngagementRate\``);
var vwInfluencersToValidateBankAccount = mysqlView("VW_INFLUENCERS_TO_VALIDATE_BANK_ACCOUNT", {
  profileId: int().default(0).notNull(),
  updatedAt: int().default(0).notNull(),
  verificationStatus: int().default(0).notNull(),
  verificationId: int().default(0).notNull(),
  verificatedAt: int().default(0).notNull(),
  bankName: int().default(0).notNull(),
  bankCode: int().default(0).notNull(),
  bankAccountType: int().default(0).notNull(),
  bankAccountAgency: int().default(0).notNull(),
  bankAccountNumber: int().default(0).notNull(),
  bankAccountDigit: int().default(0).notNull(),
  socialNetwork: int().default(0).notNull(),
  valid: int().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`profileId\`,1 AS \`updatedAt\`,1 AS \`verificationStatus\`,1 AS \`verificationId\`,1 AS \`verificatedAt\`,1 AS \`bankName\`,1 AS \`bankCode\`,1 AS \`bankAccountType\`,1 AS \`bankAccountAgency\`,1 AS \`bankAccountNumber\`,1 AS \`bankAccountDigit\`,1 AS \`socialNetwork\`,1 AS \`valid\``);
var vwInfluencersCanAnticipate = mysqlView("VW_INFLUENCERS_CAN_ANTICIPATE", {
  id: int().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`id\``);
var vwProgressiveRegistrationQuestions = mysqlView("vw_progressive_registration_questions", {
  questionId: int("question_id").default(0).notNull(),
  questionPt: int("question_pt").default(0).notNull(),
  questionEn: int("question_en").default(0).notNull(),
  questionEs: int("question_es").default(0).notNull(),
  questionType: int("question_type").default(0).notNull(),
  groupId: int("group_id").default(0).notNull(),
  groupPt: int("group_pt").default(0).notNull(),
  groupEn: int("group_en").default(0).notNull(),
  groupEs: int("group_es").default(0).notNull(),
  answerOptionId: int("answer_option_id").default(0).notNull(),
  answerPt: int("answer_pt").default(0).notNull(),
  answerEs: int("answer_es").default(0).notNull(),
  answerEn: int("answer_en").default(0).notNull(),
  whitelabel: int().default(0).notNull(),
  whitelabelQuestionActive: int("whitelabel_question_active").default(0).notNull(),
  whitelabelQuestionRequired: int("whitelabel_question_required").default(0).notNull(),
  whitelabelQuestionCreatedAt: int("whitelabel_question_created_at").default(0).notNull(),
  whitelabelQuestionUpdatedAt: int("whitelabel_question_updated_at").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`question_id\`,1 AS \`question_pt\`,1 AS \`question_en\`,1 AS \`question_es\`,1 AS \`question_type\`,1 AS \`group_id\`,1 AS \`group_pt\`,1 AS \`group_en\`,1 AS \`group_es\`,1 AS \`answer_option_id\`,1 AS \`answer_pt\`,1 AS \`answer_es\`,1 AS \`answer_en\`,1 AS \`whitelabel\`,1 AS \`whitelabel_question_active\`,1 AS \`whitelabel_question_required\`,1 AS \`whitelabel_question_created_at\`,1 AS \`whitelabel_question_updated_at\``);

// src/databases/nps/schema.ts
var schema_exports2 = {};
__export(schema_exports2, {
  research: () => research,
  researchAnswer: () => researchAnswer,
  researchQuestion: () => researchQuestion,
  researchQuestionGroup: () => researchQuestionGroup
});
import { sql as sql2 } from "drizzle-orm";
import { datetime as datetime2, index as index2, int as int2, mysqlTable as mysqlTable2, primaryKey as primaryKey2, tinyint as tinyint2, unique as unique2, varchar as varchar2 } from "drizzle-orm/mysql-core";
var research = mysqlTable2(
  "research",
  {
    id: varchar2({ length: 36 }).notNull(),
    userId: varchar2("user_id", { length: 255 }).notNull(),
    userName: varchar2("user_name", { length: 150 }),
    userEmail: varchar2("user_email", { length: 100 }),
    campaignId: varchar2("campaign_id", { length: 255 }).notNull(),
    campaignTitle: varchar2("campaign_title", { length: 150 }),
    organizationId: varchar2("organization_id", { length: 255 }),
    organizationName: varchar2("organization_name", { length: 255 }),
    systemType: varchar2("system_type", { length: 50 }).notNull(),
    questionGroupId: varchar2("question_group_id", { length: 36 }).notNull().references(() => researchQuestionGroup.id),
    seenTime: int2("seen_time").default(0).notNull(),
    done: tinyint2().default(0).notNull(),
    createdAt: datetime2("created_at", { mode: "string", fsp: 3 }).notNull(),
    updatedAt: datetime2("updated_at", { mode: "string" }),
    deletedAt: datetime2("deleted_at", { mode: "string" })
  },
  (table) => {
    return {
      questionGroupId: index2("question_group_id").on(table.questionGroupId),
      researchId: primaryKey2({ columns: [table.id], name: "research_id" }),
      userId: unique2("user_id").on(table.userId, table.campaignId, table.questionGroupId)
    };
  }
);
var researchAnswer = mysqlTable2(
  "research_answer",
  {
    id: varchar2({ length: 36 }).notNull(),
    researchAnswer: varchar2("research_answer", { length: 255 }),
    score: int2(),
    sharedQuestionId: varchar2("shared_question_id", { length: 36 }).references(() => researchQuestion.sharedQuestionId),
    researchId: varchar2("research_id", { length: 36 }).references(() => research.id, { onDelete: "cascade" }),
    createdAt: datetime2("created_at", { mode: "string" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime2("updated_at", { mode: "string" }),
    deletedAt: datetime2("deleted_at", { mode: "string" }),
    optionalQuestion: int2("optional_question").default(0)
  },
  (table) => {
    return {
      sharedQuestionId: index2("shared_question_id").on(table.sharedQuestionId),
      researchAnswerId: primaryKey2({ columns: [table.id], name: "research_answer_id" })
    };
  }
);
var researchQuestion = mysqlTable2(
  "research_question",
  {
    id: varchar2({ length: 36 }).notNull(),
    sharedQuestionId: varchar2("shared_question_id", { length: 36 }),
    question: varchar2({ length: 255 }),
    questionType: varchar2("question_type", { length: 50 }),
    questionGroupId: varchar2("question_group_id", { length: 36 }).references(() => researchQuestionGroup.id),
    language: varchar2({ length: 5 }).default("pt-br").notNull(),
    createdAt: datetime2("created_at", { mode: "string" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime2("updated_at", { mode: "string" }),
    deletedAt: datetime2("deleted_at", { mode: "string" }),
    optional: int2().default(0)
  },
  (table) => {
    return {
      questionGroupId: index2("question_group_id").on(table.questionGroupId),
      researchQuestionId: primaryKey2({ columns: [table.id], name: "research_question_id" }),
      sharedQuestionId: unique2("shared_question_id").on(table.sharedQuestionId, table.language)
    };
  }
);
var researchQuestionGroup = mysqlTable2(
  "research_question_group",
  {
    id: varchar2({ length: 36 }).notNull(),
    name: varchar2({ length: 255 }),
    tag: varchar2({ length: 100 }).notNull(),
    createdAt: datetime2("created_at", { mode: "string" }).default(sql2`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime2("updated_at", { mode: "string" }),
    deletedAt: datetime2("deleted_at", { mode: "string" })
  },
  (table) => {
    return {
      researchQuestionGroupId: primaryKey2({ columns: [table.id], name: "research_question_group_id" }),
      tag: unique2("tag").on(table.tag)
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
import { sql as sql3 } from "drizzle-orm";
import { bigint as bigint2, char as char2, date as date2, datetime as datetime3, double as double2, float as float2, index as index3, int as int3, json, longtext, mediumtext, mysqlTable as mysqlTable3, mysqlView as mysqlView2, primaryKey as primaryKey3, text as text2, tinyint as tinyint3, unique as unique3, varchar as varchar3 } from "drizzle-orm/mysql-core";
var charges = mysqlTable3(
  "charges",
  {
    seqId: bigint2({ mode: "number" }).autoincrement().notNull(),
    createdAt: datetime3({ mode: "date" }).notNull(),
    updatedAt: datetime3({ mode: "date" }),
    deletedAt: datetime3({ mode: "date" }),
    amount: double2({ precision: 10, scale: 2 }).notNull(),
    totalAmount: double2({ precision: 10, scale: 2 }).notNull(),
    fees: double2({ precision: 10, scale: 2 }).notNull(),
    dueDate: date2({ mode: "date" }),
    currency: varchar3({ length: 3 }).default("BRL").notNull(),
    paymentOrderUrl: longtext(),
    paymentGatewayTransactionId: longtext()
  },
  (table) => {
    return {
      chargesSeqId: primaryKey3({ columns: [table.seqId], name: "charges_seqId" })
    };
  }
);
var companyFiles = mysqlTable3(
  "companyFiles",
  {
    seqId: bigint2({ mode: "number" }).autoincrement().notNull(),
    squidId: varchar3({ length: 36 }).notNull(),
    companyDocument: varchar3({ length: 50 }).notNull(),
    urlStorage: text2(),
    status: varchar3({ length: 40 }).notNull(),
    reason: varchar3({ length: 100 }),
    uploadedAt: date2({ mode: "date" }),
    validatedAt: date2({ mode: "date" }),
    deletedAt: date2({ mode: "date" })
  },
  (table) => {
    return {
      companyFilesSeqId: primaryKey3({ columns: [table.seqId], name: "companyFiles_seqId" })
    };
  }
);
var compositions = mysqlTable3(
  "compositions",
  {
    seqId: int3().autoincrement().notNull(),
    chargeId: int3().notNull(),
    squidId: varchar3({ length: 36 }),
    username: varchar3({ length: 255 }),
    paymentType: varchar3({ length: 5 }),
    document: varchar3({ length: 50 }),
    fullName: varchar3({ length: 255 }),
    birthday: date2({ mode: "date" }),
    transactionId: varchar3({ length: 60 }),
    dueDate: date2({ mode: "date" }),
    transactionStatus: varchar3({ length: 50 }),
    netValue: float2(),
    grossValue: float2(),
    nf: varchar3({ length: 255 }),
    pis: varchar3({ length: 50 }),
    address: varchar3({ length: 255 }),
    addressNumber: varchar3({ length: 45 }),
    neighborhood: varchar3({ length: 255 }),
    zipcode: varchar3({ length: 15 }),
    city: varchar3({ length: 255 }),
    uf: varchar3({ length: 255 }),
    country: varchar3({ length: 255 }),
    bankAccountNumber: varchar3({ length: 50 }),
    bankAccountDigit: varchar3({ length: 5 }),
    bankAccountAgency: varchar3({ length: 11 }),
    bankCode: varchar3({ length: 10 }),
    bankName: varchar3({ length: 100 }),
    bankAccountType: varchar3({ length: 20 })
  },
  (table) => {
    return {
      compositionsSeqId: primaryKey3({ columns: [table.seqId], name: "compositions_seqId" }),
      transactionId: unique3("transactionId").on(table.transactionId)
    };
  }
);
var customerPayments = mysqlTable3(
  "customerPayments",
  {
    seqId: bigint2({ mode: "number" }).autoincrement().notNull(),
    transactionId: varchar3({ length: 60 }).notNull().references(() => transactions.transactionId),
    createdAt: datetime3({ mode: "date" }).notNull(),
    updatedAt: datetime3({ mode: "date" }),
    deletedAt: datetime3({ mode: "date" })
  },
  (table) => {
    return {
      transactionId: index3("transactionId").on(table.transactionId),
      customerPaymentsSeqId: primaryKey3({ columns: [table.seqId], name: "customerPayments_seqId" })
    };
  }
);
var influencerPayments = mysqlTable3(
  "influencerPayments",
  {
    seqId: bigint2({ mode: "number" }).autoincrement().notNull(),
    transactionId: varchar3({ length: 60 }).notNull().references(() => transactions.transactionId, { onDelete: "cascade", onUpdate: "cascade" }),
    recruitmentId: varchar3({ length: 60 }).notNull(),
    campaignId: varchar3({ length: 50 }).notNull(),
    campaignName: varchar3({ length: 150 }).notNull(),
    campaignEndDate: datetime3({ mode: "date" }),
    campaignTimezone: varchar3({ length: 100 }),
    dateUsedToCalculate: datetime3({ mode: "date" }),
    squidId: varchar3({ length: 60 }).notNull(),
    instagramUsername: varchar3({ length: 50 }),
    instagramProfileId: bigint2({ mode: "number" }),
    youtubeChannel: varchar3({ length: 50 }),
    youtubeChannelId: varchar3({ length: 36 }),
    pinterestUsername: varchar3({ length: 50 }),
    pinterestProfileId: varchar3({ length: 36 }),
    nfId: varchar3({ length: 60 }),
    whitelabelId: varchar3({ length: 24 }),
    whitelabelDomain: varchar3({ length: 150 }),
    createdAt: datetime3({ mode: "date" }).notNull(),
    updatedAt: datetime3({ mode: "date" }),
    deletedAt: datetime3({ mode: "date" }),
    paymentStatus: varchar3({ length: 50 }).default("").notNull(),
    amount: float2().notNull(),
    sourceId: bigint2({ mode: "number" }),
    socialNetwork: varchar3({ length: 255 }),
    socialNetworkId: varchar3({ length: 255 }),
    socialNetworkUsername: varchar3({ length: 255 }),
    responsiblePayment: varchar3({ length: 200 }),
    responsibleId: varchar3({ length: 200 }),
    idPipefy: varchar3({ length: 60 }),
    description: varchar3({ length: 50 }),
    customDueDate: date2({ mode: "date" }),
    note: varchar3({ length: 1e3 }),
    scopeId: varchar3({ length: 32 })
  },
  (table) => {
    return {
      deletedAtIdx: index3("influencerPayments_deletedAt_IDX").on(table.deletedAt),
      idPipefyIdx: index3("influencerPayments_idPipefy_IDX").on(table.idPipefy, table.campaignId, table.seqId),
      influencerPaymentsSeqId: primaryKey3({ columns: [table.seqId], name: "influencerPayments_seqId" })
    };
  }
);
var influencerZoopBankAccounts = mysqlTable3(
  "influencerZoopBankAccounts",
  {
    seqId: bigint2({ mode: "number" }).autoincrement().notNull(),
    squidId: varchar3({ length: 60 }).notNull(),
    paymentGatewaySellerId: varchar3({ length: 60 }).notNull(),
    paymentGatewayBankAccountId: varchar3({ length: 60 }).notNull(),
    paymentGatewayBankAccountToken: varchar3({ length: 60 }).default(""),
    bankCode: varchar3({ length: 10 }).notNull(),
    bankName: varchar3({ length: 100 }).notNull(),
    bankAccountHolderName: varchar3({ length: 100 }),
    bankAccountHolderDocument: varchar3({ length: 15 }).notNull(),
    bankAccountHolderTradingName: varchar3({ length: 100 }),
    bankAccountRoutingNumber: varchar3({ length: 10 }).notNull(),
    bankAccountNumber: varchar3({ length: 50 }).notNull(),
    bankAccountVerificationNumber: varchar3({ length: 1 }).notNull(),
    bankAccountType: varchar3({ length: 20 }).notNull(),
    bankAccountHolderType: varchar3({ length: 20 }).notNull(),
    createdAt: datetime3({ mode: "date" }),
    updatedAt: datetime3({ mode: "date" }),
    deletedAt: datetime3({ mode: "date" })
  },
  (table) => {
    return {
      influencerZoopBankAccountsSeqId: primaryKey3({ columns: [table.seqId], name: "influencerZoopBankAccounts_seqId" }),
      squidId: unique3("squidId").on(table.squidId)
    };
  }
);
var nfCnaes = mysqlTable3(
  "nf_cnaes",
  {
    id: int3().autoincrement().notNull(),
    uf: char2({ length: 2 }).notNull(),
    codigo: varchar3({ length: 45 }).notNull(),
    createdAt: datetime3("created_at", { mode: "date" }).default(sql3`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime3("updated_at", { mode: "date" }).default(sql3`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      nfCnaesId: primaryKey3({ columns: [table.id], name: "nf_cnaes_id" }),
      idUnique: unique3("id_UNIQUE").on(table.id)
    };
  }
);
var nfImport = mysqlTable3(
  "nf_import",
  {
    id: int3().autoincrement().notNull(),
    objectId: varchar3({ length: 24 }).notNull(),
    numeroNf: varchar3("numero_nf", { length: 45 }).notNull(),
    dataEmissao: datetime3("data_emissao", { mode: "date" }).notNull(),
    ufGerador: char2("uf_gerador", { length: 2 }).notNull(),
    codigoMunicipio: varchar3("codigo_municipio", { length: 45 }),
    razaoSocial: varchar3("razao_social", { length: 450 }).notNull(),
    identificacaoPrestador: varchar3("identificacao_prestador", { length: 14 }).notNull(),
    inscricaoEstadual: varchar3("inscricao_estadual", { length: 14 }),
    inscricaoMunicipal: varchar3("inscricao_municipal", { length: 45 }),
    discriminacaoServico: longtext("discriminacao_servico"),
    valorAliquota: float2("valor_aliquota"),
    valorServico: float2("valor_servico"),
    valorIss: float2("valor_iss"),
    issRetido: float2("iss_retido"),
    listaServico: varchar3("lista_servico", { length: 45 }),
    municipioServico: varchar3("municipio_servico", { length: 10 }),
    chave: varchar3({ length: 90 }).notNull(),
    nfStorageTmp: varchar3("nf_storage_tmp", { length: 150 }).notNull(),
    codigoVerificacao: varchar3("codigo_verificacao", { length: 45 }).notNull(),
    createdAt: datetime3("created_at", { mode: "date" }).default(sql3`(CURRENT_TIMESTAMP)`).notNull(),
    updatedAt: datetime3("updated_at", { mode: "date" }).default(sql3`(CURRENT_TIMESTAMP)`).notNull(),
    deletedAt: datetime3("deleted_at", { mode: "date" })
  },
  (table) => {
    return {
      nfImportId: primaryKey3({ columns: [table.id], name: "nf_import_id" }),
      idUnique: unique3("id_UNIQUE").on(table.id),
      chaveUnique: unique3("chave_UNIQUE").on(table.chave)
    };
  }
);
var nfs = mysqlTable3(
  "nfs",
  {
    seqId: bigint2({ mode: "number" }).autoincrement().notNull(),
    nfId: varchar3({ length: 60 }).notNull(),
    transactionId: varchar3({ length: 60 }).notNull().references(() => transactions.transactionId),
    squidId: varchar3({ length: 60 }).notNull(),
    serialnumber: varchar3({ length: 45 }),
    value: double2(),
    emissionDate: date2({ mode: "date" }),
    urlStorage: text2().notNull(),
    xmlUrlStorage: text2(),
    backofficeApproved: tinyint3().default(0).notNull(),
    parsedValue: double2(),
    parsedEmissionDate: date2({ mode: "date" }),
    parsedSerialNumber: varchar3({ length: 45 }),
    parsedCnae: varchar3({ length: 45 }),
    issValue: float2(),
    imported: varchar3({ length: 90 }),
    createdAt: datetime3({ mode: "date" }).default(sql3`(CURRENT_TIMESTAMP)`).notNull(),
    deletedAt: datetime3({ mode: "date" })
  },
  (table) => {
    return {
      transactionId: index3("transactionId").on(table.transactionId),
      nfsSeqId: primaryKey3({ columns: [table.seqId], name: "nfs_seqId" })
    };
  }
);
var transactionBankAccounts = mysqlTable3(
  "transactionBankAccounts",
  {
    seqId: bigint2({ mode: "number" }).autoincrement().notNull(),
    transactionId: varchar3({ length: 60 }).notNull().references(() => transactions.transactionId),
    bankCode: varchar3({ length: 20 }).notNull(),
    bankName: varchar3({ length: 100 }).notNull(),
    bankAccountHolderName: varchar3({ length: 150 }).notNull(),
    bankAccountHolderDocument: varchar3({ length: 100 }).notNull(),
    bankAccountHolderTradingName: varchar3({ length: 150 }),
    bankAccountRoutingNumber: varchar3({ length: 20 }).notNull(),
    bankAccountNumber: bigint2({ mode: "number" }).notNull(),
    bankAccountVerificationNumber: varchar3({ length: 3 }),
    bankAccountType: varchar3({ length: 20 }).default("checking").notNull(),
    bankAccountHolderType: varchar3({ length: 2 }).default("PF").notNull(),
    paymentGatewayToken: varchar3({ length: 60 }),
    createdAt: datetime3({ mode: "date" }).notNull(),
    updatedAt: datetime3({ mode: "date" }),
    deletedAt: datetime3({ mode: "date" }),
    paymentGatewayWithdrawTransactionId: varchar3({ length: 60 }),
    paymentGatewayWithdrawAuthorizationCode: varchar3({ length: 100 })
  },
  (table) => {
    return {
      transactionBankAccountsSeqId: primaryKey3({ columns: [table.seqId], name: "transactionBankAccounts_seqId" }),
      transactionIdUnique: unique3("transactionId_UNIQUE").on(table.transactionId)
    };
  }
);
var transactionBeneficiaries = mysqlTable3(
  "transactionBeneficiaries",
  {
    seqId: bigint2({ mode: "number" }).autoincrement().notNull(),
    transactionId: varchar3({ length: 60 }).notNull().references(() => transactions.transactionId, { onDelete: "cascade", onUpdate: "cascade" }).references(() => transactions.transactionId),
    beneficiaryTradingName: varchar3({ length: 150 }),
    beneficiaryFirstName: varchar3({ length: 100 }),
    beneficiaryLastName: varchar3({ length: 100 }),
    beneficiaryEmail: varchar3({ length: 100 }).notNull(),
    beneficiaryDocumentNumber: varchar3({ length: 20 }).notNull(),
    beneficiaryBirthDate: date2({ mode: "date" }),
    paymentGatewayId: varchar3({ length: 60 }),
    createdAt: datetime3({ mode: "date" }).notNull(),
    updatedAt: datetime3({ mode: "date" }),
    deletedAt: datetime3({ mode: "date" }),
    recordEmployment: varchar3({ length: 50 }),
    companyFileId: int3()
  },
  (table) => {
    return {
      transactionBeneficiariesSeqId: primaryKey3({ columns: [table.seqId], name: "transactionBeneficiaries_seqId" }),
      transactionIdUnique: unique3("transactionId_UNIQUE").on(table.transactionId)
    };
  }
);
var transactions = mysqlTable3(
  "transactions",
  {
    transactionId: varchar3({ length: 60 }).notNull(),
    squidId: varchar3({ length: 60 }),
    transactionStatus: varchar3({ length: 50 }).default("pending").notNull(),
    paymentType: varchar3({ length: 5 }),
    netValue: float2().notNull(),
    grossValue: float2().notNull(),
    inssAliquot: float2(),
    inssValue: float2(),
    irAliquot: float2(),
    irDeduct: float2(),
    irValue: float2(),
    nfId: varchar3({ length: 60 }),
    issAliquot: float2(),
    issValue: float2(),
    agent: tinyint3().default(0),
    credit: float2(),
    transactionStatusDetail: varchar3({ length: 450 }),
    amount: float2().notNull(),
    anticipationValue: float2(),
    anticipationAliquot: float2(),
    anticipationContractAccepted: varchar3({ length: 450 }),
    anticipationReceiptUrl: varchar3({ length: 450 }),
    anticipationIgnore: tinyint3().default(0).notNull(),
    inOrOut: varchar3({ length: 3 }).default("out").notNull(),
    currency: varchar3({ length: 3 }).default("BRL").notNull(),
    transactionIdSource: varchar3({ length: 60 }),
    transactionErrorDetail: varchar3({ length: 200 }),
    paymentGatewayTransactionId: varchar3({ length: 255 }),
    paymentGatewayReceiptUrl: varchar3({ length: 450 }),
    paymentGatewayReceiptBankUrl: varchar3({ length: 450 }),
    dueDate: date2({ mode: "date" }),
    transactionDate: datetime3({ mode: "date" }).notNull(),
    paidedAt: datetime3({ mode: "date" }),
    withdrawingDate: datetime3({ mode: "date" }),
    createdAt: datetime3({ mode: "date" }).notNull(),
    updatedAt: datetime3({ mode: "date" }),
    deletedAt: datetime3({ mode: "date" })
  },
  (table) => {
    return {
      transactionStatusIdx: index3("transactions_transactionStatus_IDX").on(table.transactionStatus),
      deletedAtIdx: index3("transactions_deletedAt_IDX").on(table.deletedAt),
      transactionsTransactionId: primaryKey3({ columns: [table.transactionId], name: "transactions_transactionId" })
    };
  }
);
var transactionsHistory = mysqlTable3("transactionsHistory", {
  transactionId: varchar3({ length: 60 }).notNull(),
  squidId: varchar3({ length: 60 }),
  transactionStatus: varchar3({ length: 50 }).default("pending").notNull(),
  paymentType: varchar3({ length: 5 }),
  netValue: float2().notNull(),
  grossValue: float2().notNull(),
  inssAliquot: float2(),
  inssValue: float2(),
  irAliquot: float2(),
  inOrOut: varchar3({ length: 3 }).default("out").notNull(),
  irDeduct: float2(),
  irValue: float2(),
  nfId: varchar3({ length: 60 }),
  issAliquot: float2(),
  issValue: float2(),
  anticipationAliquot: float2(),
  anticipationValue: float2(),
  anticipationContractAccepted: varchar3({ length: 450 }),
  paymentGatewayTransactionId: longtext(),
  currency: varchar3({ length: 3 }).default("BRL").notNull(),
  amount: float2().notNull(),
  transactionStatusDetail: varchar3({ length: 450 }),
  transactionErrorDetail: varchar3({ length: 200 }),
  transactionDate: datetime3({ mode: "date" }).notNull(),
  dueDate: date2({ mode: "date" }),
  createdAt: datetime3({ mode: "date" }).notNull(),
  updatedAt: datetime3({ mode: "date" }),
  paidedAt: datetime3({ mode: "date" }),
  withdrawingDate: datetime3({ mode: "date" }),
  deletedAt: datetime3({ mode: "date" })
});
var transactionsSchedule = mysqlTable3(
  "transactions_schedule",
  {
    id: int3().autoincrement().notNull(),
    scheduleDate: date2("schedule_date", { mode: "date" }).notNull(),
    flowId: int3("flow_id").notNull(),
    description: varchar3({ length: 45 }),
    createdAt: datetime3("created_at", { mode: "date" }).default(sql3`(CURRENT_TIMESTAMP)`),
    updatedAt: datetime3("updated_at", { mode: "date" }).default(sql3`(CURRENT_TIMESTAMP)`)
  },
  (table) => {
    return {
      transactionsScheduleId: primaryKey3({ columns: [table.id], name: "transactions_schedule_id" }),
      idUnique: unique3("id_UNIQUE").on(table.id)
    };
  }
);
var transfeeraRawDataCallback = mysqlTable3(
  "transfeeraRawDataCallback",
  {
    id: int3({ unsigned: true }).autoincrement().notNull(),
    header: mediumtext().notNull(),
    payload: json(),
    validationTest: json(),
    createdAt: datetime3("created_at", { mode: "date" }).default(sql3`(CURRENT_TIMESTAMP)`).notNull()
  },
  (table) => {
    return {
      transfeeraRawDataCallbackId: primaryKey3({ columns: [table.id], name: "transfeeraRawDataCallback_id" })
    };
  }
);
var webhooksLogs = mysqlTable3(
  "webhooks_logs",
  {
    id: int3().autoincrement().notNull(),
    header: longtext(),
    payload: longtext(),
    querystring: varchar3({ length: 255 }),
    service: varchar3({ length: 45 }).notNull(),
    authentication: longtext(),
    createdAt: datetime3("created_at", { mode: "date" }).default(sql3`(CURRENT_TIMESTAMP)`)
  },
  (table) => {
    return {
      webhooksLogsId: primaryKey3({ columns: [table.id], name: "webhooks_logs_id" }),
      idUnique: unique3("id_UNIQUE").on(table.id)
    };
  }
);
var dueDateTransactions = mysqlView2("dueDate_transactions", {
  dueDate: int3().default(0).notNull(),
  minCreatedAt: int3("min_createdAt").default(0).notNull(),
  maxCreatedAt: int3("max_createdAt").default(0).notNull(),
  countTotal: int3("count_total").default(0).notNull(),
  sumTotal: int3("sum_total").default(0).notNull(),
  countPaid: int3("count_paid").default(0).notNull(),
  somaPaid: int3("soma_paid").default(0).notNull(),
  countNew: int3("count_new").default(0).notNull(),
  somaNew: int3("soma_new").default(0).notNull(),
  countPending: int3("count_pending").default(0).notNull(),
  somaPending: int3("soma_pending").default(0).notNull(),
  countProcessing: int3("count_processing").default(0).notNull(),
  somaProcessing: int3("soma_processing").default(0).notNull(),
  countReadyToPay: int3("count_readyToPay").default(0).notNull(),
  somaReadyToPay: int3("soma_readyToPay").default(0).notNull(),
  countWithdrawing: int3("count_withdrawing").default(0).notNull(),
  somaWithdrawing: int3("soma_withdrawing").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql3`select 1 AS \`dueDate\`,1 AS \`min_createdAt\`,1 AS \`max_createdAt\`,1 AS \`count_total\`,1 AS \`sum_total\`,1 AS \`count_paid\`,1 AS \`soma_paid\`,1 AS \`count_new\`,1 AS \`soma_new\`,1 AS \`count_pending\`,1 AS \`soma_pending\`,1 AS \`count_processing\`,1 AS \`soma_processing\`,1 AS \`count_readyToPay\`,1 AS \`soma_readyToPay\`,1 AS \`count_withdrawing\`,1 AS \`soma_withdrawing\``);
var transactionConsolidated = mysqlView2("transaction_consolidated", {
  transactionId: int3().default(0).notNull(),
  recruitmentId: int3().default(0).notNull(),
  campaignId: int3().default(0).notNull(),
  campaignName: int3().default(0).notNull(),
  squidId: int3().default(0).notNull(),
  instagramUsername: int3().default(0).notNull(),
  instagramProfileId: int3().default(0).notNull(),
  youtubeChannel: int3().default(0).notNull(),
  youtubeChannelId: int3().default(0).notNull(),
  pinterestUsername: int3().default(0).notNull(),
  pinterestProfileId: int3().default(0).notNull(),
  createdAt: int3().default(0).notNull(),
  updatedAt: int3().default(0).notNull(),
  deletedAt: int3().default(0).notNull(),
  paymentStatus: int3().default(0).notNull(),
  amount: int3().default(0).notNull(),
  dueDate: int3().default(0).notNull(),
  transactionStatus: int3().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql3`select 1 AS \`transactionId\`,1 AS \`recruitmentId\`,1 AS \`campaignId\`,1 AS \`campaignName\`,1 AS \`squidId\`,1 AS \`instagramUsername\`,1 AS \`instagramProfileId\`,1 AS \`youtubeChannel\`,1 AS \`youtubeChannelId\`,1 AS \`pinterestUsername\`,1 AS \`pinterestProfileId\`,1 AS \`createdAt\`,1 AS \`updatedAt\`,1 AS \`deletedAt\`,1 AS \`paymentStatus\`,1 AS \`amount\`,1 AS \`dueDate\`,1 AS \`transactionStatus\``);
var vwTransfeeraWebhookReturn = mysqlView2("VW_TRANSFEERA_WEBHOOK_RETURN", {
  webhookId: int3().default(0).notNull(),
  idTransfer: int3().default(0).notNull(),
  transactionId: int3().default(0).notNull(),
  status: int3().default(0).notNull(),
  description: int3().default(0).notNull(),
  savedAt: int3().default(0).notNull(),
  tipo: int3().default(0).notNull(),
  payload: int3().default(0).notNull(),
  signature: int3().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql3`select 1 AS \`webhookId\`,1 AS \`idTransfer\`,1 AS \`transactionId\`,1 AS \`status\`,1 AS \`description\`,1 AS \`savedAt\`,1 AS \`tipo\`,1 AS \`payload\`,1 AS \`signature\``);
var campaignsTransactions = mysqlView2("campaigns_transactions", {
  campaignId: int3().default(0).notNull(),
  campaignName: int3().default(0).notNull(),
  minCreatedAt: int3("min_createdAt").default(0).notNull(),
  maxCreatedAt: int3("max_createdAt").default(0).notNull(),
  minDueDate: int3("min_dueDate").default(0).notNull(),
  maxDueDate: int3("max_dueDate").default(0).notNull(),
  countTotal: int3("count_total").default(0).notNull(),
  sumTotal: int3("sum_total").default(0).notNull(),
  countPaid: int3("count_paid").default(0).notNull(),
  somaPaid: int3("soma_paid").default(0).notNull(),
  countNew: int3("count_new").default(0).notNull(),
  somaNew: int3("soma_new").default(0).notNull(),
  countPending: int3("count_pending").default(0).notNull(),
  somaPending: int3("soma_pending").default(0).notNull(),
  countProcessing: int3("count_processing").default(0).notNull(),
  somaProcessing: int3("soma_processing").default(0).notNull(),
  countReadyToPay: int3("count_readyToPay").default(0).notNull(),
  somaReadyToPay: int3("soma_readyToPay").default(0).notNull(),
  countWithdrawing: int3("count_withdrawing").default(0).notNull(),
  somaWithdrawing: int3("soma_withdrawing").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql3`select 1 AS \`campaignId\`,1 AS \`campaignName\`,1 AS \`min_createdAt\`,1 AS \`max_createdAt\`,1 AS \`min_dueDate\`,1 AS \`max_dueDate\`,1 AS \`count_total\`,1 AS \`sum_total\`,1 AS \`count_paid\`,1 AS \`soma_paid\`,1 AS \`count_new\`,1 AS \`soma_new\`,1 AS \`count_pending\`,1 AS \`soma_pending\`,1 AS \`count_processing\`,1 AS \`soma_processing\`,1 AS \`count_readyToPay\`,1 AS \`soma_readyToPay\`,1 AS \`count_withdrawing\`,1 AS \`soma_withdrawing\``);
var anoMesDueDateTransactions = mysqlView2("ano_mes_dueDate_transactions", {
  anoMes: int3("ano_mes").default(0).notNull(),
  minCreatedAt: int3("min_createdAt").default(0).notNull(),
  maxCreatedAt: int3("max_createdAt").default(0).notNull(),
  minDueDate: int3("min_dueDate").default(0).notNull(),
  maxDueDate: int3("max_dueDate").default(0).notNull(),
  countTotal: int3("count_total").default(0).notNull(),
  sumTotal: int3("sum_total").default(0).notNull(),
  countPaid: int3("count_paid").default(0).notNull(),
  somaPaid: int3("soma_paid").default(0).notNull(),
  countNew: int3("count_new").default(0).notNull(),
  somaNew: int3("soma_new").default(0).notNull(),
  countPending: int3("count_pending").default(0).notNull(),
  somaPending: int3("soma_pending").default(0).notNull(),
  countProcessing: int3("count_processing").default(0).notNull(),
  somaProcessing: int3("soma_processing").default(0).notNull(),
  countReadyToPay: int3("count_readyToPay").default(0).notNull(),
  somaReadyToPay: int3("soma_readyToPay").default(0).notNull(),
  countWithdrawing: int3("count_withdrawing").default(0).notNull(),
  somaWithdrawing: int3("soma_withdrawing").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql3`select 1 AS \`ano_mes\`,1 AS \`min_createdAt\`,1 AS \`max_createdAt\`,1 AS \`min_dueDate\`,1 AS \`max_dueDate\`,1 AS \`count_total\`,1 AS \`sum_total\`,1 AS \`count_paid\`,1 AS \`soma_paid\`,1 AS \`count_new\`,1 AS \`soma_new\`,1 AS \`count_pending\`,1 AS \`soma_pending\`,1 AS \`count_processing\`,1 AS \`soma_processing\`,1 AS \`count_readyToPay\`,1 AS \`soma_readyToPay\`,1 AS \`count_withdrawing\`,1 AS \`soma_withdrawing\``);
var vwTransactionsWithoutInfluencerPayment = mysqlView2("VW_TRANSACTIONS_WITHOUT_INFLUENCER_PAYMENT", {
  transactionId: int3().default(0).notNull(),
  dueDate: int3().default(0).notNull(),
  createdAt: int3().default(0).notNull(),
  deletedAt: int3().default(0).notNull(),
  squidId: int3().default(0).notNull(),
  transactionStatus: int3().default(0).notNull(),
  netValue: int3().default(0).notNull(),
  grossValue: int3().default(0).notNull(),
  paymentType: int3().default(0).notNull(),
  transactionIdInfluencerPayments: int3("transactionId.influencerPayments").default(0).notNull(),
  seqid: int3().default(0).notNull(),
  responsiblePayment: int3().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql3`select 1 AS \`transactionId\`,1 AS \`dueDate\`,1 AS \`createdAt\`,1 AS \`deletedAt\`,1 AS \`squidId\`,1 AS \`transactionStatus\`,1 AS \`netValue\`,1 AS \`grossValue\`,1 AS \`paymentType\`,1 AS \`transactionId.influencerPayments\`,1 AS \`seqid\`,1 AS \`responsiblePayment\``);
var influencersTotalTransactions = mysqlView2("influencers_total_transactions", {
  squidId: int3().default(0).notNull(),
  instagramUsername: int3().default(0).notNull(),
  instagramProfileId: int3().default(0).notNull(),
  youtubeChannel: int3().default(0).notNull(),
  youtubeChannelId: int3().default(0).notNull(),
  pinterestUsername: int3().default(0).notNull(),
  pinterestProfileId: int3().default(0).notNull(),
  minCreatedAt: int3("min_createdAt").default(0).notNull(),
  maxCreatedAt: int3("max_createdAt").default(0).notNull(),
  minDueDate: int3("min_dueDate").default(0).notNull(),
  maxDueDate: int3("max_dueDate").default(0).notNull(),
  countTotal: int3("count_total").default(0).notNull(),
  sumTotal: int3("sum_total").default(0).notNull(),
  countPaid: int3("count_paid").default(0).notNull(),
  somaPaid: int3("soma_paid").default(0).notNull(),
  countNew: int3("count_new").default(0).notNull(),
  somaNew: int3("soma_new").default(0).notNull(),
  countPending: int3("count_pending").default(0).notNull(),
  somaPending: int3("soma_pending").default(0).notNull(),
  countProcessing: int3("count_processing").default(0).notNull(),
  somaProcessing: int3("soma_processing").default(0).notNull(),
  countReadyToPay: int3("count_readyToPay").default(0).notNull(),
  somaReadyToPay: int3("soma_readyToPay").default(0).notNull(),
  countWithdrawing: int3("count_withdrawing").default(0).notNull(),
  somaWithdrawing: int3("soma_withdrawing").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql3`select 1 AS \`squidId\`,1 AS \`instagramUsername\`,1 AS \`instagramProfileId\`,1 AS \`youtubeChannel\`,1 AS \`youtubeChannelId\`,1 AS \`pinterestUsername\`,1 AS \`pinterestProfileId\`,1 AS \`min_createdAt\`,1 AS \`max_createdAt\`,1 AS \`min_dueDate\`,1 AS \`max_dueDate\`,1 AS \`count_total\`,1 AS \`sum_total\`,1 AS \`count_paid\`,1 AS \`soma_paid\`,1 AS \`count_new\`,1 AS \`soma_new\`,1 AS \`count_pending\`,1 AS \`soma_pending\`,1 AS \`count_processing\`,1 AS \`soma_processing\`,1 AS \`count_readyToPay\`,1 AS \`soma_readyToPay\`,1 AS \`count_withdrawing\`,1 AS \`soma_withdrawing\``);
var pagamentosForaDoPrazo = mysqlView2("pagamentos_fora_do_prazo", {
  seqId: int3().default(0).notNull(),
  transactionId: int3().default(0).notNull(),
  recruitmentId: int3().default(0).notNull(),
  campaignId: int3().default(0).notNull(),
  campaignName: int3().default(0).notNull(),
  "date(ipCampaignEndDate)": int3("date(IP.campaignEndDate)").default(0).notNull(),
  squidId: int3().default(0).notNull(),
  instagramUsername: int3().default(0).notNull(),
  youtubeChannel: int3().default(0).notNull(),
  amount: int3().default(0).notNull(),
  "date(ipCreatedAt)": int3("date(IP.createdAt)").default(0).notNull(),
  dueDate: int3().default(0).notNull(),
  transactionStatus: int3().default(0).notNull(),
  paymentType: int3().default(0).notNull(),
  "date(trPaidedAt)": int3("date(TR.paidedAt)").default(0).notNull(),
  nameExp16: int3("Name_exp_16").default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql3`select 1 AS \`seqId\`,1 AS \`transactionId\`,1 AS \`recruitmentId\`,1 AS \`campaignId\`,1 AS \`campaignName\`,1 AS \`date(IP.campaignEndDate)\`,1 AS \`squidId\`,1 AS \`instagramUsername\`,1 AS \`youtubeChannel\`,1 AS \`amount\`,1 AS \`date(IP.createdAt)\`,1 AS \`dueDate\`,1 AS \`transactionStatus\`,1 AS \`paymentType\`,1 AS \`date(TR.paidedAt)\`,1 AS \`Name_exp_16\``);
var vmTransactionsReadyToPayInCurrentMonth = mysqlView2("VM_TRANSACTIONS_READY_TO_PAY_IN_CURRENT_MONTH", {
  squidId: int3().default(0).notNull(),
  verificationStatus: int3().default(0).notNull(),
  verificationId: int3().default(0).notNull(),
  transactionId: int3().default(0).notNull(),
  dueDate: int3().default(0).notNull(),
  createdAt: int3().default(0).notNull(),
  netValue: int3().default(0).notNull(),
  transactionStatus: int3().default(0).notNull(),
  paidedAt: int3().default(0).notNull(),
  withdrawingDate: int3().default(0).notNull(),
  verificatedAt: int3().default(0).notNull(),
  updatedAt: int3().default(0).notNull(),
  bankAccountType: int3().default(0).notNull(),
  profileId: int3().default(0).notNull(),
  holderName: int3().default(0).notNull(),
  holderDocument: int3().default(0).notNull(),
  bankCode: int3().default(0).notNull(),
  bankAccountAgency: int3().default(0).notNull(),
  bankAccountNumber: int3().default(0).notNull(),
  bankAccountDigit: int3().default(0).notNull()
}).algorithm("undefined").sqlSecurity("definer").as(sql3`select 1 AS \`squidId\`,1 AS \`verificationStatus\`,1 AS \`verificationId\`,1 AS \`transactionId\`,1 AS \`dueDate\`,1 AS \`createdAt\`,1 AS \`netValue\`,1 AS \`transactionStatus\`,1 AS \`paidedAt\`,1 AS \`withdrawingDate\`,1 AS \`verificatedAt\`,1 AS \`updatedAt\`,1 AS \`bankAccountType\`,1 AS \`profileId\`,1 AS \`holderName\`,1 AS \`holderDocument\`,1 AS \`bankCode\`,1 AS \`bankAccountAgency\`,1 AS \`bankAccountNumber\`,1 AS \`bankAccountDigit\``);
export {
  schema_exports as influencersDb,
  schema_exports2 as npsDb,
  schema_exports3 as paymentDb
};
