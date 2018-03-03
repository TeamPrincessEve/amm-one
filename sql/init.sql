DROP TABLE account_log;
DROP TABLE account;
DROP TABLE account_type;


CREATE TABLE account_type (
    account_type_id SERIAL PRIMARY KEY,
    name            VARCHAR(100)
);

CREATE TABLE account (
    account_id      SERIAL PRIMARY KEY,
    user_name       VARCHAR(50),
    user_password   VARCHAR(50),
    name            VARCHAR(100),
    description     VARCHAR(250),
    birth_date      DATE,
    address         VARCHAR(250),
    contact_info    VARCHAR(250),
    weblink         VARCHAR(250),
    mobile_phone    VARCHAR(50),
    account_type_id INTEGER REFERENCES account_type (account_type_id)
);

CREATE TABLE account_log (
    account_log_id      SERIAL PRIMARY KEY,
    account_log_type    VARCHAR(1),  --C R U D
    event               VARCHAR(50),
    event_desc          VARCHAR(250),
    event_time          TIMESTAMP,
    account_id          INTEGER REFERENCES account (account_id)
);

