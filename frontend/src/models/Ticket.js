class Ticket {
  constructor(data) {
    this.id = data.id;
    this.url = data.url;
    this.externalId = data.external_id;
    this.via = data.via;
    this.createdAt = data.created_at;
    this.updatedAt = data.updated_at;
    this.type = data.type;
    this.subject = data.subject;
    this.rawSubject = data.raw_subject;
    this.description = data.description;
    this.priority = data.priority;
    this.status = data.status;
    this.recipient = data.recipient;
    this.requesterId = data.requester_id;
    this.submitterId = data.submitter_id;
    this.assigneeId = data.assignee_id;
    this.organizationId = data.organization_id;
    this.groupId = data.group_id;
    this.collaboratorIds = data.collaborator_ids;
    this.followerIds = data.follower_ids;
    this.emailCcIds = data.email_cc_ids;
    this.forumTopicId = data.forum_topic_id;
    this.problemId = data.problem_id;
    this.hasIncidents = data.has_incidents;
    this.isPublic = data.is_public;
    this.dueAt = data.due_at;
    this.tags = data.tags;
    this.customFields = data.custom_fields;
    this.forumTopicId = data.forum_topic_id;
    this.problemId = data.problem_id;
    this.hasIncidents = data.has_incidents;
    this.isPublic = data.is_public;
    this.dueAt = data.due_at;
    this.tags = data.tags;
    this.customFields = data.custom_fields;
    this.satisfactionRating = data.satisfaction_rating;
    this.sharingAgreementIds = data.sharing_agreement_ids;
    this.customStatusId = data.custom_status_id;
    this.fields = data.fields;
    this.followupIds = data.followup_ids;
    this.ticketFormId = data.ticket_form_id;
    this.brandId = data.brand_id;
    this.allowChannelback = data.allow_channelback;
    this.allowAttachments = data.allow_attachments;
    this.fromMessagingChannel = data.from_messaging_channel;
  }

  getStatusColor() {
    switch (this.status) {
      case 'open':
        return 'green';
      case 'closed':
        return 'red';
      default:
        return 'gray';
    }
  }

  getFormattedCreatedAt() {
    return new Date(this.createdAt).toLocaleString();
  }

  getFormattedUpdatedAt() {
    return new Date(this.updatedAt).toLocaleString();
  }
}

export default Ticket;
