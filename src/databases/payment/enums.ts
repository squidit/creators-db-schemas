import { mysqlEnum } from 'drizzle-orm/mysql-core'

export const transactionStatusEnum = mysqlEnum(
    'transaction_status',
     [
        'analyze',
        'blocked',
        'canceled',
        'failed',
        'new',
        'paid',
        'paidByFinance',
        'pending',
        'readyToPay',
        'retry',
        'review',
        'unblocked',
        'withdrawing'    
     ]
)

export const paymentTypeEnum = mysqlEnum(
   'payment_type',
   ['nf', 'rpa']
)