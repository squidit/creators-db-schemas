import { sql } from "drizzle-orm";
import { bigint, char, date, datetime, decimal, double, float, index, int, mysqlEnum, mysqlTable, mysqlView, primaryKey, text, timestamp, tinyint, unique, varchar } from "drizzle-orm/mysql-core";

export const blockedtags = mysqlTable("blockedtags", {
	id: int().autoincrement().notNull(),
	tag: varchar({ length: 20 }),
},
(table) => {
	return {
		blockedtagsId: primaryKey({ columns: [table.id], name: "blockedtags_id"}),
		tag: unique("tag").on(table.tag),
	}
});

export const blockedusers = mysqlTable("blockedusers", {
	profileId: varchar({ length: 36 }).notNull().references(() => profiles.id),
	whitelabel: varchar({ length: 24 }).default('-').notNull(),
	organization: varchar({ length: 24 }).default('-').notNull(),
	reason: varchar({ length: 255 }).notNull(),
	responsibleId: varchar({ length: 255 }).notNull(),
	responsibleFullName: varchar({ length: 255 }).notNull(),
	unregistered: tinyint().default(0).notNull(),
	createdAt: datetime({ mode: 'date'}).notNull(),
	updatedAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	logstashProcessedAt: datetime({ mode: 'date'}),
	deletedAt: datetime({ mode: 'date'}),
	campaignId: varchar({ length: 255 }),
	campaignName: varchar({ length: 255 }),
},
(table) => {
	return {
		blockedusersProfileIdWhitelabel: primaryKey({ columns: [table.profileId, table.whitelabel], name: "blockedusers_profileId_whitelabel"}),
	}
});

export const deletedProfiles = mysqlTable("deletedProfiles", {
	id: int().autoincrement().notNull(),
	profileId: varchar({ length: 50 }).notNull(),
	community: varchar({ length: 255 }),
	motivation: varchar({ length: 255 }).notNull(),
	deletionDate: date({ mode: 'date' }).notNull(),
	email: varchar({ length: 255 }),
	document: varchar({ length: 45 }),
	recordEmployment: varchar({ length: 50 }),
	createdAt: date({ mode: 'date' }),
	updatedAt: date({ mode: 'date' }),
},
(table) => {
	return {
		deletedProfilesId: primaryKey({ columns: [table.id], name: "deletedProfiles_id"}),
	}
});

export const facebookTokens = mysqlTable("facebookTokens", {
	profileId: varchar({ length: 50 }).notNull(),
	createdAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`),
	updatedAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`),
	valid: tinyint(),
	expiresAt: datetime({ mode: 'date'}),
	status: varchar({ length: 1000 }),
	permanentToken: varchar({ length: 512 }),
	accessToken: varchar({ length: 512 }),
	sevenDaysNotified: tinyint(),
	expiredTokenNotified: tinyint(),
	instagramBusinessId: varchar({ length: 30 }),
	facebookPageId: varchar({ length: 30 }),
	facebookUserId: varchar({ length: 30 }),
},
(table) => {
	return {
		// validIdx: index().on(table.valid),
		notificationIdx: index("notification_index").on(table.valid, table.expiredTokenNotified, table.sevenDaysNotified, table.expiresAt),
		instagramBusinessIdIdx: index("facebookTokens_instagramBusinessId_IDX").on(table.instagramBusinessId),
		facebookTokensProfileId: primaryKey({ columns: [table.profileId], name: "facebookTokens_profileId"}),
	}
});

export const facebookTokensMetadata = mysqlTable("facebookTokensMetadata", {
	instagramBusinessAccountId: varchar({ length: 50 }).notNull().references(() => facebookTokens.profileId, { onDelete: "cascade", onUpdate: "cascade" }),
	createdAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`),
	updatedAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)`),
	checkResult: varchar({ length: 20}),
	validationCode: varchar({ length: 100}),
	facebookDataFetchDetails: text(),
	facebookValidateDetails:  text(),
	tokenType:  varchar({ length: 50}),
	userAccessToken: varchar({ length: 255}),
},
(table) => {
	return {
		facebookTokensMetadataProfileId: primaryKey({ columns: [table.instagramBusinessAccountId], name: "facebookTokensMetadata_instagramBusinessAccountId"}),
		idxInstagramBusinessAccount: index("idx_instagram_business_account").on(table.instagramBusinessAccountId),
		idxCreatedAt: index("idx_created_at").on(table.createdAt),
		idxcheckResult: index("idx_check_result").on(table.checkResult),
	}
});

export const facebookTokensHistory = mysqlTable("facebookTokensHistory", {
	instagramBusinessAccountId: varchar({ length: 50 }).notNull().references(() => facebookTokens.profileId,{ onDelete: "cascade", onUpdate: "cascade" }),
	createdAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`),
	updatedAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)`),
	oldStatus: varchar({ length: 20}),
	newStatus: varchar({ length: 20}),
	updateReason: varchar({ length: 250}),
},
(table) => {
	return {
		facebookTokensHistoryProfileId: primaryKey({ columns: [table.instagramBusinessAccountId], name: "facebookTokensHistory_instagramBusinessAccountId"}),
		idxInstagramBusinessAccount: index("idx_instagram_business_account").on(table.instagramBusinessAccountId),
		idxCreatedAt: index("idx_created_at").on(table.createdAt),
		idxUpdateReason: index("idx_update_reason").on(table.updateReason),
	}
});

