import { sql } from "drizzle-orm";
import { bigint, char, date, datetime, float, index, int, longtext, mediumint, mysqlEnum, mysqlTable, primaryKey, text, tinyint, unique, varchar } from "drizzle-orm/mysql-core";

export const audienceGenderAge = mysqlTable("audience_gender_age", {
	campaignId: varchar("campaign_id", { length: 100 }).notNull(),
	gender: varchar({ length: 50 }).notNull(),
	age: varchar({ length: 100 }).notNull(),
	percentage: float().notNull(),
	value: float().notNull(),
},
(table) => {
	return {
		audienceGenderAgeCampaignIdGenderAge: primaryKey({ columns: [table.campaignId, table.gender, table.age], name: "audience_gender_age_campaign_id_gender_age"}),
	}
});

export const audienceGeo = mysqlTable("audience_geo", {
	campaignId: varchar("campaign_id", { length: 255 }).notNull(),
	date: date({ mode: 'date' }),
	campaignUsername: varchar("campaign_username", { length: 255 }),
	campaignTitle: varchar("campaign_title", { length: 255 }).notNull(),
	campaignCustomer: varchar("campaign_customer", { length: 255 }),
	campaignTag: varchar("campaign_tag", { length: 255 }),
	order: int().default(0).notNull(),
	type: varchar({ length: 255 }).notNull(),
	value: float().notNull(),
	name: varchar({ length: 255 }).notNull(),
	community: varchar({ length: 24 }),
	state: varchar({ length: 255 }),
},
(table) => {
	return {
		queryDefaultIdx: index("query_default_idx").on(table.campaignId, table.type, table.order),
	}
});

export const audiencePersons = mysqlTable("audience_persons", {
	"65": float().notNull(),
	campaignId: varchar("campaign_id", { length: 255 }).notNull(),
	date: date({ mode: 'date' }),
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
	community: varchar({ length: 24 }),
});

export const commentsBrands = mysqlTable("comments_brands", {
	campaignId: varchar("campaign_id", { length: 255 }).notNull(),
	engagementRate: float("engagement_rate"),
	followers: int().notNull(),
	mentions: int().notNull(),
	name: varchar({ length: 255 }).notNull(),
	picture: varchar({ length: 255 }),
	username: varchar({ length: 255 }).notNull(),
},
(table) => {
	return {
		commentsBrandsCampaignIdUsername: primaryKey({ columns: [table.campaignId, table.username], name: "comments_brands_campaign_id_username"}),
	}
});

export const commentsSentiments = mysqlTable("comments_sentiments", {
	id: bigint({ mode: "number" }).autoincrement().notNull(),
	campaignId: varchar("campaign_id", { length: 255 }).notNull(),
	mediaId: varchar("media_id", { length: 255 }).notNull(),
	userId: varchar("user_id", { length: 255 }).notNull(),
	userUsername: varchar("user_username", { length: 255 }).default(''),
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
	date: datetime({ mode: 'string'}).default(sql`(CURRENT_TIMESTAMP)`),
	socialNetwork: varchar("social_network", { length: 20 }),
},
(table) => {
	return {
		campId: index("CAMP_ID").on(table.campaignId),
		dateIdx: index("comments_sentiments_date_idx").on(table.date),
		mediaIdIdx: index("comments_sentiments_media_id_IDX").on(table.mediaId),
		userId: index("user_id").on(table.userId),
		commentsSentimentsId: primaryKey({ columns: [table.id], name: "comments_sentiments_id"}),
	}
});

export const commentsSentimentsBkp = mysqlTable("comments_sentiments_bkp", {
	id: mediumint().autoincrement().notNull(),
	campaignId: varchar("campaign_id", { length: 255 }).notNull(),
	mediaId: varchar("media_id", { length: 255 }).notNull(),
	userId: varchar("user_id", { length: 255 }).notNull(),
	userUsername: varchar("user_username", { length: 255 }).default(''),
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
	date: datetime({ mode: 'string'}).default(sql`(CURRENT_TIMESTAMP)`),
},
(table) => {
	return {
		commentsSentimentsBkpId: primaryKey({ columns: [table.id], name: "comments_sentiments_bkp_id"}),
	}
});

