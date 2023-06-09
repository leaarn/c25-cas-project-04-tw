import { Knex } from "knex";

export const gymLocationTable = "gym_location";
export const gymCenterTable = "gym_center";
export const interestTable = "interest";
export const userTable = "users";
export const goalsTable = "goal";
export const targetGoalsTable = "target";
export const usersInterestTable = "users_interest";
export const usersMatchingTable = "users_matching";
export const ptTable = "pt_profile";
export const ptCertificateTable = "pt_certificate";
export const chatroomTable = "chatroom";
export const userGymCenterTable = "user_gym_center";
export const userGymLocationTable = "user_gym_location";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable(gymLocationTable, (table) => {
    table.increments();
    table.string("gym_location").notNullable();
  });

  await knex.schema.createTable(gymCenterTable, (table) => {
    table.increments();
    table.string("gym_center");
  });

  await knex.schema.createTable(interestTable, (table) => {
    table.increments();
    table.string("name").notNullable();
  });

  await knex.schema.createTable(userTable, (table) => {
    table.increments();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.string("username").notNullable();
    table.string("profile_pic").notNullable();
    table.date("birthday").notNullable();
    table.string("gender").notNullable();
    table.string("bio").notNullable();
    table.integer("height").notNullable();
    table.integer("weight").notNullable();
    table.string("gym_level").notNullable();
    table.boolean("has_membership").notNullable();
    table.boolean("is_pt").defaultTo("false");
    table.timestamps(false, true);
  });

  await knex.schema.createTable(goalsTable, (table) => {
    table.increments();
    table.integer("users_id").unsigned();
    table.foreign("users_id").references("users.id");
    table.integer("target_weight");
    table.timestamps(false, true);
  });

  await knex.schema.createTable(targetGoalsTable, (table) => {
    table.increments();
    table.integer("goal_id").unsigned();
    table.foreign("goal_id").references("goal.id");
    table.string("name").notNullable();
    table.boolean("is_completed").notNullable();
    table.timestamps(false, true);
  });
  await knex.schema.createTable(usersInterestTable, (table) => {
    table.increments();
    table.integer("users_id").unsigned();
    table.foreign("users_id").references("users.id");
    table.integer("interest_id").unsigned();
    table.foreign("interest_id").references("interest.id");
    table.timestamps(false, true);
  });

  await knex.schema.createTable(usersMatchingTable, (table) => {
    table.increments();
    table.integer("users_id").unsigned();
    table.foreign("users_id").references("users.id");
    table.integer("matched_users_id").unsigned();
    table.foreign("matched_users_id").references("users.id");
    table.string("status").defaultTo("requested");
    table.timestamps(false, true);
  });

  await knex.schema.createTable(ptTable, (table) => {
    table.increments();
    table.integer("users_id").unsigned();
    table.foreign("users_id").references("users.id");
    table.integer("hourly_rate");
    table.timestamps(false, true);
  });
  await knex.schema.createTable(ptCertificateTable, (table) => {
    table.increments();
    table.integer("pt_profile_id").unsigned();
    table.foreign("pt_profile_id").references("pt_profile.id");
    table.string("certification");
    table.timestamps(false, true);
  });

  await knex.schema.createTable(chatroomTable, (table) => {
    table.increments();
    table.integer("sender_id").unsigned();
    table.foreign("sender_id").references("users.id");
    table.integer("receiver_id").unsigned();
    table.foreign("receiver_id").references("users.id");
    table.string("message").notNullable();
    table.timestamps(false, true);
  });

  await knex.schema.createTable(userGymCenterTable, (table) => {
    table.increments();
    table.integer("users_id").unsigned();
    table.foreign("users_id").references("users.id");
    table.integer("gym_center_id").unsigned();
    table.foreign("gym_center_id").references("gym_center.id");
    table.timestamps(false, true);
  });

  await knex.schema.createTable(userGymLocationTable, (table) => {
    table.increments();
    table.integer("users_id").unsigned();
    table.foreign("users_id").references("users.id");
    table.integer("gym_location_id").unsigned();
    table.foreign("gym_location_id").references("gym_location.id");
    table.timestamps(false, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable(userGymLocationTable);
  await knex.schema.dropTable(userGymCenterTable);
  await knex.schema.dropTable(chatroomTable);
  await knex.schema.dropTable(ptCertificateTable);
  await knex.schema.dropTable(ptTable);
  await knex.schema.dropTable(usersMatchingTable);
  await knex.schema.dropTable(usersInterestTable);
  await knex.schema.dropTable(targetGoalsTable);
  await knex.schema.dropTable(goalsTable);
  await knex.schema.dropTable(userTable);
  await knex.schema.dropTable(interestTable);
  await knex.schema.dropTable(gymCenterTable);
  await knex.schema.dropTable(gymLocationTable);
}