export const genders = mysqlTable("genders", {
	id: int().autoincrement().notNull(),
	description: varchar({ length: 50 }).notNull(),
	descriptionEn: varchar("description_en", { length: 50 }).notNull(),
	descriptionEs: varchar("description_es", { length: 255 }),
},
(table) => {
	return {
		gendersId: primaryKey({ columns: [table.id], name: "genders_id"}),
	}
});

export const googleTokens = mysqlTable("googleTokens", {
	profileId: varchar({ length: 50 }).notNull(),
	createdAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`),
	updatedAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`),
	valid: tinyint(),
	expiresAt: datetime({ mode: 'date'}),
	status: varchar({ length: 1000 }),
	provider: varchar({ length: 50 }),
	accessToken: varchar({ length: 512 }),
	refreshToken: varchar({ length: 128 }),
	expiresIn: bigint({ mode: "number" }),
	connection: varchar({ length: 50 }),
	isSocial: tinyint(),
	gcloudProject: varchar({ length: 45 }).default('squid-apis'),
},
(table) => {
	return {
		// validIdx: index().on(table.valid),
		googleTokensProfileId: primaryKey({ columns: [table.profileId], name: "googleTokens_profileId"}),
	}
});

export const idInstagramUpdate = mysqlTable("idInstagramUpdate", {
	id: varchar({ length: 100 }),
});

