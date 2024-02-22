package com.roboApp.roboadvisorapp.repository;

import com.roboApp.roboadvisorapp.entity.RoboRecommendation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoboRecommendationRepository extends JpaRepository<RoboRecommendation, Long> {
}
