//package com.advisorApp.roboadvisorapp.config;
//
//import com.advisorApp.roboadvisorapp.entity.Questionnaire;
//import com.advisorApp.roboadvisorapp.entity.Advice;
//import jakarta.persistence.EntityManager;
//import jakarta.persistence.metamodel.EntityType;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
//import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
//import org.springframework.http.HttpMethod;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//
//import java.util.ArrayList;
//import java.util.List;
//import java.util.Set;
//
//@Configuration
//public class RestConfig implements RepositoryRestConfigurer {
//
//    private EntityManager entityManager;
//
//    @Autowired
//    public RestConfig(EntityManager theEntityManager) {
//        entityManager = theEntityManager;
//    }
//
//    @Override
//    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
//
//        RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config, cors);
//
//        HttpMethod[] theUnsupportedActions = {
////                HttpMethod.PUT,
////                HttpMethod.DELETE
//        };
//
//        // disable HTTP methods for AdviceRequest: put, post and delete
//        config.getExposureConfiguration()
//                .forDomainType(Questionnaire.class)
//                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
//                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));
//
//
//        // disable HTTP methods for RoboAdvice: put, post and delete
//        config.getExposureConfiguration()
//                .forDomainType(Advice.class)
//                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
//                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));
//
//
//        // call an internal helper method
//        exposeIds(config);
//    }
//
//    private void exposeIds(RepositoryRestConfiguration config) {
//
//        //Expose Ids of each entity from the rest api  response
//
//        // get a list of all entity classes from the entity manager
//        Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();
//
//        // create an array of the entity types
//        List<Class> entityClasses = new ArrayList<>();
//
//        // get the entity types for the entities
//        for(EntityType tempEntityType : entities) {
//            entityClasses.add(tempEntityType.getJavaType());
//        }
//
//        // expose the entity ids for the array of entity/domain types
//        Class[] domainTypes = entityClasses.toArray(new Class[0]);
//        config.exposeIdsFor(domainTypes);
//
//    }
//}