export const influencerMetrics = mysqlTable("influencer_metrics", {
	name: varchar({ length: 200 }).notNull(),
	value: float(),
	date: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`),
	id: varchar({ length: 100 }).notNull(),
	socialNetwork: varchar({ length: 100 }).notNull(),
	observation: varchar({ length: 200 }),
	type: mysqlEnum(['facebook', 'tiktok', 'twitter', 'youtube']),
	createdAt: datetime({ mode: 'date'}),
	updatedAt: datetime({ mode: 'date'}),
},
(table) => {
	return {
		dateIdx: index("influencer_metrics_date_IDX").on(table.date),
		influencerMetricsIdSocialNetworkName: primaryKey({ columns: [table.id, table.socialNetwork, table.name], name: "influencer_metrics_id_socialNetwork_name"}),
	}
});

export const instagramProfiles = mysqlTable("instagramProfiles", {
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
	tier: varchar({ length: 45 }).default('undefined').notNull(),
	createdAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	logstashProcessedAt: datetime({ mode: 'date'}),
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
	categorizedAt: datetime({ mode: 'date'}),
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
	identifyAt: datetime({ mode: 'date'}),
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
	statusUidMigration: varchar({ length: 255 }).default('Not processed'),
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
	hasCreatorsInsights: tinyint(),
	isSharedCreatorsInsights: tinyint().default(0),
},
(table) => {
	return {
		usernameIdx: index("username_index").on(table.username),
		idxInstagramProfilesFacebookUserId: index("idx_instagramProfiles_facebookUserId").on(table.facebookUserId),
		oldIgIdIdx: index("instagramProfiles_oldIgId_IDX").on(table.oldIgId),
		instagramProfilesId: primaryKey({ columns: [table.id], name: "instagramProfiles_id"}),
	}
});

export const locations = mysqlTable("locations", {
	id: bigint({ mode: "number" }).notNull(),
	name: varchar({ length: 255 }).notNull(),
	latitude: decimal({ precision: 9, scale: 6 }).notNull(),
	longitude: decimal({ precision: 9, scale: 6 }).notNull(),
	createdAt: datetime({ mode: 'date'}).notNull(),
	updatedAt: datetime({ mode: 'date'}).notNull(),
},
(table) => {
	return {
		locationsId: primaryKey({ columns: [table.id], name: "locations_id"}),
	}
});

export const notSearchableUsers = mysqlTable("notSearchableUsers", {
	id: varchar({ length: 45 }).notNull(),
	username: varchar({ length: 45 }),
	reasons: varchar({ length: 45 }).notNull(),
	socialNetwork: varchar({ length: 45 }).notNull(),
	createdAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	tags: varchar({ length: 255 }),
	followers: int(),
	engagement: float(),
},
(table) => {
	return {
		notSearchableUsersId: primaryKey({ columns: [table.id], name: "notSearchableUsers_id"}),
	}
});

export const pinterestProfiles = mysqlTable("pinterestProfiles", {
	id: varchar({ length: 50 }).notNull(),
	squidId: varchar({ length: 36 }),
	username: varchar({ length: 255 }).default('Processando').notNull(),
	exists: tinyint().default(1).notNull(),
	isPartner: tinyint().default(1).notNull(),
	picture: varchar({ length: 255 }).default('Processando').notNull(),
	fullName: varchar({ length: 255 }),
	about: text(),
	since: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
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
	createdAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
},
(table) => {
	return {
		pinterestProfilesId: primaryKey({ columns: [table.id], name: "pinterestProfiles_id"}),
		squidId: unique("squidId").on(table.squidId),
	}
});

export const profileAdditionalInfoBanks = mysqlTable("profileAdditionalInfoBanks", {
	id: int().autoincrement().notNull(),
	profileId: varchar({ length: 36 }).notNull(),
	bankCode: varchar({ length: 10 }),
	bankName: varchar({ length: 100 }).notNull(),
	bankAccountNumber: varchar({ length: 50 }),
	bankAccountDigit: varchar({ length: 5 }),
	bankAccountAgency: varchar({ length: 11 }),
	bankAccountType: mysqlEnum(['savings', 'checking']),
	bankOperationCode: varchar({ length: 10 }),
	holderDocument: varchar({ length: 15 }),

	holderOpeningDate: date({ mode: 'date' }),
	holderName: varchar({ length: 150 }),
	holderTradingName: varchar({ length: 150 }),
	isPersonAccount: tinyint().notNull(),
	createdAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	nationalDocument: varchar({ length: 50 }),
	recordEmployment: varchar({ length: 50 }),
	companyName: varchar({ length: 150 }),
	fantasyName: varchar({ length: 100 }),
	
	companyOpeningDate: date({ mode: 'date' }),
	typeOfBusiness: varchar({ length: 150 }),
	paymentType: mysqlEnum('paymentType', ['nf', 'rpa']).notNull(),
	companyUf: varchar({ length: 2 }),
	companyCity: varchar({ length: 100 }),
	companyLegalNature: varchar({ length: 100 }),
	companyDocument: varchar({ length: 50 }),
	bankAccountAgencyDigit: varchar({ length: 15 }),
	verificationStatus: float(),
	verificationId: char({ length: 36 }),
	verificatedAt: datetime({ mode: 'date'}),
},
(table) => {
	return {
		profileAdditionalInfoBanksId: primaryKey({ columns: [table.id], name: "profileAdditionalInfoBanks_id"}),
		profileIdUnique: unique("profileId_UNIQUE").on(table.profileId),
		profileId: unique("profileId").on(table.profileId, table.bankCode, table.bankAccountNumber),
	}
});

export const profileAdditionalInfos = mysqlTable("profileAdditionalInfos", {
	profileId: varchar({ length: 36 }).notNull().references(() => profiles.id),
	loginUid: varchar({ length: 45 }),
	email: varchar({ length: 255 }).notNull(),
	document: varchar({ length: 50 }),
	name: varchar({ length: 255 }).notNull(),
	blog: varchar({ length: 255 }),
	birthday: date({ mode: 'date' }).notNull(),
	gender: char({ length: 1 }),
	phone: varchar({ length: 25 }),
	zipcode: varchar({ length: 15 }),
	address: varchar({ length: 255 }),
	addressNumber: varchar({ length: 150 }),
	complement: varchar({ length: 255 }),
	city: varchar({ length: 255 }),
	neighborhood: varchar({ length: 255 }),
	uf: varchar({ length: 255 }),
	country: varchar({ length: 255 }).default('BR'),
	lat: double(),
	lng: double(),
	registeredFromSource: varchar({ length: 255 }),
	registeredFromCampaign: varchar({ length: 255 }),
	registeredFromMedium: varchar({ length: 255 }),
	createdAt: datetime({ mode: 'date'}).notNull(),
	updatedAt: datetime({ mode: 'date'}).notNull(),
	allowSms: tinyint().default(0),
	allowWhatsapp: tinyint().default(1),
	allowSuggestionEmail: tinyint().default(1),
	isPersonAccount: tinyint().notNull(),
	documentType: varchar({ length: 13 }).notNull(),
	hasSkip: tinyint().default(0),
	language: varchar({ length: 10 }).default('pt-br').notNull(),
	phoneValid: tinyint().default(0),
	phoneValidCode: varchar({ length: 15 }),
	phoneValidCodeCreatedAt: datetime({ mode: 'date'}),
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
	descriptionCreatorsInsights: varchar({ length: 255 }),
	recruitmentSyncedAt: datetime({ mode: 'date' }),
},
(table) => {
	return {
		profileAdditionalInfosProfileId: primaryKey({ columns: [table.profileId], name: "profileAdditionalInfos_profileId"}),
		emailUnique: unique("EMAIL_UNIQUE").on(table.email),
		auth0: unique("AUTH0").on(table.loginUid),
	}
});

export const profileAdditionalInfosOld = mysqlTable("profileAdditionalInfos_old", {
	profileId: varchar({ length: 36 }).notNull().references(() => profiles.id),
	document: varchar({ length: 50 }),
	name: varchar({ length: 255 }).notNull(),
	email: varchar({ length: 255 }).notNull(),
	blog: varchar({ length: 255 }),

	birthday: date({ mode: 'date' }).notNull(),
	gender: char({ length: 3 }).notNull(),
	phone: varchar({ length: 25 }).notNull(),
	zipcode: varchar({ length: 15 }).notNull(),
	address: varchar({ length: 255 }).notNull(),
	addressNumber: varchar({ length: 255 }),
	complement: varchar({ length: 255 }),
	city: varchar({ length: 255 }).notNull(),
	neighborhood: varchar({ length: 255 }),
	uf: varchar({ length: 255 }).default('').notNull(),
	country: varchar({ length: 255 }).default('BR'),
	registeredFromSource: varchar({ length: 255 }),
	registeredFromCampaign: varchar({ length: 255 }),
	registeredFromMedium: varchar({ length: 255 }),
	createdAt: datetime({ mode: 'date'}).notNull(),
	updatedAt: datetime({ mode: 'date'}).notNull(),
	allowSms: tinyint().default(0),
	allowWhatsapp: tinyint().default(1),
	allowSuggestionEmail: tinyint().default(1),
	isPersonAccount: tinyint().notNull(),
	documentType: varchar({ length: 13 }).default('CPF').notNull(),
	hasSkip: tinyint().default(0),
	auth0: varchar({ length: 45 }),
	language: varchar({ length: 5 }).default('pt-br').notNull(),
	phoneValid: tinyint().default(0),
	phoneValidCode: varchar({ length: 15 }),
	phoneValidCodeCreatedAt: datetime({ mode: 'date'}),
	race: int(),
	registeredFromAdId: varchar({ length: 255 }),
	registeredFromContent: varchar({ length: 255 }),
	registeredFromAdName: varchar({ length: 255 }),
	portalRegistration: tinyint().default(0),
	agent: tinyint().default(0),
},
(table) => {
	return {
		profileAdditionalInfosOldProfileId: primaryKey({ columns: [table.profileId], name: "profileAdditionalInfos_old_profileId"}),
		emailUnique: unique("EMAIL_UNIQUE").on(table.email),
	}
});

export const profileAdditionalInfosWhitelabels = mysqlTable("profileAdditionalInfos_whitelabels", {
	profileId: varchar({ length: 36 }).notNull(),
	whitelabel: varchar({ length: 24 }).default('-').notNull(),
	organization: varchar({ length: 24 }).default('-').notNull(),
	auth0: varchar({ length: 45 }),
	communityId: varchar("community_id", { length: 45 }),
	email: varchar({ length: 255 }).notNull(),
	document: varchar({ length: 50 }).notNull(),
	name: varchar({ length: 255 }).notNull(),
	blog: varchar({ length: 255 }),

	birthday: date({ mode: 'date' }).notNull(),
	gender: char({ length: 1 }),
	phone: varchar({ length: 25 }).notNull(),
	zipcode: varchar({ length: 15 }),
	address: varchar({ length: 255 }),
	addressNumber: varchar({ length: 150 }),
	complement: varchar({ length: 255 }),
	city: varchar({ length: 255 }),
	neighborhood: varchar({ length: 255 }),
	uf: varchar({ length: 255 }),
	country: varchar({ length: 255 }).default('BR'),
	nationality: varchar({ length: 255 }),
	registeredFromSource: varchar({ length: 255 }),
	registeredFromCampaign: varchar({ length: 255 }),
	registeredFromMedium: varchar({ length: 255 }),
	createdAt: datetime({ mode: 'date'}).notNull(),
	updatedAt: datetime({ mode: 'date'}).notNull(),
	allowSms: tinyint().default(0),
	allowWhatsapp: tinyint().default(1),
	allowSuggestionEmail: tinyint().default(1),
	isPersonAccount: tinyint().notNull(),
	documentType: varchar({ length: 13 }).notNull(),
	hasSkip: tinyint().default(0),
	language: varchar({ length: 10 }).default('pt-br').notNull(),
	phoneValid: tinyint().default(0),
	phoneValidCode: varchar({ length: 15 }),
	phoneValidCodeCreatedAt: datetime({ mode: 'date'}),
	race: int(),
	registeredFromAdId: varchar({ length: 255 }),
	registeredFromContent: varchar({ length: 255 }),
	registeredFromAdName: varchar({ length: 255 }),
	portalRegistration: tinyint().default(0),
	agent: tinyint().default(0),
	showWarning: tinyint().default(0),
},
(table) => {
	return {
		profileAdditionalInfosWhitelabelsProfileIdWhitelabel: primaryKey({ columns: [table.profileId, table.whitelabel], name: "profileAdditionalInfos_whitelabels_profileId_whitelabel"}),
		emailUnique: unique("EMAIL_UNIQUE").on(table.email, table.whitelabel),
		auth0: unique("AUTH0").on(table.auth0),
	}
});

export const profileCategories = mysqlTable("profileCategories", {
	id: int().autoincrement().notNull(),
	parentId: int(),
	description: varchar({ length: 50 }).default('').notNull(),
	descriptionEn: varchar("description_en", { length: 255 }).notNull(),
	descriptionEs: varchar("description_es", { length: 255 }),
	emoji: text(),
	percentageBase: float("percentage_base"),
	cacheVariation: float("cache_variation").default(1),
},
(table) => {
	return {
		profileCategoriesId: primaryKey({ columns: [table.id], name: "profileCategories_id"}),
		description: unique("description").on(table.description),
	}
});

export const profileWhitelabels = mysqlTable("profileWhitelabels", {
	id: varchar({ length: 36 }).notNull(),
	profileId: varchar({ length: 36 }).notNull().references(() => profiles.id, { onUpdate: "cascade" } ),
	whitelabel: varchar({ length: 24 }),
	createdAt: timestamp("created_at", { mode: 'date' }).defaultNow().notNull(),
	registeredFromSource: varchar({ length: 255 }),
	registeredFromCampaign: varchar({ length: 255 }),
	registeredFromMedium: varchar({ length: 255 }),
	registeredFromContent: varchar({ length: 255 }),
	registeredFromAdId: varchar({ length: 255 }),
	registeredFromAdName: varchar({ length: 255 }),
},
(table) => {
	return {
		index3: index("profileWhitelabels_index_3").on(table.whitelabel),
		profileWhitelabelsId: primaryKey({ columns: [table.id], name: "profileWhitelabels_id"}),
	}
});

export const profiles = mysqlTable("profiles", {
	id: varchar({ length: 36 }).notNull(),
	createdAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	deletedNetworks: varchar({ length: 100 }),
	deletedAt: datetime({ mode: 'date'}),
},
(table) => {
	return {
		id: index("id").on(table.id),
		profilesId: primaryKey({ columns: [table.id], name: "profiles_id"}),
	}
});

export const progressiveRegistrationAnswers = mysqlTable("progressive_registration_answers", {
	id: varchar({ length: 36 }).notNull(),
	question: varchar({ length: 36 }).notNull().references(() => progressiveRegistrationQuestions.id, { onDelete: "cascade" } ),
	squidId: varchar({ length: 50 }).notNull().references(() => profiles.id),
	answer: varchar({ length: 255 }),
	answerOption: varchar("answer_option", { length: 36 }).references(() => progressiveRegistrationQuestionOptions.id, { onDelete: "cascade" } ),
	createdAt: timestamp("created_at", { mode: 'date' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'date' }).defaultNow().notNull(),
	deletedAt: timestamp("deleted_at", { mode: 'date' }),
},
(table) => {
	return {
		fkProgressiveRegistrationIdx1: index("fk_progressive_registration_idx1").on(table.question),
		fkProgressiveRegistrationIdx2: index("fk_progressive_registration_idx2").on(table.squidId),
		answersIdx: index("answers_idx").on(table.id),
		progressiveRegistrationAnswersId: primaryKey({ columns: [table.id], name: "progressive_registration_answers_id"}),
		id: unique("id").on(table.id),
	}
});

export const progressiveRegistrationGroups = mysqlTable("progressive_registration_groups", {
	id: varchar({ length: 36 }).notNull(),
	label: varchar({ length: 36 }).notNull().references(() => progressiveRegistrationLabels.id, { onDelete: "cascade", onUpdate: "cascade" } ),
	icon: varchar({ length: 255 }).default('poll-people').notNull(),
	order: int().default(1).notNull(),
	createdAt: timestamp("created_at", { mode: 'date' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'date' }).defaultNow().notNull(),
	deletedAt: timestamp("deleted_at", { mode: 'date' }),
},
(table) => {
	return {
		label: index("LABEL").on(table.label),
		groupIdx: index("group_idx").on(table.id),
		progressiveRegistrationGroupsId: primaryKey({ columns: [table.id], name: "progressive_registration_groups_id"}),
		id: unique("id").on(table.id),
	}
});

export const progressiveRegistrationLabels = mysqlTable("progressive_registration_labels", {
	id: varchar({ length: 36 }).notNull(),
	pt: varchar({ length: 255 }),
	en: varchar({ length: 255 }),
	es: varchar({ length: 255 }),
	createdAt: timestamp("created_at", { mode: 'date' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'date' }).defaultNow().notNull(),
	deletedAt: timestamp("deleted_at", { mode: 'date' }),
},
(table) => {
	return {
		labelIdx: index("label_idx").on(table.id),
		progressiveRegistrationLabelsId: primaryKey({ columns: [table.id], name: "progressive_registration_labels_id"}),
		id: unique("id").on(table.id),
	}
});

export const progressiveRegistrationQuestionOptions = mysqlTable("progressive_registration_question_options", {
	id: varchar({ length: 36 }).notNull(),
	question: varchar({ length: 255 }).notNull().references(() => progressiveRegistrationQuestions.id, { onDelete: "cascade" } ),
	label: varchar({ length: 36 }).notNull().references(() => progressiveRegistrationLabels.id, { onDelete: "cascade" } ),
	createdAt: timestamp("created_at", { mode: 'date' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'date' }).defaultNow().notNull(),
	deletedAt: timestamp("deleted_at", { mode: 'date' }),
},
(table) => {
	return {
		fkProgressiveRegistrationQuestionOptionsProgressiveReIdx: index("fk_progressive_registration_question_options_progressive_re_idx").on(table.question),
		label: index("label").on(table.label),
		optionsIdx: index("options_idx").on(table.id),
		progressiveRegistrationQuestionOptionsId: primaryKey({ columns: [table.id], name: "progressive_registration_question_options_id"}),
		id: unique("id").on(table.id),
	}
});

export const progressiveRegistrationQuestions = mysqlTable("progressive_registration_questions", {
	id: varchar({ length: 36 }).notNull(),
	label: varchar({ length: 36 }).notNull().references(() => progressiveRegistrationLabels.id, { onDelete: "cascade" } ),
	type: varchar({ length: 255 }).default('text').notNull(),
	group: varchar({ length: 255 }).notNull().references(() => progressiveRegistrationGroups.id, { onDelete: "cascade" } ),
	createdAt: timestamp("created_at", { mode: 'date' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'date' }).defaultNow().notNull(),
	deletedAt: timestamp("deleted_at", { mode: 'date' }),
},
(table) => {
	return {
		fkProgressiveRegistrationQuestionsProgressiveRegistratIdx: index("fk_progressive_registration_questions_progressive_registrat_idx").on(table.group),
		label: index("LABEL").on(table.label),
		questionsIdx: index("questions_idx").on(table.id),
		progressiveRegistrationQuestionsId: primaryKey({ columns: [table.id], name: "progressive_registration_questions_id"}),
		id: unique("id").on(table.id),
	}
});

export const progressiveRegistrationWhitelabels = mysqlTable("progressive_registration_whitelabels", {
	whitelabel: varchar({ length: 24 }).default('hub').notNull(),
	question: varchar({ length: 255 }).notNull().references(() => progressiveRegistrationQuestions.id, { onDelete: "cascade", onUpdate: "cascade" } ),
	group: varchar({ length: 255 }).notNull().references(() => progressiveRegistrationGroups.id, { onDelete: "cascade" } ),
	active: tinyint().default(0).notNull(),
	order: int().default(1).notNull(),
	required: tinyint().default(0).notNull(),
	createdAt: timestamp("created_at", { mode: 'date' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'date' }).defaultNow().notNull(),
	deletedAt: timestamp("deleted_at", { mode: 'date' }),
},
(table) => {
	return {
		fkProgressiveRegistrationWhitelabelsProgressiveRegistrIdx: index("fk_progressive_registration_whitelabels_progressive_registr_idx").on(table.question),
		progressiveRegistrationWhitelabelsWhitelabelQuestionGroup: primaryKey({ columns: [table.whitelabel, table.question, table.group], name: "progressive_registration_whitelabels_whitelabel_question_group"}),
	}
});

export const races = mysqlTable("races", {
	id: int().autoincrement().notNull(),
	description: varchar({ length: 45 }).notNull(),
	descriptionEn: varchar("description_en", { length: 45 }).notNull(),
	descriptionEs: varchar("description_es", { length: 255 }),
},
(table) => {
	return {
		racesId: primaryKey({ columns: [table.id], name: "races_id"}),
	}
});

export const scopesToken = mysqlTable("scopesToken", {
	scopeType: varchar({ length: 64 }).notNull(),
	profileId: varchar({ length: 50 }).notNull(),
	socialNetwork: varchar({ length: 45 }).notNull(),
},
(table) => {
	return {
		scopesTokenScopeTypeProfileIdSocialNetwork: primaryKey({ columns: [table.scopeType, table.profileId, table.socialNetwork], name: "scopesToken_scopeType_profileId_socialNetwork"}),
	}
});

export const socialNetworkProfiles = mysqlTable("socialNetworkProfiles", {
	id: varchar({ length: 50 }).notNull(),
	squidId: varchar({ length: 36 }).references(() => profiles.id, { onDelete: "cascade", onUpdate: "cascade" } ),
	socialNetwork: varchar({ length: 45 }).notNull(),
	createdAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
},
(table) => {
	return {
		socialNetworkProfilesIdSocialNetwork: primaryKey({ columns: [table.id, table.socialNetwork], name: "socialNetworkProfiles_id_socialNetwork"}),
	}
});

export const socialNetworkProfilesCache = mysqlTable("socialNetworkProfilesCache", {
	profileId: varchar({ length: 255 }).notNull(),
	contentType: varchar({ length: 50 }).notNull(),
	contentValue: decimal({ precision: 10, scale: 2 }),
	createdAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
},
(table) => {
	return {
		socialNetworkProfilesCacheProfileIdContentType: primaryKey({ columns: [table.profileId, table.contentType], name: "socialNetworkProfilesCache_profileId_contentType"}),
		socialNetworkProfilesCacheProfileIdIdx: unique("socialNetworkProfilesCache_profileId_IDX").on(table.profileId, table.contentType),
	}
});

export const socialNetworkProfilesCacheNew = mysqlTable("socialNetworkProfilesCache_new", {
	profileId: varchar({ length: 50 }).notNull(),
	contentType: varchar("ContentType", { length: 100 }).notNull(),
	contentValue: decimal({ precision: 10, scale: 2 }),
	createdAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`),
	updatedAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`),
});

export const socialNetworkProfilesCategories = mysqlTable("socialNetworkProfilesCategories", {
	id: int().autoincrement().notNull(),
	categoryId: int().notNull().references(() => profileCategories.id, { onUpdate: "cascade" } ),
	profileId: varchar({ length: 50 }).notNull().references(() => socialNetworkProfiles.id, { onUpdate: "cascade" } ),
	socialNetwork: varchar({ length: 45 }).notNull(),
	updatedAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`),
	recruitmentSyncedAt: datetime({ mode: 'date' }),
},
(table) => {
	return {
		socialNetwork: index("socialNetwork").on(table.socialNetwork),
		socialNetworkProfilesCategoriesId: primaryKey({ columns: [table.id], name: "socialNetworkProfilesCategories_id"}),
	}
});

