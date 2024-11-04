import { relations } from "drizzle-orm/relations";
import { researchQuestionGroup, research, researchQuestion, researchAnswer } from "./schema";

export const researchRelations = relations(research, ({one, many}) => ({
	researchQuestionGroup: one(researchQuestionGroup, {
		fields: [research.questionGroupId],
		references: [researchQuestionGroup.id]
	}),
	researchAnswers: many(researchAnswer),
}));

export const researchQuestionGroupRelations = relations(researchQuestionGroup, ({many}) => ({
	research: many(research),
	researchQuestions: many(researchQuestion),
}));

export const researchAnswerRelations = relations(researchAnswer, ({one}) => ({
	researchQuestion: one(researchQuestion, {
		fields: [researchAnswer.sharedQuestionId],
		references: [researchQuestion.sharedQuestionId]
	}),
	research: one(research, {
		fields: [researchAnswer.researchId],
		references: [research.id]
	}),
}));

export const researchQuestionRelations = relations(researchQuestion, ({one, many}) => ({
	researchAnswers: many(researchAnswer),
	researchQuestionGroup: one(researchQuestionGroup, {
		fields: [researchQuestion.questionGroupId],
		references: [researchQuestionGroup.id]
	}),
}));