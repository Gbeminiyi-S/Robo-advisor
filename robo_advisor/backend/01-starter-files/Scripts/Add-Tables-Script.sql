use `advice_request_directory`;
drop table if exists `robo_recommendation`;
drop table if exists `advice_request`;
/*!40101 set @saved_cs_client = @@character_set_client */;
/*!40101 set character_set_client = utf8 */;
create table `advice_request` (
	`id` BIGINT(50) not null AUTO_INCREMENT,
	`name` VARCHAR(200) not null,
    `email` VARCHAR(200) not null,
    `age` int(3) not null,
    `investment_horizon` varchar(20) not null,
    `risk_tolerance` varchar(20) not null,
    `investment_purpose` varchar(50) not null,
    `location` varchar(50) not null,
    primary key (`id`)
) engine=InnoDB AUTO_INCREMENT=1 default charset = latin1;
/*!40101 set @saved_cs_client = @saved_cs_client */;


create table `robo_recommendation` (
	`id` BIGINT(50) not null AUTO_INCREMENT,
	`user_name` VARCHAR(200) not null,
    `user_email` VARCHAR(200) not null,
    `recommendation` varchar(1000) not null,
    `request_id` bigint(50) not null,
    primary key (`id`)
) engine=InnoDB AUTO_INCREMENT=1 default charset = latin1;
/*!40101 set @saved_cs_client = @saved_cs_client */;


ALTER TABLE `robo_recommendation`
ADD CONSTRAINT `fk_request_id`
FOREIGN KEY (`request_id`)
REFERENCES `advice_request`(`id`)
ON DELETE CASCADE;


insert into `advice_request` (`id`, `name`, `email`, `age`, `investment_horizon`, `risk_tolerance`, `investment_purpose`, `location`)
values (1, "Bayo Jose", "b.jose@email.com", 34, "Long term", "moderate", "retirement", "USA");


insert into `robo_recommendation` (`id`, `user_name`, `user_email`, `recommendation`, `request_id`)
values (1, "Bayo Jose", "b.jose@email.com", "Invest in blue chip stocks for the long term. Growth is assured", 1);