export const socialNetworkProfilesCategoriesWhitelabels = mysqlTable("socialNetworkProfilesCategories_whitelabels", {
	id: int().autoincrement().notNull(),
	categoryId: int(),
	profileId: varchar({ length: 36 }),
	socialNetwork: varchar({ length: 45 }),
	whitelabel: varchar({ length: 24 }),
	organization: varchar({ length: 24 }),
	updatedAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`),
},
(table) => {
	return {
		socialNetworkProfilesCategoriesWhitelabelsId: primaryKey({ columns: [table.id], name: "socialNetworkProfilesCategories_whitelabels_id"}),
		socialNetworkProfilesCategoriesUn: unique("socialNetworkProfilesCategories_UN").on(table.categoryId, table.profileId, table.socialNetwork, table.whitelabel, table.organization),
	}
});

export const socialNetworkProfilesWhitelabels = mysqlTable("socialNetworkProfiles_whitelabels", {
	id: varchar({ length: 50 }).notNull(),
	squidId: varchar({ length: 36 }).references(() => profiles.id),
	socialNetwork: varchar({ length: 45 }).notNull(),
	whitelabel: varchar({ length: 24 }).default('-').notNull(),
	organization: varchar({ length: 24 }).default('-').notNull(),
	createdAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
},
(table) => {
	return {
		socialNetworkProfilesWhitelabelsIdSocialNetworkWhitelabel: primaryKey({ columns: [table.id, table.socialNetwork, table.whitelabel], name: "socialNetworkProfiles_whitelabels_id_socialNetwork_whitelabel"}),
	}
});

export const stopWords = mysqlTable("stopWords", {
	id: int().autoincrement().notNull(),
	word: varchar({ length: 255 }).notNull(),
},
(table) => {
	return {
		stopWordsId: primaryKey({ columns: [table.id], name: "stopWords_id"}),
	}
});

export const tiktokProfiles = mysqlTable("tiktokProfiles", {
	id: varchar({ length: 50 }).notNull(),
	openId: varchar({ length: 50 }),
	unionId: varchar({ length: 50 }),
	exists: tinyint().default(1),
	verified: tinyint().default(1),
	username: varchar({ length: 255 }).default('Processando'),
	nickname: varchar({ length: 255 }).default('Processando'),
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
	createdAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	lastPictureUpdatedAt: datetime({ mode: 'date'}),
	tcmStatus: varchar({ length: 15 }),
	insertOrigin: varchar({ length: 50 }),
	processAt: datetime({ mode: 'date'}),
	hasCreatorsInsights: tinyint().default(0),
	isSharedCreatorsInsights: tinyint().default(0),
},
(table) => {
	return {
		usernameIdx: index("tiktokProfiles_username_IDX").on(table.username),
		processAtIdx: index("tiktokProfiles_processAt_IDX").on(table.processAt),
		tiktokProfilesId: primaryKey({ columns: [table.id], name: "tiktokProfiles_id"}),
	}
});

export const tiktokTokens = mysqlTable("tiktokTokens", {
	profileId: varchar({ length: 50 }).notNull(),
	valid: tinyint().default(1),
	status: varchar({ length: 1000 }),
	accessToken: varchar({ length: 512 }),
	refreshToken: varchar({ length: 128 }),
	expiresAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`),
	createdAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`),
	updatedAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`),
},
(table) => {
	return {
		validIdx: index("tiktokTokens_valid_IDX").on(table.valid),
		tiktokTokensProfileId: primaryKey({ columns: [table.profileId], name: "tiktokTokens_profileId"}),
	}
});

