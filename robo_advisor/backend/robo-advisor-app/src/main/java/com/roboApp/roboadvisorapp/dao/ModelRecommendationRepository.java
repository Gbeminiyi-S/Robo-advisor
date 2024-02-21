package com.roboApp.roboadvisorapp.dao;

import com.roboApp.roboadvisorapp.entity.RoboRecommendation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ModelRecommendationRepository extends JpaRepository<RoboRecommendation, Long> {

}
