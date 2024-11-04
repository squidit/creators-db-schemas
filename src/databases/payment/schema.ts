import type { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { sql } from "drizzle-orm";
import { bigint, char, date, datetime, double, float, index, int, json, longtext, mediumtext, mysqlTable, mysqlView, primaryKey, text, tinyint, unique, varchar } from "drizzle-orm/mysql-core";

export const charges = mysqlTable("charges", {
  seqId: bigint({ mode: "number" }).autoincrement().notNull(),
  createdAt: datetime({ mode: 'date' }).notNull(),
  updatedAt: datetime({ mode: 'date' }),
  deletedAt: datetime({ mode: 'date' }),
  amount: double({ precision: 10, scale: 2 }).notNull(),
  totalAmount: double({ precision: 10, scale: 2 }).notNull(),
  fees: double({ precision: 10, scale: 2 }).notNull(),
  dueDate: date({ mode: 'date' }),
  currency: varchar({ length: 3 }).default('BRL').notNull(),
  paymentOrderUrl: longtext(),
  paymentGatewayTransactionId: longtext(),
},
  (table) => {
    return {
      chargesSeqId: primaryKey({ columns: [table.seqId], name: "charges_seqId" }),
    }
  });

export type Charge = InferSelectModel<typeof charges>;
export type NewCharge = InferInsertModel<typeof charges>;

export const companyFiles = mysqlTable("companyFiles", {
  seqId: bigint({ mode: "number" }).autoincrement().notNull(),
  squidId: varchar({ length: 36 }).notNull(),
  companyDocument: varchar({ length: 50 }).notNull(),
  urlStorage: text(),
  status: varchar({ length: 40 }).notNull(),
  reason: varchar({ length: 100 }),
  uploadedAt: date({ mode: 'date' }),
  validatedAt: date({ mode: 'date' }),
  deletedAt: date({ mode: 'date' }),
},
  (table) => {
    return {
      companyFilesSeqId: primaryKey({ columns: [table.seqId], name: "companyFiles_seqId" }),
    }
  });

export type CompanyFile = InferSelectModel<typeof companyFiles>;
export type NewCompanyFile = InferInsertModel<typeof companyFiles>;

export const compositions = mysqlTable("compositions", {
  seqId: int().autoincrement().notNull(),
  chargeId: int().notNull(),
  squidId: varchar({ length: 36 }),
  username: varchar({ length: 255 }),
  paymentType: varchar({ length: 5 }),
  document: varchar({ length: 50 }),
  fullName: varchar({ length: 255 }),
  birthday: date({ mode: 'date' }),
  transactionId: varchar({ length: 60 }),
  dueDate: date({ mode: 'date' }),
  transactionStatus: varchar({ length: 50 }),
  netValue: float(),
  grossValue: float(),
  nf: varchar({ length: 255 }),
  pis: varchar({ length: 50 }),
  address: varchar({ length: 255 }),
  addressNumber: varchar({ length: 45 }),
  neighborhood: varchar({ length: 255 }),
  zipcode: varchar({ length: 15 }),
  city: varchar({ length: 255 }),
  uf: varchar({ length: 255 }),
  country: varchar({ length: 255 }),
  bankAccountNumber: varchar({ length: 50 }),
  bankAccountDigit: varchar({ length: 5 }),
  bankAccountAgency: varchar({ length: 11 }),
  bankCode: varchar({ length: 10 }),
  bankName: varchar({ length: 100 }),
  bankAccountType: varchar({ length: 20 }),
},
  (table) => {
    return {
      compositionsSeqId: primaryKey({ columns: [table.seqId], name: "compositions_seqId" }),
      transactionId: unique("transactionId").on(table.transactionId),
    }
  });

export const customerPayments = mysqlTable("customerPayments", {
  seqId: bigint({ mode: "number" }).autoincrement().notNull(),
  transactionId: varchar({ length: 60 }).notNull().references(() => transactions.transactionId),
  createdAt: datetime({ mode: 'date' }).notNull(),
  updatedAt: datetime({ mode: 'date' }),
  deletedAt: datetime({ mode: 'date' }),
},
  (table) => {
    return {
      transactionId: index("transactionId").on(table.transactionId),
      customerPaymentsSeqId: primaryKey({ columns: [table.seqId], name: "customerPayments_seqId" }),
    }
  });

export type CustomerPayment = InferSelectModel<typeof customerPayments>;
export type NewCustomerPayment = InferInsertModel<typeof customerPayments>;

export const influencerPayments = mysqlTable("influencerPayments", {
  seqId: bigint({ mode: "number" }).autoincrement().notNull(),
  transactionId: varchar({ length: 60 }).notNull().references(() => transactions.transactionId, { onDelete: "cascade", onUpdate: "cascade" }),
  recruitmentId: varchar({ length: 60 }).notNull(),
  campaignId: varchar({ length: 50 }).notNull(),
  campaignName: varchar({ length: 150 }).notNull(),
  campaignEndDate: datetime({ mode: 'date' }),
  campaignTimezone: varchar({ length: 100 }),
  dateUsedToCalculate: datetime({ mode: 'date' }),
  squidId: varchar({ length: 60 }).notNull(),
  instagramUsername: varchar({ length: 50 }),
  instagramProfileId: bigint({ mode: "number" }),
  youtubeChannel: varchar({ length: 50 }),
  youtubeChannelId: varchar({ length: 36 }),
  pinterestUsername: varchar({ length: 50 }),
  pinterestProfileId: varchar({ length: 36 }),
  nfId: varchar({ length: 60 }),
  whitelabelId: varchar({ length: 24 }),
  whitelabelDomain: varchar({ length: 150 }),
  createdAt: datetime({ mode: 'date' }).notNull(),
  updatedAt: datetime({ mode: 'date' }),
  deletedAt: datetime({ mode: 'date' }),
  paymentStatus: varchar({ length: 50 }).default('').notNull(),
  amount: float().notNull(),
  sourceId: bigint({ mode: "number" }),
  socialNetwork: varchar({ length: 255 }),
  socialNetworkId: varchar({ length: 255 }),
  socialNetworkUsername: varchar({ length: 255 }),
  responsiblePayment: varchar({ length: 200 }),
  responsibleId: varchar({ length: 200 }),
  idPipefy: varchar({ length: 60 }),
  description: varchar({ length: 50 }),
  customDueDate: date({ mode: 'date' }),
  note: varchar({ length: 1000 }),
},
  (table) => {
    return {
      deletedAtIdx: index("influencerPayments_deletedAt_IDX").on(table.deletedAt),
      idPipefyIdx: index("influencerPayments_idPipefy_IDX").on(table.idPipefy, table.campaignId, table.seqId),
      influencerPaymentsSeqId: primaryKey({ columns: [table.seqId], name: "influencerPayments_seqId" }),
    }
  });

export type InfluencerPayment = InferSelectModel<typeof influencerPayments>;
export type NewInfluencerPayment = InferInsertModel<typeof influencerPayments>;

export const influencerZoopBankAccounts = mysqlTable("influencerZoopBankAccounts", {
  seqId: bigint({ mode: "number" }).autoincrement().notNull(),
  squidId: varchar({ length: 60 }).notNull(),
  paymentGatewaySellerId: varchar({ length: 60 }).notNull(),
  paymentGatewayBankAccountId: varchar({ length: 60 }).notNull(),
  paymentGatewayBankAccountToken: varchar({ length: 60 }).default(''),
  bankCode: varchar({ length: 10 }).notNull(),
  bankName: varchar({ length: 100 }).notNull(),
  bankAccountHolderName: varchar({ length: 100 }),
  bankAccountHolderDocument: varchar({ length: 15 }).notNull(),
  bankAccountHolderTradingName: varchar({ length: 100 }),
  bankAccountRoutingNumber: varchar({ length: 10 }).notNull(),
  bankAccountNumber: varchar({ length: 50 }).notNull(),
  bankAccountVerificationNumber: varchar({ length: 1 }).notNull(),
  bankAccountType: varchar({ length: 20 }).notNull(),
  bankAccountHolderType: varchar({ length: 20 }).notNull(),
  createdAt: datetime({ mode: 'date' }),
  updatedAt: datetime({ mode: 'date' }),
  deletedAt: datetime({ mode: 'date' }),
},
  (table) => {
    return {
      influencerZoopBankAccountsSeqId: primaryKey({ columns: [table.seqId], name: "influencerZoopBankAccounts_seqId" }),
      squidId: unique("squidId").on(table.squidId),
    }
  });

export type InfluencerZoopBankAccount = InferSelectModel<typeof influencerZoopBankAccounts>;
export type NewInfluencerZoopBankAccount = InferInsertModel<typeof influencerZoopBankAccounts>;

export const nfCnaes = mysqlTable("nf_cnaes", {
  id: int().autoincrement().notNull(),
  uf: char({ length: 2 }).notNull(),
  codigo: varchar({ length: 45 }).notNull(),
  createdAt: datetime("created_at", { mode: 'date' }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
  updatedAt: datetime("updated_at", { mode: 'date' }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
},
  (table) => {
    return {
      nfCnaesId: primaryKey({ columns: [table.id], name: "nf_cnaes_id" }),
      idUnique: unique("id_UNIQUE").on(table.id),
    }
  });

export type NfCnae = InferSelectModel<typeof nfCnaes>;
export type NewNfCnae = InferInsertModel<typeof nfCnaes>;

export const nfImport = mysqlTable("nf_import", {
  id: int().autoincrement().notNull(),
  objectId: varchar({ length: 24 }).notNull(),
  numeroNf: varchar("numero_nf", { length: 45 }).notNull(),
  dataEmissao: datetime("data_emissao", { mode: 'date' }).notNull(),
  ufGerador: char("uf_gerador", { length: 2 }).notNull(),
  codigoMunicipio: varchar("codigo_municipio", { length: 45 }),
  razaoSocial: varchar("razao_social", { length: 450 }).notNull(),
  identificacaoPrestador: varchar("identificacao_prestador", { length: 14 }).notNull(),
  inscricaoEstadual: varchar("inscricao_estadual", { length: 14 }),
  inscricaoMunicipal: varchar("inscricao_municipal", { length: 45 }),
  discriminacaoServico: longtext("discriminacao_servico"),
  valorAliquota: float("valor_aliquota"),
  valorServico: float("valor_servico"),
  valorIss: float("valor_iss"),
  issRetido: float("iss_retido"),
  listaServico: varchar("lista_servico", { length: 45 }),
  municipioServico: varchar("municipio_servico", { length: 10 }),
  chave: varchar({ length: 90 }).notNull(),
  nfStorageTmp: varchar("nf_storage_tmp", { length: 150 }).notNull(),
  codigoVerificacao: varchar("codigo_verificacao", { length: 45 }).notNull(),
  createdAt: datetime("created_at", { mode: 'date' }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
  updatedAt: datetime("updated_at", { mode: 'date' }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
  deletedAt: datetime("deleted_at", { mode: 'date' }),
},
  (table) => {
    return {
      nfImportId: primaryKey({ columns: [table.id], name: "nf_import_id" }),
      idUnique: unique("id_UNIQUE").on(table.id),
      chaveUnique: unique("chave_UNIQUE").on(table.chave),
    }
  });

export type NfImport = InferSelectModel<typeof nfImport>;
export type NewNfImport = InferInsertModel<typeof nfImport>;

export const nfs = mysqlTable("nfs", {
  seqId: bigint({ mode: "number" }).autoincrement().notNull(),
  nfId: varchar({ length: 60 }).notNull(),
  transactionId: varchar({ length: 60 }).notNull().references(() => transactions.transactionId),
  squidId: varchar({ length: 60 }).notNull(),
  serialnumber: varchar({ length: 45 }),
  value: double(),
  emissionDate: date({ mode: 'date' }),
  urlStorage: text().notNull(),
  xmlUrlStorage: text(),
  backofficeApproved: tinyint().default(0).notNull(),
  parsedValue: double(),
  parsedEmissionDate: date({ mode: 'date' }),
  parsedSerialNumber: varchar({ length: 45 }),
  parsedCnae: varchar({ length: 45 }),
  issValue: float(),
  imported: varchar({ length: 90 }),
  createdAt: datetime({ mode: 'date' }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
  deletedAt: datetime({ mode: 'date' }),
},
  (table) => {
    return {
      transactionId: index("transactionId").on(table.transactionId),
      nfsSeqId: primaryKey({ columns: [table.seqId], name: "nfs_seqId" }),
    }
  });

export type Nf = InferSelectModel<typeof nfs>;
export type NewNf = InferInsertModel<typeof nfs>;

export const transactionBankAccounts = mysqlTable("transactionBankAccounts", {
  seqId: bigint({ mode: "number" }).autoincrement().notNull(),
  transactionId: varchar({ length: 60 }).notNull().references(() => transactions.transactionId),
  bankCode: varchar({ length: 20 }).notNull(),
  bankName: varchar({ length: 100 }).notNull(),
  bankAccountHolderName: varchar({ length: 150 }).notNull(),
  bankAccountHolderDocument: varchar({ length: 100 }).notNull(),
  bankAccountHolderTradingName: varchar({ length: 150 }),
  bankAccountRoutingNumber: varchar({ length: 20 }).notNull(),
  bankAccountNumber: bigint({ mode: "number" }).notNull(),
  bankAccountVerificationNumber: varchar({ length: 3 }),
  bankAccountType: varchar({ length: 20 }).default('checking').notNull(),
  bankAccountHolderType: varchar({ length: 2 }).default('PF').notNull(),
  paymentGatewayToken: varchar({ length: 60 }),
  createdAt: datetime({ mode: 'date' }).notNull(),
  updatedAt: datetime({ mode: 'date' }),
  deletedAt: datetime({ mode: 'date' }),
  paymentGatewayWithdrawTransactionId: varchar({ length: 60 }),
  paymentGatewayWithdrawAuthorizationCode: varchar({ length: 100 }),
},
  (table) => {
    return {
      transactionBankAccountsSeqId: primaryKey({ columns: [table.seqId], name: "transactionBankAccounts_seqId" }),
      transactionIdUnique: unique("transactionId_UNIQUE").on(table.transactionId),
    }
  });

export type TransactionBankAccount = InferSelectModel<typeof transactionBankAccounts>;
export type NewTransactionBankAccount = InferInsertModel<typeof transactionBankAccounts>;

export const transactionBeneficiaries = mysqlTable("transactionBeneficiaries", {
  seqId: bigint({ mode: "number" }).autoincrement().notNull(),
  transactionId: varchar({ length: 60 }).notNull().references(() => transactions.transactionId, { onDelete: "cascade", onUpdate: "cascade" }).references(() => transactions.transactionId),
  beneficiaryTradingName: varchar({ length: 150 }),
  beneficiaryFirstName: varchar({ length: 100 }),
  beneficiaryLastName: varchar({ length: 100 }),
  beneficiaryEmail: varchar({ length: 100 }).notNull(),
  beneficiaryDocumentNumber: varchar({ length: 20 }).notNull(),
  beneficiaryBirthDate: date({ mode: 'date' }),
  paymentGatewayId: varchar({ length: 60 }),
  createdAt: datetime({ mode: 'date' }).notNull(),
  updatedAt: datetime({ mode: 'date' }),
  deletedAt: datetime({ mode: 'date' }),
  recordEmployment: varchar({ length: 50 }),
  companyFileId: int(),
},
  (table) => {
    return {
      transactionBeneficiariesSeqId: primaryKey({ columns: [table.seqId], name: "transactionBeneficiaries_seqId" }),
      transactionIdUnique: unique("transactionId_UNIQUE").on(table.transactionId),
    }
  });

export type TransactionBeneficiary = InferSelectModel<typeof transactionBeneficiaries>;
export type NewTransactionBeneficiary = InferInsertModel<typeof transactionBeneficiaries>;

export const transactions = mysqlTable("transactions", {
  transactionId: varchar({ length: 60 }).notNull(),
  squidId: varchar({ length: 60 }),
  transactionStatus: varchar({ length: 50 }).default('pending').notNull(),
  paymentType: varchar({ length: 5 }),
  netValue: float().notNull(),
  grossValue: float().notNull(),
  inssAliquot: float(),
  inssValue: float(),
  irAliquot: float(),
  irDeduct: float(),
  irValue: float(),
  nfId: varchar({ length: 60 }),
  issAliquot: float(),
  issValue: float(),
  agent: tinyint().default(0),
  credit: float(),
  transactionStatusDetail: varchar({ length: 450 }),
  amount: float().notNull(),
  anticipationValue: float(),
  anticipationAliquot: float(),
  anticipationContractAccepted: varchar({ length: 450 }),
  anticipationReceiptUrl: varchar({ length: 450 }),
  anticipationIgnore: tinyint().default(0).notNull(),
  inOrOut: varchar({ length: 3 }).default('out').notNull(),
  currency: varchar({ length: 3 }).default('BRL').notNull(),
  transactionIdSource: varchar({ length: 60 }),
  transactionErrorDetail: varchar({ length: 200 }),
  paymentGatewayTransactionId: varchar({ length: 255 }),
  paymentGatewayReceiptUrl: varchar({ length: 450 }),
  paymentGatewayReceiptBankUrl: varchar({ length: 450 }),
  dueDate: date({ mode: 'date' }),
  transactionDate: datetime({ mode: 'date' }).notNull(),
  paidedAt: datetime({ mode: 'date' }),
  withdrawingDate: datetime({ mode: 'date' }),
  createdAt: datetime({ mode: 'date' }).notNull(),
  updatedAt: datetime({ mode: 'date' }),
  deletedAt: datetime({ mode: 'date' }),
},
  (table) => {
    return {
      transactionStatusIdx: index("transactions_transactionStatus_IDX").on(table.transactionStatus),
      deletedAtIdx: index("transactions_deletedAt_IDX").on(table.deletedAt),
      transactionsTransactionId: primaryKey({ columns: [table.transactionId], name: "transactions_transactionId" }),
    }
  });

export type Transaction = InferSelectModel<typeof transactions>;
export type NewTransaction = InferInsertModel<typeof transactions>;

export const transactionsHistory = mysqlTable("transactionsHistory", {
  transactionId: varchar({ length: 60 }).notNull(),
  squidId: varchar({ length: 60 }),
  transactionStatus: varchar({ length: 50 }).default('pending').notNull(),
  paymentType: varchar({ length: 5 }),
  netValue: float().notNull(),
  grossValue: float().notNull(),
  inssAliquot: float(),
  inssValue: float(),
  irAliquot: float(),
  inOrOut: varchar({ length: 3 }).default('out').notNull(),
  irDeduct: float(),
  irValue: float(),
  nfId: varchar({ length: 60 }),
  issAliquot: float(),
  issValue: float(),
  anticipationAliquot: float(),
  anticipationValue: float(),
  anticipationContractAccepted: varchar({ length: 450 }),
  // Warning: Can't parse blob from database
  // blobType: blob("paymentGatewayTransactionId"),
  currency: varchar({ length: 3 }).default('BRL').notNull(),
  amount: float().notNull(),
  transactionStatusDetail: varchar({ length: 450 }),
  transactionErrorDetail: varchar({ length: 200 }),
  transactionDate: datetime({ mode: 'date' }).notNull(),
  dueDate: date({ mode: 'date' }),
  createdAt: datetime({ mode: 'date' }).notNull(),
  updatedAt: datetime({ mode: 'date' }),
  paidedAt: datetime({ mode: 'date' }),
  withdrawingDate: datetime({ mode: 'date' }),
  deletedAt: datetime({ mode: 'date' }),
});

export const transactionsSchedule = mysqlTable("transactions_schedule", {
  id: int().autoincrement().notNull(),
  scheduleDate: date("schedule_date", { mode: 'date' }).notNull(),
  flowId: int("flow_id").notNull(),
  description: varchar({ length: 45 }),
  createdAt: datetime("created_at", { mode: 'date' }).default(sql`(CURRENT_TIMESTAMP)`),
  updatedAt: datetime("updated_at", { mode: 'date' }).default(sql`(CURRENT_TIMESTAMP)`),
},
  (table) => {
    return {
      transactionsScheduleId: primaryKey({ columns: [table.id], name: "transactions_schedule_id" }),
      idUnique: unique("id_UNIQUE").on(table.id),
    }
  });

export type TransactionsSchedule = InferSelectModel<typeof transactionsSchedule>;
export type NewTransactionsSchedule = InferInsertModel<typeof transactionsSchedule>

export const transfeeraRawDataCallback = mysqlTable("transfeeraRawDataCallback", {
  id: int({ unsigned: true }).autoincrement().notNull(),
  header: mediumtext().notNull(),
  payload: json(),
  validationTest: json(),
  createdAt: datetime("created_at", { mode: 'date' }).default(sql`(CURRENT_TIMESTAMP)`).notNull(),
},
  (table) => {
    return {
      transfeeraRawDataCallbackId: primaryKey({ columns: [table.id], name: "transfeeraRawDataCallback_id" }),
    }
  });

export type TransfeeraRawDataCallback = InferSelectModel<typeof transfeeraRawDataCallback>;
export type NewTransfeeraRawDataCallback = InferInsertModel<typeof transfeeraRawDataCallback>

export const webhooksLogs = mysqlTable("webhooks_logs", {
  id: int().autoincrement().notNull(),
  header: longtext(),
  payload: longtext(),
  querystring: varchar({ length: 255 }),
  service: varchar({ length: 45 }).notNull(),
  authentication: longtext(),
  createdAt: datetime("created_at", { mode: 'date' }).default(sql`(CURRENT_TIMESTAMP)`),
},
  (table) => {
    return {
      webhooksLogsId: primaryKey({ columns: [table.id], name: "webhooks_logs_id" }),
      idUnique: unique("id_UNIQUE").on(table.id),
    }
  });

export type WebhooksLog = InferSelectModel<typeof webhooksLogs>;
export type NewWebhooksLog = InferInsertModel<typeof webhooksLogs>;

export const dueDateTransactions = mysqlView("dueDate_transactions", {
  dueDate: int().default(0).notNull(),
  minCreatedAt: int("min_createdAt").default(0).notNull(),
  maxCreatedAt: int("max_createdAt").default(0).notNull(),
  countTotal: int("count_total").default(0).notNull(),
  sumTotal: int("sum_total").default(0).notNull(),
  countPaid: int("count_paid").default(0).notNull(),
  somaPaid: int("soma_paid").default(0).notNull(),
  countNew: int("count_new").default(0).notNull(),
  somaNew: int("soma_new").default(0).notNull(),
  countPending: int("count_pending").default(0).notNull(),
  somaPending: int("soma_pending").default(0).notNull(),
  countProcessing: int("count_processing").default(0).notNull(),
  somaProcessing: int("soma_processing").default(0).notNull(),
  countReadyToPay: int("count_readyToPay").default(0).notNull(),
  somaReadyToPay: int("soma_readyToPay").default(0).notNull(),
  countWithdrawing: int("count_withdrawing").default(0).notNull(),
  somaWithdrawing: int("soma_withdrawing").default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`dueDate\`,1 AS \`min_createdAt\`,1 AS \`max_createdAt\`,1 AS \`count_total\`,1 AS \`sum_total\`,1 AS \`count_paid\`,1 AS \`soma_paid\`,1 AS \`count_new\`,1 AS \`soma_new\`,1 AS \`count_pending\`,1 AS \`soma_pending\`,1 AS \`count_processing\`,1 AS \`soma_processing\`,1 AS \`count_readyToPay\`,1 AS \`soma_readyToPay\`,1 AS \`count_withdrawing\`,1 AS \`soma_withdrawing\``);


export const transactionConsolidated = mysqlView("transaction_consolidated", {
  transactionId: int().default(0).notNull(),
  recruitmentId: int().default(0).notNull(),
  campaignId: int().default(0).notNull(),
  campaignName: int().default(0).notNull(),
  squidId: int().default(0).notNull(),
  instagramUsername: int().default(0).notNull(),
  instagramProfileId: int().default(0).notNull(),
  youtubeChannel: int().default(0).notNull(),
  youtubeChannelId: int().default(0).notNull(),
  pinterestUsername: int().default(0).notNull(),
  pinterestProfileId: int().default(0).notNull(),
  createdAt: int().default(0).notNull(),
  updatedAt: int().default(0).notNull(),
  deletedAt: int().default(0).notNull(),
  paymentStatus: int().default(0).notNull(),
  amount: int().default(0).notNull(),
  dueDate: int().default(0).notNull(),
  transactionStatus: int().default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`transactionId\`,1 AS \`recruitmentId\`,1 AS \`campaignId\`,1 AS \`campaignName\`,1 AS \`squidId\`,1 AS \`instagramUsername\`,1 AS \`instagramProfileId\`,1 AS \`youtubeChannel\`,1 AS \`youtubeChannelId\`,1 AS \`pinterestUsername\`,1 AS \`pinterestProfileId\`,1 AS \`createdAt\`,1 AS \`updatedAt\`,1 AS \`deletedAt\`,1 AS \`paymentStatus\`,1 AS \`amount\`,1 AS \`dueDate\`,1 AS \`transactionStatus\``);

export const vwTransfeeraWebhookReturn = mysqlView("VW_TRANSFEERA_WEBHOOK_RETURN", {
  webhookId: int().default(0).notNull(),
  idTransfer: int().default(0).notNull(),
  transactionId: int().default(0).notNull(),
  status: int().default(0).notNull(),
  description: int().default(0).notNull(),
  savedAt: int().default(0).notNull(),
  tipo: int().default(0).notNull(),
  payload: int().default(0).notNull(),
  signature: int().default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`webhookId\`,1 AS \`idTransfer\`,1 AS \`transactionId\`,1 AS \`status\`,1 AS \`description\`,1 AS \`savedAt\`,1 AS \`tipo\`,1 AS \`payload\`,1 AS \`signature\``);

export const campaignsTransactions = mysqlView("campaigns_transactions", {
  campaignId: int().default(0).notNull(),
  campaignName: int().default(0).notNull(),
  minCreatedAt: int("min_createdAt").default(0).notNull(),
  maxCreatedAt: int("max_createdAt").default(0).notNull(),
  minDueDate: int("min_dueDate").default(0).notNull(),
  maxDueDate: int("max_dueDate").default(0).notNull(),
  countTotal: int("count_total").default(0).notNull(),
  sumTotal: int("sum_total").default(0).notNull(),
  countPaid: int("count_paid").default(0).notNull(),
  somaPaid: int("soma_paid").default(0).notNull(),
  countNew: int("count_new").default(0).notNull(),
  somaNew: int("soma_new").default(0).notNull(),
  countPending: int("count_pending").default(0).notNull(),
  somaPending: int("soma_pending").default(0).notNull(),
  countProcessing: int("count_processing").default(0).notNull(),
  somaProcessing: int("soma_processing").default(0).notNull(),
  countReadyToPay: int("count_readyToPay").default(0).notNull(),
  somaReadyToPay: int("soma_readyToPay").default(0).notNull(),
  countWithdrawing: int("count_withdrawing").default(0).notNull(),
  somaWithdrawing: int("soma_withdrawing").default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`campaignId\`,1 AS \`campaignName\`,1 AS \`min_createdAt\`,1 AS \`max_createdAt\`,1 AS \`min_dueDate\`,1 AS \`max_dueDate\`,1 AS \`count_total\`,1 AS \`sum_total\`,1 AS \`count_paid\`,1 AS \`soma_paid\`,1 AS \`count_new\`,1 AS \`soma_new\`,1 AS \`count_pending\`,1 AS \`soma_pending\`,1 AS \`count_processing\`,1 AS \`soma_processing\`,1 AS \`count_readyToPay\`,1 AS \`soma_readyToPay\`,1 AS \`count_withdrawing\`,1 AS \`soma_withdrawing\``);

export const anoMesDueDateTransactions = mysqlView("ano_mes_dueDate_transactions", {
  anoMes: int("ano_mes").default(0).notNull(),
  minCreatedAt: int("min_createdAt").default(0).notNull(),
  maxCreatedAt: int("max_createdAt").default(0).notNull(),
  minDueDate: int("min_dueDate").default(0).notNull(),
  maxDueDate: int("max_dueDate").default(0).notNull(),
  countTotal: int("count_total").default(0).notNull(),
  sumTotal: int("sum_total").default(0).notNull(),
  countPaid: int("count_paid").default(0).notNull(),
  somaPaid: int("soma_paid").default(0).notNull(),
  countNew: int("count_new").default(0).notNull(),
  somaNew: int("soma_new").default(0).notNull(),
  countPending: int("count_pending").default(0).notNull(),
  somaPending: int("soma_pending").default(0).notNull(),
  countProcessing: int("count_processing").default(0).notNull(),
  somaProcessing: int("soma_processing").default(0).notNull(),
  countReadyToPay: int("count_readyToPay").default(0).notNull(),
  somaReadyToPay: int("soma_readyToPay").default(0).notNull(),
  countWithdrawing: int("count_withdrawing").default(0).notNull(),
  somaWithdrawing: int("soma_withdrawing").default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`ano_mes\`,1 AS \`min_createdAt\`,1 AS \`max_createdAt\`,1 AS \`min_dueDate\`,1 AS \`max_dueDate\`,1 AS \`count_total\`,1 AS \`sum_total\`,1 AS \`count_paid\`,1 AS \`soma_paid\`,1 AS \`count_new\`,1 AS \`soma_new\`,1 AS \`count_pending\`,1 AS \`soma_pending\`,1 AS \`count_processing\`,1 AS \`soma_processing\`,1 AS \`count_readyToPay\`,1 AS \`soma_readyToPay\`,1 AS \`count_withdrawing\`,1 AS \`soma_withdrawing\``);

export const vwTransactionsWithoutInfluencerPayment = mysqlView("VW_TRANSACTIONS_WITHOUT_INFLUENCER_PAYMENT", {
  transactionId: int().default(0).notNull(),
  dueDate: int().default(0).notNull(),
  createdAt: int().default(0).notNull(),
  deletedAt: int().default(0).notNull(),
  squidId: int().default(0).notNull(),
  transactionStatus: int().default(0).notNull(),
  netValue: int().default(0).notNull(),
  grossValue: int().default(0).notNull(),
  paymentType: int().default(0).notNull(),
  transactionIdInfluencerPayments: int("transactionId.influencerPayments").default(0).notNull(),
  seqid: int().default(0).notNull(),
  responsiblePayment: int().default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`transactionId\`,1 AS \`dueDate\`,1 AS \`createdAt\`,1 AS \`deletedAt\`,1 AS \`squidId\`,1 AS \`transactionStatus\`,1 AS \`netValue\`,1 AS \`grossValue\`,1 AS \`paymentType\`,1 AS \`transactionId.influencerPayments\`,1 AS \`seqid\`,1 AS \`responsiblePayment\``);

export const influencersTotalTransactions = mysqlView("influencers_total_transactions", {
  squidId: int().default(0).notNull(),
  instagramUsername: int().default(0).notNull(),
  instagramProfileId: int().default(0).notNull(),
  youtubeChannel: int().default(0).notNull(),
  youtubeChannelId: int().default(0).notNull(),
  pinterestUsername: int().default(0).notNull(),
  pinterestProfileId: int().default(0).notNull(),
  minCreatedAt: int("min_createdAt").default(0).notNull(),
  maxCreatedAt: int("max_createdAt").default(0).notNull(),
  minDueDate: int("min_dueDate").default(0).notNull(),
  maxDueDate: int("max_dueDate").default(0).notNull(),
  countTotal: int("count_total").default(0).notNull(),
  sumTotal: int("sum_total").default(0).notNull(),
  countPaid: int("count_paid").default(0).notNull(),
  somaPaid: int("soma_paid").default(0).notNull(),
  countNew: int("count_new").default(0).notNull(),
  somaNew: int("soma_new").default(0).notNull(),
  countPending: int("count_pending").default(0).notNull(),
  somaPending: int("soma_pending").default(0).notNull(),
  countProcessing: int("count_processing").default(0).notNull(),
  somaProcessing: int("soma_processing").default(0).notNull(),
  countReadyToPay: int("count_readyToPay").default(0).notNull(),
  somaReadyToPay: int("soma_readyToPay").default(0).notNull(),
  countWithdrawing: int("count_withdrawing").default(0).notNull(),
  somaWithdrawing: int("soma_withdrawing").default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`squidId\`,1 AS \`instagramUsername\`,1 AS \`instagramProfileId\`,1 AS \`youtubeChannel\`,1 AS \`youtubeChannelId\`,1 AS \`pinterestUsername\`,1 AS \`pinterestProfileId\`,1 AS \`min_createdAt\`,1 AS \`max_createdAt\`,1 AS \`min_dueDate\`,1 AS \`max_dueDate\`,1 AS \`count_total\`,1 AS \`sum_total\`,1 AS \`count_paid\`,1 AS \`soma_paid\`,1 AS \`count_new\`,1 AS \`soma_new\`,1 AS \`count_pending\`,1 AS \`soma_pending\`,1 AS \`count_processing\`,1 AS \`soma_processing\`,1 AS \`count_readyToPay\`,1 AS \`soma_readyToPay\`,1 AS \`count_withdrawing\`,1 AS \`soma_withdrawing\``);

export const pagamentosForaDoPrazo = mysqlView("pagamentos_fora_do_prazo", {
  seqId: int().default(0).notNull(),
  transactionId: int().default(0).notNull(),
  recruitmentId: int().default(0).notNull(),
  campaignId: int().default(0).notNull(),
  campaignName: int().default(0).notNull(),
  "date(ipCampaignEndDate)": int("date(IP.campaignEndDate)").default(0).notNull(),
  squidId: int().default(0).notNull(),
  instagramUsername: int().default(0).notNull(),
  youtubeChannel: int().default(0).notNull(),
  amount: int().default(0).notNull(),
  "date(ipCreatedAt)": int("date(IP.createdAt)").default(0).notNull(),
  dueDate: int().default(0).notNull(),
  transactionStatus: int().default(0).notNull(),
  paymentType: int().default(0).notNull(),
  "date(trPaidedAt)": int("date(TR.paidedAt)").default(0).notNull(),
  nameExp16: int("Name_exp_16").default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`seqId\`,1 AS \`transactionId\`,1 AS \`recruitmentId\`,1 AS \`campaignId\`,1 AS \`campaignName\`,1 AS \`date(IP.campaignEndDate)\`,1 AS \`squidId\`,1 AS \`instagramUsername\`,1 AS \`youtubeChannel\`,1 AS \`amount\`,1 AS \`date(IP.createdAt)\`,1 AS \`dueDate\`,1 AS \`transactionStatus\`,1 AS \`paymentType\`,1 AS \`date(TR.paidedAt)\`,1 AS \`Name_exp_16\``);

export const vmTransactionsReadyToPayInCurrentMonth = mysqlView("VM_TRANSACTIONS_READY_TO_PAY_IN_CURRENT_MONTH", {
  squidId: int().default(0).notNull(),
  verificationStatus: int().default(0).notNull(),
  verificationId: int().default(0).notNull(),
  transactionId: int().default(0).notNull(),
  dueDate: int().default(0).notNull(),
  createdAt: int().default(0).notNull(),
  netValue: int().default(0).notNull(),
  transactionStatus: int().default(0).notNull(),
  paidedAt: int().default(0).notNull(),
  withdrawingDate: int().default(0).notNull(),
  verificatedAt: int().default(0).notNull(),
  updatedAt: int().default(0).notNull(),
  bankAccountType: int().default(0).notNull(),
  profileId: int().default(0).notNull(),
  holderName: int().default(0).notNull(),
  holderDocument: int().default(0).notNull(),
  bankCode: int().default(0).notNull(),
  bankAccountAgency: int().default(0).notNull(),
  bankAccountNumber: int().default(0).notNull(),
  bankAccountDigit: int().default(0).notNull(),
}).algorithm("undefined").sqlSecurity("definer").as(sql`select 1 AS \`squidId\`,1 AS \`verificationStatus\`,1 AS \`verificationId\`,1 AS \`transactionId\`,1 AS \`dueDate\`,1 AS \`createdAt\`,1 AS \`netValue\`,1 AS \`transactionStatus\`,1 AS \`paidedAt\`,1 AS \`withdrawingDate\`,1 AS \`verificatedAt\`,1 AS \`updatedAt\`,1 AS \`bankAccountType\`,1 AS \`profileId\`,1 AS \`holderName\`,1 AS \`holderDocument\`,1 AS \`bankCode\`,1 AS \`bankAccountAgency\`,1 AS \`bankAccountNumber\`,1 AS \`bankAccountDigit\``);