export const twitterProfiles = mysqlTable("twitterProfiles", {
	id: varchar({ length: 50 }).notNull(),
	username: varchar({ length: 255 }).default('Processando').notNull(),
	fullName: varchar({ length: 255 }).default('').notNull(),
	picture: varchar({ length: 255 }).default('Processando').notNull(),
	followers: int().default(0).notNull(),
	follows: int().default(0).notNull(),
	bio: text(),
	createdAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
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
	processAt: datetime({ mode: 'date'}),
	hasCreatorsInsights: tinyint().default(0),
},
(table) => {
	return {
		processAtIdx: index("twitterProfiles_processAt_IDX").on(table.processAt),
		twitterProfilesId: primaryKey({ columns: [table.id], name: "twitterProfiles_id"}),
	}
});

export const twitterTokens = mysqlTable("twitterTokens", {
	profileId: varchar({ length: 50 }).notNull(),
	createdAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`),
	updatedAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`),
	valid: tinyint(),
	accessToken: varchar({ length: 256 }),
	oauthSecretToken: varchar({ length: 256 }),
	refreshToken: varchar({ length: 256 }),
	expiresIn: int().default(0),
},
(table) => {
	return {
		valid: index("twitterTokens_valid").on(table.valid),
		twitterTokensProfileId: primaryKey({ columns: [table.profileId], name: "twitterTokens_profileId"}),
	}
});

