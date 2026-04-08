import { LightningElement, api, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';

import ACCOUNT_TIER from '@salesforce/schema/Account.Account_Tier__c';
import ACCOUNT_HEALTH from '@salesforce/schema/Account.Account_Health_Status__c';
import LAST_EXEC_ENGAGEMENT from '@salesforce/schema/Account.Last_Executive_Engagement__c';

const FIELDS = [ACCOUNT_TIER, ACCOUNT_HEALTH, LAST_EXEC_ENGAGEMENT];

export default class AccountHealthCard extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    account;

    get accountTier() {
        return getFieldValue(this.account.data, ACCOUNT_TIER);
    }

    get accountHealth() {
        return getFieldValue(this.account.data, ACCOUNT_HEALTH);
    }

    get lastEngagement() {
        return getFieldValue(this.account.data, LAST_EXEC_ENGAGEMENT);
    }

    get healthVariant() {
        const health = this.accountHealth;
        if (health === 'Healthy') return 'success';
        if (health === 'At Risk') return 'warning';
        if (health === 'Critical') return 'error';
        return 'base';
    }

    get tierVariant() {
        const tier = this.accountTier;
        if (tier === 'Enterprise') return 'inverse';
        if (tier === 'Mid-Market') return 'brand';
        if (tier === 'SMB') return 'base';
        return 'base';
    }

    get showEngagementWarning() {
        if (!this.lastEngagement) return false;

        const engagementDate = new Date(this.lastEngagement);
        const today = new Date();
        const daysDiff = Math.floor((today - engagementDate) / (1000 * 60 * 60 * 24));

        return daysDiff > 30;
    }

    get formattedEngagementDate() {
        if (!this.lastEngagement) return 'No engagement recorded';

        const engagementDate = new Date(this.lastEngagement);
        return engagementDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }

    get hasData() {
        return this.account.data;
    }
}