export const commentsSentimentsSummary = mysqlTable("comments_sentiments_summary", {
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
	sadness: float(),
},
(table) => {
	return {
		campaignIdIdx: index("comments_sentiments_summary_campaign_id_idx").on(table.campaignId),
		campId: index("CAMP_ID").on(table.campaignId),
		commentsSentimentsSummaryId: primaryKey({ columns: [table.id], name: "comments_sentiments_summary_id"}),
	}
});

export const customRanking = mysqlTable("custom_ranking", {
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
	createdAt: datetime("created_at", { mode: 'string'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: datetime("updated_at", { mode: 'string'}).notNull(),
},
(table) => {
	return {
		customRankingUserIdCampaignIdRange: primaryKey({ columns: [table.userId, table.campaignId, table.range], name: "custom_ranking_user_id_campaign_id_range"}),
	}
});

const instagramAudienceAgeBrackets = [
  "13-17",
  "18-24",
  "25-34",
  "35-44",
  "45-64",
  "65+"
] as const

const instagramAudienceGenderBrackets = [
  "FEMALE",
  "MALE",
  "UNISEX"
] as const




export const igAudienceAge = mysqlTable("ig_audience_age", {
	profileId: varchar({ length: 150 }).notNull(),
	age: mysqlEnum(instagramAudienceAgeBrackets).notNull(),
	type: varchar({ length: 50 }),
	percentage: float(),
	updatedAt: date({ mode: 'date' }),
},
(table) => {
	return {
		igAudienceAgeProfileIdAge: primaryKey({ columns: [table.profileId, table.age], name: "ig_audience_age_profileId_age"}),
	}
});

export const igAudienceCity = mysqlTable("ig_audience_city", {
	profileId: varchar({ length: 150 }).notNull(),
	city: varchar({ length: 50 }).notNull(),
	state: varchar({ length: 50 }),
	uf: varchar({ length: 50 }),
	type: varchar({ length: 50 }),
	percentage: float(),
	updatedAt: date({ mode: 'date' }),
},
(table) => {
	return {
		igAudienceCityProfileIdCity: primaryKey({ columns: [table.profileId, table.city], name: "ig_audience_city_profileId_city"}),
	}
});

export const igAudienceCountry = mysqlTable("ig_audience_country", {
	profileId: varchar({ length: 150 }).notNull(),
	countryCode: varchar({ length: 50 }).notNull(),
	type: varchar({ length: 50 }),
	percentage: float(),
	updatedAt: date({ mode: 'date' }),
},
(table) => {
	return {
		igAudienceCountryProfileIdCountryCode: primaryKey({ columns: [table.profileId, table.countryCode], name: "ig_audience_country_profileId_countryCode"}),
	}
});

export const igAudienceGender = mysqlTable("ig_audience_gender", {
	profileId: varchar({ length: 150 }).notNull(),
	gender: mysqlEnum(instagramAudienceGenderBrackets).notNull(),
	type: varchar({ length: 50 }),
	percentage: float(),
	updatedAt: date({ mode: 'date' }),
},
(table) => {
	return {
		igAudienceGenderProfileIdGender: primaryKey({ columns: [table.profileId, table.gender], name: "ig_audience_gender_profileId_gender"}),
	}
});

export const igAudienceGenderAge = mysqlTable("ig_audience_gender_age", {
	profileId: varchar({ length: 150 }).notNull(),
	gender: mysqlEnum(instagramAudienceGenderBrackets).notNull(),
	age: mysqlEnum(instagramAudienceAgeBrackets).notNull(),
	type: varchar({ length: 50 }),
	percentage: float(),
	updatedAt: date({ mode: 'date' }),
},
(table) => {
	return {
		igAudienceGenderAgeProfileIdGenderAge: primaryKey({ columns: [table.profileId, table.gender, table.age], name: "ig_audience_gender_age_profileId_gender_age"}),
	}
});

export const igAudienceState = mysqlTable("ig_audience_state", {
	profileId: varchar({ length: 150 }).notNull(),
	state: varchar({ length: 50 }).notNull(),
	type: varchar({ length: 50 }),
	percentage: float(),
	updatedAt: date({ mode: 'date' }),
},
(table) => {
	return {
		igAudienceStateProfileIdState: primaryKey({ columns: [table.profileId, table.state], name: "ig_audience_state_profileId_state"}),
	}
});

export const igContentDiscount = mysqlTable("ig_content_discount", {
	contentCount: int("content_count").notNull(),
	contentDiscount: float("content_discount"),
},
(table) => {
	return {
		igContentDiscountContentCount: primaryKey({ columns: [table.contentCount], name: "ig_content_discount_content_count"}),
	}
});

export const igFollowerGrowth = mysqlTable("ig_follower_growth", {
	profileId: varchar({ length: 150 }).notNull(),
	followers: int(),
	date: date({ mode: 'date' }).notNull(),
},
(table) => {
	return {
		igFollowerGrowthProfileIdDate: primaryKey({ columns: [table.profileId, table.date], name: "ig_follower_growth_profileId_date"}),
	}
});

export const igOverview = mysqlTable("ig_overview", {
	id: bigint({ mode: "number" }).autoincrement().notNull(),
	campaignId: varchar("campaign_id", { length: 255 }).notNull(),
	date: date({ mode: 'date' }),
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
	startDate: date("start_date", { mode: 'date' }),
	endDate: date("end_date", { mode: 'date' }),
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
	reelsReplays: int("reels_replays"),
},
(table) => {
	return {
		overviewDefaultIdx: index("overview_default_idx").on(table.campaignId),
		igOverviewId: primaryKey({ columns: [table.id], name: "ig_overview_id"}),
	}
});

export const igProfileCampaignOverview = mysqlTable("ig_profile_campaign_overview", {
	campaignId: varchar("campaign_id", { length: 255 }).notNull(),
	date: date({ mode: 'date' }),
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
	reelsReplays: int("reels_replays"),
},
(table) => {
	return {
		followupDefaultIdx: index("followup_default_idx").on(table.campaignId),
		userId: index("user_id").on(table.userId),
	}
});

export const influencerCampaignPerformanceOverview = mysqlTable("influencer_campaign_performance_overview", {
	campaignId: varchar("campaign_id", { length: 255 }).notNull(),
	date: date({ mode: 'date' }).notNull(),
	squidId: varchar("squid_id", { length: 255 }).notNull(),
	username: varchar({ length: 255 }).notNull(),
	clicksTotal: int("clicks_total"),
	clicksUnique: int("clicks_unique"),
	convertionsCount: int("convertions_count"),
	convertionsValue: int("convertions_value"),
	community: varchar({ length: 255 }),
});

export const instagramMedias = mysqlTable("instagram_medias", {
	id: varchar({ length: 50 }).notNull(),
	campaignId: varchar("campaign_id", { length: 255 }).notNull(),
	campaignUsername: varchar("campaign_username", { length: 255 }),
	campaignTitle: varchar("campaign_title", { length: 255 }).notNull(),
	campaignCustomer: varchar("campaign_customer", { length: 255 }).notNull(),
	campaignTag: varchar("campaign_tag", { length: 255 }),
	campaignTimezone: varchar("campaign_timezone", { length: 45 }),
	date: date({ mode: 'date' }).notNull(),
	idMedia: varchar("id_media", { length: 255 }).notNull(),
	mediaOriginalTimezone: varchar("media_original_timezone", { length: 45 }),
	username: varchar({ length: 255 }).notNull(),
	userId: varchar("user_id", { length: 255 }).notNull(),
	followers: int().notNull(),
	type: varchar({ length: 25 }).notNull(),
	createdAt: datetime("created_at", { mode: 'string'}).notNull(),
	weekday: int().notNull(),
	time: varchar({ length: 255 }).default('').notNull(),
	hour: int().notNull(),
	link: varchar({ length: 255 }).default(''),
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
	obtainedOn: datetime("obtained_on", { mode: 'string'}),
	capture: varchar({ length: 50 }),
	hasOcrMetrics: tinyint("has_ocr_metrics").default(0),
	replays: int(),
	follows: int(),
	profileActivity: int("profile_activity"),
	profileVisits: int("profile_visits"),
	shares: int(),
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
		instagramMediasId: primaryKey({ columns: [table.id], name: "instagram_medias_id"}),
	}
});

export const instagramMediasBkp = mysqlTable("instagram_medias_bkp", {
	id: int().autoincrement().notNull(),
	campaignId: varchar("campaign_id", { length: 255 }).notNull(),
	campaignUsername: varchar("campaign_username", { length: 255 }),
	campaignTitle: varchar("campaign_title", { length: 255 }).notNull(),
	campaignCustomer: varchar("campaign_customer", { length: 255 }).notNull(),
	campaignTag: varchar("campaign_tag", { length: 255 }).notNull(),
	date: date({ mode: 'date' }).notNull(),
	idMedia: varchar("id_media", { length: 255 }).notNull(),
	username: varchar({ length: 255 }).notNull(),
	userId: varchar("user_id", { length: 255 }).notNull(),
	followers: int().notNull(),
	type: varchar({ length: 25 }).notNull(),
	createdAt: datetime("created_at", { mode: 'string'}).notNull(),
	weekday: int().notNull(),
	time: varchar({ length: 255 }).default('').notNull(),
	hour: int().notNull(),
	link: varchar({ length: 255 }).default(''),
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
	community: tinyint().notNull(),
},
(table) => {
	return {
		instagramMediasBkpId: primaryKey({ columns: [table.id], name: "instagram_medias_bkp_id"}),
	}
});

export const instagramTiers = mysqlTable("instagram_tiers", {
	id: int().autoincrement().notNull(),
	label: varchar({ length: 255 }).notNull(),
	min: int().default(0),
	max: int(),
	rpa: tinyint().default(0),
	postValue: float("post_value"),
	stories: float(),
	reelValue: float("reel_value"),
	defaultCacheVariation: float("default_cache_variation"),
},
(table) => {
	return {
		minIdx: index("instagram_tiers_min_IDX").on(table.min),
		maxIdx: index("instagram_tiers_max_IDX").on(table.max),
		instagramTiersId: primaryKey({ columns: [table.id], name: "instagram_tiers_id"}),
	}
});

export const linkedinTiers = mysqlTable("linkedin_tiers", {
	id: int().autoincrement().notNull(),
	label: varchar({ length: 255 }).notNull(),
	min: int().default(0),
	max: int(),
},
(table) => {
	return {
		linkedinTiersId: primaryKey({ columns: [table.id], name: "linkedin_tiers_id"}),
	}
});

export const mappingStates = mysqlTable("mapping_states", {
	state: varchar({ length: 250 }).notNull(),
	city: varchar({ length: 250 }).notNull(),
	uf: char({ length: 2 }).notNull(),
},
(table) => {
	return {
		mappingStatesStateCityUf: primaryKey({ columns: [table.state, table.city, table.uf], name: "mapping_states_state_city_uf"}),
	}
});

export const numbers = mysqlTable("numbers", {
	n: int().notNull(),
},
(table) => {
	return {
		numbersN: primaryKey({ columns: [table.n], name: "numbers_n"}),
	}
});

export const tiktokMedias = mysqlTable("tiktok_medias", {
	id: int().autoincrement().notNull(),
	campaignId: varchar("campaign_id", { length: 255 }).notNull(),
	campaignUsername: varchar("campaign_username", { length: 255 }),
	campaignTitle: varchar("campaign_title", { length: 255 }),
	campaignCustomer: varchar("campaign_customer", { length: 255 }),
	campaignTag: varchar("campaign_tag", { length: 255 }),
	campaignTimezone: varchar("campaign_timezone", { length: 255 }),
	date: date({ mode: 'date' }),
	idMedia: varchar("id_media", { length: 255 }),
	mediaOriginalTimezone: varchar("media_original_timezone", { length: 255 }),
	username: varchar({ length: 255 }),
	userId: varchar("user_id", { length: 255 }),
	followers: varchar({ length: 255 }),
	subtype: varchar({ length: 255 }),
	type: varchar({ length: 255 }),
	createdAt: datetime("created_at", { mode: 'string'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
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
	obtainedOn: datetime("obtained_on", { mode: 'string'}),
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
	capture: varchar({ length: 45 }),
},
(table) => {
	return {
		campaignIdIdx: index("tiktok_medias_campaign_id_IDX").on(table.campaignId, table.campaignTitle, table.status),
		tiktokMediasId: primaryKey({ columns: [table.id], name: "tiktok_medias_id"}),
		tiktokMediasIdIdx: unique("tiktok_medias_id_IDX").on(table.id),
	}
});

export const tiktokTiers = mysqlTable("tiktok_tiers", {
	id: int().autoincrement().notNull(),
	label: varchar({ length: 255 }).notNull(),
	min: int().default(0),
	max: int(),
},
(table) => {
	return {
		tiktokTiersId: primaryKey({ columns: [table.id], name: "tiktok_tiers_id"}),
	}
});

export const tkAudienceAge = mysqlTable("tk_audience_age", {
	campaignId: varchar("campaign_id", { length: 255 }).notNull(),
	date: date({ mode: 'date' }),
	campaignUsername: varchar("campaign_username", { length: 255 }),
	campaignTitle: varchar("campaign_title", { length: 255 }),
	campaignCustomer: varchar("campaign_customer", { length: 255 }),
	campaignTag: varchar("campaign_tag", { length: 255 }),
	age18To24: float(),
	age25To34: float(),
	age35: float(),
	community: varchar({ length: 24 }),
},
(table) => {
	return {
		tkAudienceAgeCampaignId: primaryKey({ columns: [table.campaignId], name: "tk_audience_age_campaign_id"}),
	}
});

export const tkAudienceCountry = mysqlTable("tk_audience_country", {
	campaignId: varchar("campaign_id", { length: 255 }).notNull(),
	date: date({ mode: 'date' }),
	campaignUsername: varchar("campaign_username", { length: 255 }),
	campaignTitle: varchar("campaign_title", { length: 255 }),
	campaignCustomer: varchar("campaign_customer", { length: 255 }),
	campaignTag: varchar("campaign_tag", { length: 255 }),
	order: int().notNull(),
	name: varchar({ length: 255 }),
	value: float(),
	community: varchar({ length: 24 }),
},
(table) => {
	return {
		tkAudienceCountryCampaignIdOrder: primaryKey({ columns: [table.campaignId, table.order], name: "tk_audience_country_campaign_id_order"}),
	}
});

export const tkAudienceDevice = mysqlTable("tk_audience_device", {
	campaignId: varchar("campaign_id", { length: 255 }).notNull(),
	date: date({ mode: 'date' }),
	campaignUsername: varchar("campaign_username", { length: 255 }),
	campaignTitle: varchar("campaign_title", { length: 255 }),
	campaignCustomer: varchar("campaign_customer", { length: 255 }),
	campaignTag: varchar("campaign_tag", { length: 255 }),
	android: float(),
	ios: float(),
	community: varchar({ length: 24 }),
},
(table) => {
	return {
		tkAudienceDeviceCampaignId: primaryKey({ columns: [table.campaignId], name: "tk_audience_device_campaign_id"}),
	}
});

export const tkAudienceGender = mysqlTable("tk_audience_gender", {
	campaignId: varchar("campaign_id", { length: 255 }).notNull(),
	date: date({ mode: 'date' }),
	campaignUsername: varchar("campaign_username", { length: 255 }),
	campaignTitle: varchar("campaign_title", { length: 255 }),
	campaignCustomer: varchar("campaign_customer", { length: 255 }),
	campaignTag: varchar("campaign_tag", { length: 255 }),
	female: float(),
	male: float(),
	community: varchar({ length: 24 }),
},
(table) => {
	return {
		tkAudienceGenderCampaignId: primaryKey({ columns: [table.campaignId], name: "tk_audience_gender_campaign_id"}),
	}
});

export const tkOverview = mysqlTable("tk_overview", {
	id: int().autoincrement().notNull(),
	campaignId: varchar("campaign_id", { length: 100 }).notNull(),
	campaignTitle: varchar("campaign_title", { length: 100 }),
	campaignCustomer: varchar("campaign_customer", { length: 100 }),
	responsible: varchar({ length: 100 }),
	date: date({ mode: 'date' }),
	startDate: date("start_date", { mode: 'date' }),
	endDate: date("end_date", { mode: 'date' }),
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
	createdAt: datetime("created_at", { mode: 'string'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
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
	cpc: float(),
},
(table) => {
	return {
		tkOverviewId: primaryKey({ columns: [table.id], name: "tk_overview_id"}),
	}
});

export const tkProfileCampaignOverview = mysqlTable("tk_profile_campaign_overview", {
	id: int().autoincrement().notNull(),
	campaignId: varchar("campaign_id", { length: 255 }).default('').notNull(),
	campaignTitle: varchar("campaign_title", { length: 255 }).default('').notNull(),
	campaignCustomer: varchar("campaign_customer", { length: 255 }).default('').notNull(),
	community: varchar({ length: 255 }),
	date: date({ mode: 'date' }).notNull(),
	username: varchar({ length: 255 }).default('').notNull(),
	userId: varchar("user_id", { length: 255 }).default('').notNull(),
	squidId: varchar("squid_id", { length: 255 }).default('').notNull(),
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
	convertionsCommissionToReceive: float("convertions_commission_to_receive"),
},
(table) => {
	return {
		tkProfileCampaignOverviewId: primaryKey({ columns: [table.id], name: "tk_profile_campaign_overview_id"}),
	}
});

export const ttOverview = mysqlTable("tt_overview", {
	id: mediumint().autoincrement().notNull(),
	campaignId: varchar("campaign_id", { length: 255 }).notNull(),
	date: date({ mode: 'date' }),
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
	startDate: date("start_date", { mode: 'date' }),
	endDate: date("end_date", { mode: 'date' }),
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
	cpc: float(),
},
(table) => {
	return {
		overviewDefaultIdx: index("overview_default_idx").on(table.campaignId),
		ttOverviewId: primaryKey({ columns: [table.id], name: "tt_overview_id"}),
	}
});

export const ttProfileCampaignOverview = mysqlTable("tt_profile_campaign_overview", {
	campaignId: varchar("campaign_id", { length: 255 }).notNull(),
	date: date({ mode: 'date' }),
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
	community: varchar({ length: 255 }).default('0').notNull(),
	macro: tinyint().default(0),
	totalClicks: int(),
	uniqueClicks: int(),
	convertionsCount: float("convertions_count"),
	convertionsValue: float("convertions_value"),
	executedTweets: int("executed_tweets").default(0).notNull(),
	executedRetweets: int("executed_retweets").default(0).notNull(),
	convertionsRegisteredCount: float("convertions_registered_count"),
	convertionsRegisteredValue: float("convertions_registered_value"),
	convertionsCommissionToReceive: float("convertions_commission_to_receive"),
},
(table) => {
	return {
		followupDefaultIdx: index("followup_default_idx").on(table.campaignId),
	}
});

export const twitterMedias = mysqlTable("twitter_medias", {
	id: int().autoincrement().notNull(),
	campaignId: varchar("campaign_id", { length: 255 }).notNull(),
	campaignUsername: varchar("campaign_username", { length: 255 }),
	campaignTitle: varchar("campaign_title", { length: 255 }).notNull(),
	campaignCustomer: varchar("campaign_customer", { length: 255 }).notNull(),
	campaignTag: varchar("campaign_tag", { length: 255 }).notNull(),
	campaignTimezone: varchar("campaign_timezone", { length: 45 }),
	date: date({ mode: 'date' }).notNull(),
	idMedia: varchar("id_media", { length: 255 }).notNull(),
	mediaOriginalTimezone: varchar("media_original_timezone", { length: 45 }),
	username: varchar({ length: 255 }).notNull(),
	userId: varchar("user_id", { length: 255 }).notNull(),
	followers: int().notNull(),
	type: varchar({ length: 25 }).notNull(),
	createdAt: datetime("created_at", { mode: 'string'}).notNull(),
	weekday: int().notNull(),
	time: varchar({ length: 255 }).default('').notNull(),
	hour: int().notNull(),
	link: varchar({ length: 255 }).default(''),
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
	obtainedOn: datetime("obtained_on", { mode: 'string'}),
	capture: varchar({ length: 45 }),
},
(table) => {
	return {
		queryDefaultIdx: index("query_default_idx").on(table.campaignId, table.status, table.type),
		twitterMediasId: primaryKey({ columns: [table.id], name: "twitter_medias_id"}),
	}
});

export const twitterTiers = mysqlTable("twitter_tiers", {
	id: int().autoincrement().notNull(),
	label: varchar({ length: 255 }).notNull(),
	min: int().default(0),
	max: int(),
},
(table) => {
	return {
		twitterTiersId: primaryKey({ columns: [table.id], name: "twitter_tiers_id"}),
	}
});

export const youtubeMedias = mysqlTable("youtube_medias", {
	id: int().autoincrement().notNull(),
	campaignId: varchar("campaign_id", { length: 255 }).notNull(),
	campaignTitle: varchar("campaign_title", { length: 255 }).notNull(),
	campaignCustomer: varchar("campaign_customer", { length: 255 }).notNull(),
	campaignTimezone: varchar("campaign_timezone", { length: 45 }),
	date: datetime({ mode: 'string'}).notNull(),
	idMedia: varchar("id_media", { length: 255 }).notNull(),
	mediaOriginalTimezone: varchar("media_original_timezone", { length: 45 }),
	channel: varchar({ length: 255 }).notNull(),
	userId: varchar("user_id", { length: 255 }).notNull(),
	squidId: varchar("squid_id", { length: 255 }).notNull(),
	googleId: varchar("google_id", { length: 255 }),
	followers: int().default(0).notNull(),
	type: varchar({ length: 45 }).default('video').notNull(),
	weekday: int().notNull(),
	time: varchar({ length: 255 }).default('').notNull(),
	hour: int().notNull(),
	link: varchar({ length: 255 }).default(''),
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
	createdAt: datetime("created_at", { mode: 'string'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	caption: text(),
	obtainedOn: datetime("obtained_on", { mode: 'string'}),
	capture: varchar({ length: 45 }),
},
(table) => {
	return {
		queryDefaultIdx: index("query_default_idx").on(table.campaignId, table.type, table.status),
		youtubeMediasId: primaryKey({ columns: [table.id], name: "youtube_medias_id"}),
	}
});

export const youtubeTiers = mysqlTable("youtube_tiers", {
	id: int().autoincrement().notNull(),
	label: varchar({ length: 255 }).notNull(),
	min: int().default(0),
	max: int(),
},
(table) => {
	return {
		youtubeTiersId: primaryKey({ columns: [table.id], name: "youtube_tiers_id"}),
	}
});

const youtubeAgeBrackets = [
  "13-17",
  "18-24",
  "25-34",
  "35-44",
  "45-54",
  "55-64",
  "65-"
] as const

const youtubeGenderBrackets = [
  'MALE',
  'FEMALE',
  'OTHERS'
] as const


export const ytAudienceAge = mysqlTable("yt_audience_age", {
	profileId: varchar({ length: 150 }).notNull(),
	age: mysqlEnum(youtubeAgeBrackets).notNull(),
	type: varchar({ length: 50 }),
	percentage: float(),
	updatedAt: date({ mode: 'date' }),
},
(table) => {
	return {
		ytAudienceAgeProfileIdAge: primaryKey({ columns: [table.profileId, table.age], name: "yt_audience_age_profileId_age"}),
	}
});

export const ytAudienceCountry = mysqlTable("yt_audience_country", {
	profileId: varchar({ length: 150 }).notNull(),
	countryCode: varchar({ length: 50 }).notNull(),
	type: varchar({ length: 50 }),
	percentage: float(),
	updatedAt: date({ mode: 'date' }),
},
(table) => {
	return {
		ytAudienceCountryProfileIdCountryCode: primaryKey({ columns: [table.profileId, table.countryCode], name: "yt_audience_country_profileId_countryCode"}),
	}
});

export const ytAudienceGender = mysqlTable("yt_audience_gender", {
	profileId: varchar({ length: 150 }).notNull(),
	gender: mysqlEnum(youtubeGenderBrackets).notNull(),
	type: varchar({ length: 50 }),
	percentage: float(),
	updatedAt: date({ mode: 'date' }),
},
(table) => {
	return {
		ytAudienceGenderProfileIdGender: primaryKey({ columns: [table.profileId, table.gender], name: "yt_audience_gender_profileId_gender"}),
	}
});

export const ytAudienceGenderAge = mysqlTable("yt_audience_gender_age", {
	profileId: varchar({ length: 150 }).notNull(),
	gender: mysqlEnum(youtubeGenderBrackets).notNull(),
	age: mysqlEnum(youtubeAgeBrackets).notNull(),
	type: varchar({ length: 50 }),
	percentage: float(),
	updatedAt: date({ mode: 'date' }),
},
(table) => {
	return {
		ytAudienceGenderAgeProfileIdGenderAge: primaryKey({ columns: [table.profileId, table.gender, table.age], name: "yt_audience_gender_age_profileId_gender_age"}),
	}
});

export const ytOverview = mysqlTable("yt_overview", {
	id: int().autoincrement().notNull(),
	campaignId: varchar("campaign_id", { length: 255 }).notNull(),
	campaignTitle: varchar("campaign_title", { length: 255 }),
	campaignCustomer: varchar("campaign_customer", { length: 255 }),
	responsible: varchar({ length: 255 }),
	date: date({ mode: 'date' }),
	startDate: date("start_date", { mode: 'date' }),
	endDate: date("end_date", { mode: 'date' }),
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
	createdAt: datetime("created_at", { mode: 'string'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	cpm: float(),
	cpe: float(),
	mediaValue: float("media_value"),
	roi: float(),
	ctr: float(),
	responsibleTeam: varchar("responsible_team", { length: 255 }),
	convertionsRegisteredCount: float("convertions_registered_count"),
	convertionsRegisteredValue: float("convertions_registered_value"),
	convertionsCommissionToReceive: float("convertions_commission_to_receive"),
	cpc: float(),
},
(table) => {
	return {
		ytOverviewId: primaryKey({ columns: [table.id], name: "yt_overview_id"}),
	}
});

export const ytProfileCampaignOverview = mysqlTable("yt_profile_campaign_overview", {
	campaignId: varchar("campaign_id", { length: 255 }).default('').notNull(),
	campaignTitle: varchar("campaign_title", { length: 255 }).default('').notNull(),
	campaignCustomer: varchar("campaign_customer", { length: 255 }).default('').notNull(),
	community: varchar({ length: 255 }),
	date: date({ mode: 'date' }).notNull(),
	channel: varchar({ length: 255 }).default('').notNull(),
	userId: varchar("user_id", { length: 255 }).default('').notNull(),
	squidId: varchar("squid_id", { length: 255 }).default('').notNull(),
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
	convertionsCommissionToReceive: float("convertions_commission_to_receive"),
});
