import { sql } from "drizzle-orm";
import { datetime, index, int, mysqlTable, primaryKey, tinyint, unique, varchar } from "drizzle-orm/mysql-core";

export const research = mysqlTable("research", {
	id: varchar({ length: 36 }).notNull(),
	userId: varchar("user_id", { length: 255 }).notNull(),
	userName: varchar("user_name", { length: 150 }),
	userEmail: varchar("user_email", { length: 100 }),
	campaignId: varchar("campaign_id", { length: 255 }).notNull(),
	campaignTitle: varchar("campaign_title", { length: 150 }),
	organizationId: varchar("organization_id", { length: 255 }),
	organizationName: varchar("organization_name", { length: 255 }),
	systemType: varchar("system_type", { length: 50 }).notNull(),
	questionGroupId: varchar("question_group_id", { length: 36 }).notNull().references(() => researchQuestionGroup.id),
	seenTime: int("seen_time").default(0).notNull(),
	done: tinyint().default(0).notNull(),
	createdAt: datetime("created_at", { mode: 'string', fsp: 3 }).notNull(),
	updatedAt: datetime("updated_at", { mode: 'string'}),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
},
(table) => {
	return {
		questionGroupId: index("question_group_id").on(table.questionGroupId),
		researchId: primaryKey({ columns: [table.id], name: "research_id"}),
		userId: unique("user_id").on(table.userId, table.campaignId, table.questionGroupId),
	}
});

export const researchAnswer = mysqlTable("research_answer", {
	id: varchar({ length: 36 }).notNull(),
	researchAnswer: varchar("research_answer", { length: 255 }),
	score: int(),
	sharedQuestionId: varchar("shared_question_id", { length: 36 }).references(() => researchQuestion.sharedQuestionId),
	researchId: varchar("research_id", { length: 36 }).references(() => research.id, { onDelete: "cascade" } ),
	createdAt: datetime("created_at", { mode: 'string'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: datetime("updated_at", { mode: 'string'}),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
	optionalQuestion: int("optional_question").default(0),
},
(table) => {
	return {
		sharedQuestionId: index("shared_question_id").on(table.sharedQuestionId),
		researchAnswerId: primaryKey({ columns: [table.id], name: "research_answer_id"}),
	}
});

export const researchQuestion = mysqlTable("research_question", {
	id: varchar({ length: 36 }).notNull(),
	sharedQuestionId: varchar("shared_question_id", { length: 36 }),
	question: varchar({ length: 255 }),
	questionType: varchar("question_type", { length: 50 }),
	questionGroupId: varchar("question_group_id", { length: 36 }).references(() => researchQuestionGroup.id),
	language: varchar({ length: 5 }).default('pt-br').notNull(),
	createdAt: datetime("created_at", { mode: 'string'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: datetime("updated_at", { mode: 'string'}),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
	optional: int().default(0),
},
(table) => {
	return {
		questionGroupId: index("question_group_id").on(table.questionGroupId),
		researchQuestionId: primaryKey({ columns: [table.id], name: "research_question_id"}),
		sharedQuestionId: unique("shared_question_id").on(table.sharedQuestionId, table.language),
	}
});

export const researchQuestionGroup = mysqlTable("research_question_group", {
	id: varchar({ length: 36 }).notNull(),
	name: varchar({ length: 255 }),
	tag: varchar({ length: 100 }).notNull(),
	createdAt: datetime("created_at", { mode: 'string'}).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: datetime("updated_at", { mode: 'string'}),
	deletedAt: datetime("deleted_at", { mode: 'string'}),
},
(table) => {
	return {
		researchQuestionGroupId: primaryKey({ columns: [table.id], name: "research_question_group_id"}),
		tag: unique("tag").on(table.tag),
	}
});
