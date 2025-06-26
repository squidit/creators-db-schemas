import { relations } from "drizzle-orm/relations";
import { profiles, blockedusers, profileAdditionalInfos, profileAdditionalInfosOld, profileWhitelabels, progressiveRegistrationQuestions, progressiveRegistrationAnswers, progressiveRegistrationQuestionOptions, progressiveRegistrationLabels, progressiveRegistrationGroups, progressiveRegistrationWhitelabels, socialNetworkProfiles, profileCategories, socialNetworkProfilesCategories, socialNetworkProfilesWhitelabels } from "./schema";

export const blockedusersRelations = relations(blockedusers, ({one}) => ({
	profile: one(profiles, {
		fields: [blockedusers.profileId],
		references: [profiles.id]
	}),
}));

export const profilesRelations = relations(profiles, ({many}) => ({
	blockedusers: many(blockedusers),
	profileAdditionalInfos: many(profileAdditionalInfos),
	profileAdditionalInfosOlds: many(profileAdditionalInfosOld),
	profileWhitelabels: many(profileWhitelabels),
	progressiveRegistrationAnswers: many(progressiveRegistrationAnswers),
	socialNetworkProfiles: many(socialNetworkProfiles),
	socialNetworkProfilesWhitelabels: many(socialNetworkProfilesWhitelabels),
}));

export const profileAdditionalInfosRelations = relations(profileAdditionalInfos, ({one}) => ({
	profile: one(profiles, {
		fields: [profileAdditionalInfos.profileId],
		references: [profiles.id]
	}),
}));

export const profileAdditionalInfosOldRelations = relations(profileAdditionalInfosOld, ({one}) => ({
	profile: one(profiles, {
		fields: [profileAdditionalInfosOld.profileId],
		references: [profiles.id]
	}),
}));

export const profileWhitelabelsRelations = relations(profileWhitelabels, ({one}) => ({
	profile: one(profiles, {
		fields: [profileWhitelabels.profileId],
		references: [profiles.id]
	}),
}));

export const progressiveRegistrationAnswersRelations = relations(progressiveRegistrationAnswers, ({one}) => ({
	progressiveRegistrationQuestion: one(progressiveRegistrationQuestions, {
		fields: [progressiveRegistrationAnswers.question],
		references: [progressiveRegistrationQuestions.id]
	}),
	profile: one(profiles, {
		fields: [progressiveRegistrationAnswers.squidId],
		references: [profiles.id]
	}),
	progressiveRegistrationQuestionOption: one(progressiveRegistrationQuestionOptions, {
		fields: [progressiveRegistrationAnswers.answerOption],
		references: [progressiveRegistrationQuestionOptions.id]
	}),
}));

export const progressiveRegistrationQuestionsRelations = relations(progressiveRegistrationQuestions, ({one, many}) => ({
	progressiveRegistrationAnswers: many(progressiveRegistrationAnswers),
	progressiveRegistrationQuestionOptions: many(progressiveRegistrationQuestionOptions),
	progressiveRegistrationGroup: one(progressiveRegistrationGroups, {
		fields: [progressiveRegistrationQuestions.group],
		references: [progressiveRegistrationGroups.id]
	}),
	progressiveRegistrationLabel: one(progressiveRegistrationLabels, {
		fields: [progressiveRegistrationQuestions.label],
		references: [progressiveRegistrationLabels.id]
	}),
	progressiveRegistrationWhitelabels: many(progressiveRegistrationWhitelabels),
}));

export const progressiveRegistrationQuestionOptionsRelations = relations(progressiveRegistrationQuestionOptions, ({one, many}) => ({
	progressiveRegistrationAnswers: many(progressiveRegistrationAnswers),
	progressiveRegistrationQuestion: one(progressiveRegistrationQuestions, {
		fields: [progressiveRegistrationQuestionOptions.question],
		references: [progressiveRegistrationQuestions.id]
	}),
	progressiveRegistrationLabel: one(progressiveRegistrationLabels, {
		fields: [progressiveRegistrationQuestionOptions.label],
		references: [progressiveRegistrationLabels.id]
	}),
}));

export const progressiveRegistrationGroupsRelations = relations(progressiveRegistrationGroups, ({one, many}) => ({
	progressiveRegistrationLabel: one(progressiveRegistrationLabels, {
		fields: [progressiveRegistrationGroups.label],
		references: [progressiveRegistrationLabels.id]
	}),
	progressiveRegistrationQuestions: many(progressiveRegistrationQuestions),
	progressiveRegistrationWhitelabels: many(progressiveRegistrationWhitelabels),
}));

export const progressiveRegistrationLabelsRelations = relations(progressiveRegistrationLabels, ({many}) => ({
	progressiveRegistrationGroups: many(progressiveRegistrationGroups),
	progressiveRegistrationQuestionOptions: many(progressiveRegistrationQuestionOptions),
	progressiveRegistrationQuestions: many(progressiveRegistrationQuestions),
}));

export const progressiveRegistrationWhitelabelsRelations = relations(progressiveRegistrationWhitelabels, ({one}) => ({
	progressiveRegistrationQuestion: one(progressiveRegistrationQuestions, {
		fields: [progressiveRegistrationWhitelabels.question],
		references: [progressiveRegistrationQuestions.id]
	}),
	progressiveRegistrationGroup: one(progressiveRegistrationGroups, {
		fields: [progressiveRegistrationWhitelabels.group],
		references: [progressiveRegistrationGroups.id]
	}),
}));

export const socialNetworkProfilesRelations = relations(socialNetworkProfiles, ({one, many}) => ({
	profile: one(profiles, {
		fields: [socialNetworkProfiles.squidId],
		references: [profiles.id]
	}),
	socialNetworkProfilesCategories: many(socialNetworkProfilesCategories),
}));

export const socialNetworkProfilesCategoriesRelations = relations(socialNetworkProfilesCategories, ({one}) => ({
	profileCategory: one(profileCategories, {
		fields: [socialNetworkProfilesCategories.categoryId],
		references: [profileCategories.id]
	}),
	socialNetworkProfile: one(socialNetworkProfiles, {
		fields: [socialNetworkProfilesCategories.profileId],
		references: [socialNetworkProfiles.id]
	}),
}));

export const profileCategoriesRelations = relations(profileCategories, ({many}) => ({
	socialNetworkProfilesCategories: many(socialNetworkProfilesCategories),
}));

export const socialNetworkProfilesWhitelabelsRelations = relations(socialNetworkProfilesWhitelabels, ({one}) => ({
	profile: one(profiles, {
		fields: [socialNetworkProfilesWhitelabels.squidId],
		references: [profiles.id]
	}),
}));