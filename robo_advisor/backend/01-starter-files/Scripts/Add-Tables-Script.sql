use `advice_request_repository`;
drop table if exists `robo_advice`;
drop table if exists `advice_requests`;
/*!40101 set @saved_cs_client = @@character_set_client */;
/*!40101 set character_set_client = utf8 */;
create table `advice_requests` (
	`id` BIGINT(50) not null AUTO_INCREMENT,
	`first_name` VARCHAR(200) not null,
    `last_name` varchar(200) not null,
    `email` VARCHAR(200) not null,
    `age` int(3) not null,
    `investment_purpose` varchar(200) not null,
    `investment_horizon` int(3) not null,
    `risk_tolerance` varchar(20) not null,
    `location` varchar(50) not null,
    `date_created` datetime not null,
    primary key (`id`)
) engine=InnoDB AUTO_INCREMENT=1 default charset = latin1;
/*!40101 set @saved_cs_client = @saved_cs_client */;


create table `robo_advice` (
	`id` BIGINT(50) not null AUTO_INCREMENT,
	`user_name` VARCHAR(200) not null,
    `user_email` VARCHAR(200) not null,
    `recommendation` json not null,
    `request_id` bigint(50) not null,
    `date_created` datetime not null,
    primary key (`id`)
) engine=InnoDB AUTO_INCREMENT=1 default charset = latin1;
/*!40101 set @saved_cs_client = @saved_cs_client */;


-- ALTER TABLE `robo_advice`
-- ADD CONSTRAINT `fk_request_id`
-- FOREIGN KEY (`request_id`)
-- REFERENCES `advice_requests`(`id`)
-- ON DELETE CASCADE;


insert into `advice_requests` (`id`, `first_name`, `last_name`, `email`, `age`, `investment_purpose`, `investment_horizon`, `risk_tolerance`, `location`, `date_created`)
values (1, "Bayo", "Jose", "b.jose@email.com", 34, "retirement", 10, "moderate", "USA", now()),
(2, "Fash", "George", "f.george@email.com", 29, "capital gains", 10, "high", "UK", now()),
(3, "Bosun", "Adam", "b.adam@email.com", 30, "retirement", 10, "low", "Nigeria", now()),
(4, "Flora", "Jackson", "f.jackson@email.com", 31, "retirement", 10, "moderate", "Germany", now());


insert into `robo_advice` (`id`, `user_name`, `user_email`, `recommendation`, `request_id`, `date_created`)
values (1, "Bayo", "b.jose@email.com", "{}", 1, now()),
(2, "Bosun", "b.adam@email.com", "{}", 3, now()),
(3, "Flora", "f.jackson@email.com", "{}", 4, now());