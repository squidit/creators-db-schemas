import { relations } from "drizzle-orm/relations";
import { transactions, customerPayments, influencerPayments, nfs, transactionBankAccounts, transactionBeneficiaries } from "./schema";

export const customerPaymentsRelations = relations(customerPayments, ({one}) => ({
	transaction: one(transactions, {
		fields: [customerPayments.transactionId],
		references: [transactions.transactionId]
	}),
}));

export const transactionsRelations = relations(transactions, ({many}) => ({
	customerPayments: many(customerPayments),
	influencerPayments: many(influencerPayments),
	nfs: many(nfs),
	transactionBankAccounts: many(transactionBankAccounts),
	transactionBeneficiaries_transactionId: many(transactionBeneficiaries, {
		relationName: "transactionBeneficiaries_transactionId_transactions_transactionId"
	}),
	transactionBeneficiaries_transactionId: many(transactionBeneficiaries, {
		relationName: "transactionBeneficiaries_transactionId_transactions_transactionId"
	}),
}));

export const influencerPaymentsRelations = relations(influencerPayments, ({one}) => ({
	transaction: one(transactions, {
		fields: [influencerPayments.transactionId],
		references: [transactions.transactionId]
	}),
}));

export const nfsRelations = relations(nfs, ({one}) => ({
	transaction: one(transactions, {
		fields: [nfs.transactionId],
		references: [transactions.transactionId]
	}),
}));

export const transactionBankAccountsRelations = relations(transactionBankAccounts, ({one}) => ({
	transaction: one(transactions, {
		fields: [transactionBankAccounts.transactionId],
		references: [transactions.transactionId]
	}),
}));

export const transactionBeneficiariesRelations = relations(transactionBeneficiaries, ({one}) => ({
	transaction_transactionId: one(transactions, {
		fields: [transactionBeneficiaries.transactionId],
		references: [transactions.transactionId],
		relationName: "transactionBeneficiaries_transactionId_transactions_transactionId"
	}),
	transaction_transactionId: one(transactions, {
		fields: [transactionBeneficiaries.transactionId],
		references: [transactions.transactionId],
		relationName: "transactionBeneficiaries_transactionId_transactions_transactionId"
	}),
}));