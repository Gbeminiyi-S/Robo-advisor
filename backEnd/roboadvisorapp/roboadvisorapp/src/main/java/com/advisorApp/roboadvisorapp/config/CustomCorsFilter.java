//package com.advisorApp.roboadvisorapp.config;
//
//import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
//import org.springframework.web.filter.CorsFilter;
//import org.springframework.web.cors.CorsConfiguration;
//
//public class CustomCorsFilter extends CorsFilter {
//
//    public CustomCorsFilter() {
//        super(configurationSource());
//    }
//
//    private static UrlBasedCorsConfigurationSource configurationSource() {
//        CorsConfiguration config = new CorsConfiguration();
//        config.addAllowedOrigin("http://localhost:4200");
//        config.addAllowedMethod("*"); // Allow all methods
//        config.addAllowedHeader("*"); // Allow all headers
//
//        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//        source.registerCorsConfiguration("/questionnaires/**", config);
//        return source;
//    }
//}
