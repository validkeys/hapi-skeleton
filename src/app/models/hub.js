export default function(waterline) {
  return {
    identity:     'hubs',
    tablename:    'hubs',
    connection:   'presslyDb',
    migrate:      'safe',
    autoCreatedAt: false,
    autoUpdatedAt: false,
    attributes: {
      id:                 { type: "integer" },
      created_at:         { type: "datetime" },
      updated_at:         { type: "datetime" },
      uid:                { type: "string" },
      name:               { type: "string" },
      collaborator_count: { type: "integer" },
      logo_url:           { type: "string" },
      account_id:         { type: "integer" }
    }
  };
};