export const youtubeProfiles = mysqlTable("youtubeProfiles", {
	id: varchar({ length: 50 }).notNull(),
	googleId: varchar({ length: 255 }),
	exists: tinyint().default(1).notNull(),
	searchable: tinyint().default(1).notNull(),
	notSearchReason: varchar({ length: 255 }),
	email: varchar({ length: 255 }),
	channelTitle: varchar({ length: 255 }).default('Processando').notNull(),
	username: varchar({ length: 255 }).default('Processando').notNull(),
	picture: varchar({ length: 255 }).default('Processando').notNull(),
	fullName: varchar({ length: 255 }),
	description: text(),
	bio: text(),
	customUrl: varchar({ length: 255 }).default('Processando'),
	country: varchar({ length: 36 }).default('Processando').notNull(),
	since: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
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
	privacyStatus: varchar({ length: 36 }).default('Processando').notNull(),
	language: varchar({ length: 36 }),
	createdAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: datetime({ mode: 'date'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	logstashProcessedAt: datetime({ mode: 'date'}),
	macro: tinyint().default(0),
	brandUser: tinyint().default(0),
	insertOrigin: varchar({ length: 50 }),
	processAt: datetime({ mode: 'date'}),
	hasCreatorsInsights: tinyint().default(0),
	isSharedCreatorsInsights: tinyint().default(0),
},
(table) => {
	return {
		youtuberofilesSearchableIdx: index("youtuberofiles_searchable_index").on(table.searchable),
		googleIdIdx: index("youtubeProfiles_googleId_IDX").on(table.googleId),
		processAtIdx: index("youtubeProfiles_processAt_IDX").on(table.processAt),
		youtubeProfilesId: primaryKey({ columns: [table.id], name: "youtubeProfiles_id"}),
	}
});
export const fullInstagramProfileAll = mysqlView("full_instagram_profile_all", {
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
	blackuser: int().default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`id\`,1 AS \`squidid\`,1 AS \`username\`,1 AS \`identifiedat\`,1 AS \`followers\`,1 AS \`following\`,1 AS \`picture\`,1 AS \`engagementrate\`,1 AS \`isbusiness\`,1 AS \`searchable\`,1 AS \`facebooklinked\`,1 AS \`name\`,1 AS \`email\`,1 AS \`birthday\`,1 AS \`gender\`,1 AS \`phone\`,1 AS \`address\`,1 AS \`addressNumber\`,1 AS \`complement\`,1 AS \`city\`,1 AS \`uf\`,1 AS \`zipcode\`,1 AS \`document\`,1 AS \`loginUid\`,1 AS \`recordEmployment\`,1 AS \`isPersonAccount\`,1 AS \`registeredat\`,1 AS \`race\`,1 AS \`blackuser\``);

export const vwProgressiveRegistrationAnswers = mysqlView("vw_progressive_registration_answers", {
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
	updatedAt: int("updated_at").default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`squidId\`,1 AS \`group_id\`,1 AS \`group_pt\`,1 AS \`group_en\`,1 AS \`group_es\`,1 AS \`question_id\`,1 AS \`question_pt\`,1 AS \`question_en\`,1 AS \`question_es\`,1 AS \`question_type\`,1 AS \`answer_option_id\`,1 AS \`answer_pt\`,1 AS \`answer_es\`,1 AS \`answer_en\`,1 AS \`answer\`,1 AS \`whitelabel\`,1 AS \`whitelabel_question_active\`,1 AS \`whitelabel_question_required\`,1 AS \`created_at\`,1 AS \`updated_at\``);

export const fullInstagramProfile = mysqlView("full_instagram_profile", {
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
	race: int().default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`id\`,1 AS \`squidid\`,1 AS \`username\`,1 AS \`identifiedat\`,1 AS \`followers\`,1 AS \`following\`,1 AS \`engagementrate\`,1 AS \`score\`,1 AS \`isbusiness\`,1 AS \`facebooklinked\`,1 AS \`name\`,1 AS \`email\`,1 AS \`birthday\`,1 AS \`gender\`,1 AS \`phone\`,1 AS \`address\`,1 AS \`complement\`,1 AS \`city\`,1 AS \`uf\`,1 AS \`country\`,1 AS \`zipcode\`,1 AS \`document\`,1 AS \`isPersonAccount\`,1 AS \`registeredat\`,1 AS \`allowSuggestionEmail\`,1 AS \`race\``);

export const instagramProfileMetrics = mysqlView("instagram_profile_metrics", {
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
	storiesCompleteEngagementRate: int().default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`id\`,1 AS \`squidId\`,1 AS \`username\`,1 AS \`exists\`,1 AS \`searchable\`,1 AS \`followers\`,1 AS \`isBusiness\`,1 AS \`scrapperEngagementRate\`,1 AS \`totalMedias\`,1 AS \`medias\`,1 AS \`follows\`,1 AS \`likes\`,1 AS \`comments\`,1 AS \`tier\`,1 AS \`score\`,1 AS \`score1\`,1 AS \`score2\`,1 AS \`score3\`,1 AS \`score4\`,1 AS \`score5\`,1 AS \`storiesEffectiveReach\`,1 AS \`profileViews\`,1 AS \`hasMediaKit\`,1 AS \`totalStoriesImpressions\`,1 AS \`totalStoriesReach\`,1 AS \`totalStoriesReplies\`,1 AS \`totalStoriesTapBacks\`,1 AS \`totalPostsReach\`,1 AS \`totalPostsSaves\`,1 AS \`totalPostsImpressions\`,1 AS \`numberPostsActivityScore\`,1 AS \`numberStoriesScore\`,1 AS \`daysPostsScore\`,1 AS \`daysStoriesScore\`,1 AS \`advertisingPostsEngagementRate\`,1 AS \`noAdvertisingPostsEngagementRate\`,1 AS \`advertisingStoriesEngagementRate\`,1 AS \`noAdvertisingStoriesEngagementRate\`,1 AS \`advertisingContentPercentage\`,1 AS \`advertisingPostsPercentage\`,1 AS \`advertisingStoriesPercentage\`,1 AS \`postImageEngagementRate\`,1 AS \`postCarouselEngagementRate\`,1 AS \`postVideoEngagementRate\`,1 AS \`storiesVideoEngagementRate\`,1 AS \`storiesImageEngagementRate\`,1 AS \`storiesCompleteEngagementRate\``);

export const vwInfluencersToValidateBankAccount = mysqlView("VW_INFLUENCERS_TO_VALIDATE_BANK_ACCOUNT", {
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
	valid: int().default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`profileId\`,1 AS \`updatedAt\`,1 AS \`verificationStatus\`,1 AS \`verificationId\`,1 AS \`verificatedAt\`,1 AS \`bankName\`,1 AS \`bankCode\`,1 AS \`bankAccountType\`,1 AS \`bankAccountAgency\`,1 AS \`bankAccountNumber\`,1 AS \`bankAccountDigit\`,1 AS \`socialNetwork\`,1 AS \`valid\``);

export const vwInfluencersCanAnticipate = mysqlView("VW_INFLUENCERS_CAN_ANTICIPATE", {
	id: int().default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`id\``);

export const vwProgressiveRegistrationQuestions = mysqlView("vw_progressive_registration_questions", {
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
	whitelabelQuestionUpdatedAt: int("whitelabel_question_updated_at").default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`question_id\`,1 AS \`question_pt\`,1 AS \`question_en\`,1 AS \`question_es\`,1 AS \`question_type\`,1 AS \`group_id\`,1 AS \`group_pt\`,1 AS \`group_en\`,1 AS \`group_es\`,1 AS \`answer_option_id\`,1 AS \`answer_pt\`,1 AS \`answer_es\`,1 AS \`answer_en\`,1 AS \`whitelabel\`,1 AS \`whitelabel_question_active\`,1 AS \`whitelabel_question_required\`,1 AS \`whitelabel_question_created_at\`,1 AS \`whitelabel_question_updated_at\``);