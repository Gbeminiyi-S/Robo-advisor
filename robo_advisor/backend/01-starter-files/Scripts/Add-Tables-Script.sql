use `request_directory`;
drop table if exists `user_inputs`;
/*!40101 set @saved_cs_client = @@character_set_client */;
/*!40101 set character_set_client = utf8 */;
create table `user_inputs` (
	`id` BIGINT(50) not null AUTO_INCREMENT,
	`name` VARCHAR(200) not null,
    `email` VARCHAR(200) not null,
    `age` int(3) not null,
    `investment_horizon` char(20) not null,
    `risk_tolerance` char(20) not null,
    `investment_purpose` char(50) not null,
    `location` varchar(50) not null,
    primary key (`id`)
) engine=InnoDB AUTO_INCREMENT=1 default charset = latin1;
/*!40101 set @saved_cs_client = @saved_cs_client */;



create table `model_advice` (
	`id` BIGINT(50) not null AUTO_INCREMENT,
	`user_name` VARCHAR(200) not null,
    `user_email` VARCHAR(200) not null,
    `recommendation` varchar(1000) not null,
    `request_id` bigint(50) not null,
    primary key (`id`)
) engine=InnoDB AUTO_INCREMENT=1 default charset = latin1;
/*!40101 set @saved_cs_client = @saved_cs_client */;


ALTER TABLE `model_advice`
ADD CONSTRAINT `fk_request_id`
FOREIGN KEY (`request_id`)
REFERENCES `user_inputs`(`id`)
ON DELETE CASCADE;
