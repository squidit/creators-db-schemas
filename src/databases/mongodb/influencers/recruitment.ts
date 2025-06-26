import { model, Schema, Types } from "mongoose";


enum RecruitmentStatus {
    added = 'added',
    approved = 'approved',
    customerApproved = 'customerApproved',
    customerReproved = 'customerReproved',
    inContact = 'inContact',
    influencerRefused = 'influencerRefused',
    preApproved = 'preApproved',
    recruited = 'recruited',
    removed = 'removed',
    reproved = 'reproved',
    suggested = 'suggested'
}

enum SocialNetworks {
    instagram = 'instagram',
    youtube = 'youtube',
    tiktok = 'tiktok',
    twitter = 'twitter'
}

const cpm = {
    posts: Number,
    stories: Number,
    reels: Number
  }
  
  const quantity = {
    posts: Number,
    stories: Number,
    reels: Number
  }
  
  const prices = {
    cpm,
    quantity,
    total: Number
  }

export class Recruitment {
    _id!: Types.ObjectId
    updatedAt?: Date
    idProfile!: string
    squidId?: string
    socialNetwork!: SocialNetworks
    idCampaign!: Types.ObjectId
    recruitedAt?: Date
    createdAt?: Date
    isBookmarked?: boolean
    opApproved?: boolean
    status!: RecruitmentStatus
    inputMode?: string
    inputCampaignId?: Types.ObjectId | null
    username!: string
    picture?: string
    prices?:typeof prices
    fullname?: string | null
    lastHistory?: {
        message?: string
        rawMessage?: {
            before?: string
            after?: string
            motivation?: string
        }
    }
    manualAdded?: boolean
    sawWarning?: boolean
    dateSawWarning?: Date
    sawSurvey?: boolean
    dateSawSurvey?: Date
    agent?: boolean
    customPayment?: number
    fromaddrecruitment?: boolean
    orderId?: string
    hasContract?: boolean
    contractStatus?: string
    scope?: {
        campaignContentProduction: boolean
        requiredContent?: {
            posts: number
            stories: number
            reels: number
            contents: number
        }
        suggestedContent?: {
            posts: number
            stories: number
            reels: number
            contents: number
        }
        publishedOnSocialMedia: boolean
        contentBoost: boolean
        eventParticipation: boolean
        brandExclusivity: boolean
        imageRightsMonths: number | null
        paymentOnCampaign: boolean
        payments: {
            paymentType: string,
            value: number,
            description?: string,
            term?: number,
            agentUsername?: string,
            isTransferNote?: boolean,
            opportunitiesSelected?: string[]
        }
    }
    tcmCampaignCode?: string
    tcmCampaignLink?: string
}

export const RecruitmentSchema = new Schema<Recruitment>({
    idProfile: {
      type: String,
      required: true
    },
    squidId: {
      type: String,
      required: true
    },
    manualAdded: {
      type: Boolean,
      default: false
    },
    socialNetwork: {
      type: String,
      enum: Object.values(SocialNetworks),
      default: SocialNetworks.instagram,
      required: true
    },
    idCampaign: {
      type: Schema.Types.ObjectId,
      required: true
    },
    recruitedAt: Date,
    isBookmarked: {
      type: Boolean,
      default: false
    },
    opApproved: Boolean,
    status: {
      type: String,
      enum: Object.values(RecruitmentStatus),
      required: true
    },
    inputMode: {
      type: String,
      default: 'automatic'
    },
    inputCampaignId: {
      type: Schema.Types.ObjectId,
      default: null
    },
    username: {
      type: String,
      required: true
    },
    picture: String,
    fullname: {
      type: String,
      default: null
    },
    lastHistory: Schema.Types.Mixed,
    sawWarning: {
      type: Boolean,
      default: false
    },
    dateSawWarning: Date,
    sawSurvey: {
      type: Boolean,
      default: false
    },
    dateSawSurvey: Date,
    agent: {
      type: Boolean,
      required: false
    },
    customPayment: Number,
    orderId: String,
    prices,
    hasContract: {
      type: Boolean,
      required: false
    },
    contractStatus: {
      type: String,
      default: 'absent'
    },
    scope: {
      type: new Schema({
        campaignContentProduction: {
          type: Boolean,
          default: true
        },
        requiredContent: {
          posts: {
            type: Number,
            required: false,
            default: 0
          },
          stories: {
            type: Number,
            required: false,
            default: 0
          },
          reels: {
            type: Number,
            required: false,
            default: 0
          },
          contents: {
            type: Number,
            required: false,
            default: 0
          }
        },
        suggestedContent: {
          posts: {
            type: Number,
            required: false,
            default: 0
          },
          stories: {
            type: Number,
            required: false,
            default: 0
          },
          reels: {
            type: Number,
            required: false,
            default: 0
          },
          contents: {
            type: Number,
            required: false,
            default: 0
          }
        },
        publishedOnSocialMedia: {
          type: Boolean,
          default: true
        },
        contentBoost: {
          type: Boolean,
          default: true
        },
        eventParticipation: {
          type: Boolean,
          default: false
        },
        brandExclusivity: {
          type: Boolean,
          default: false
        },
        imageRightsMonths: {
          type: Number,
          default: null
        },
        paymentOnCampaign: {
          type: Boolean,
          default: true
        },
        payments: [
          {
            _id: false,
            paymentType: String,
            value: {
              type: Number,
              required: false
            },
            description: {
              type: String,
              required: false
            },
            term: {
              type: Number,
              required: false
            },
            agentUsername: {
              type: String,
              required: false
            },
            isTransferNote: {
              type: Boolean,
              required: false
            },
            opportunitiesSelected: {
              type: [String],
              required: false
            }
          }
        ]
      }),
      required: false
    },
    tcmCampaignCode: {
      type: String,
      required: false
    },
    tcmCampaignLink: {
      type: String,
      required: false
    }
  }, { timestamps:  { createdAt: true, updatedAt: true } })

export const RecruitmentModel = model('recruitment', RecruitmentSchema)