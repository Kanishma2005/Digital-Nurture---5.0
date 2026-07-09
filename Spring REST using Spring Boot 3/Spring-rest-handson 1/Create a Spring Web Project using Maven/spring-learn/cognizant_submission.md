# Cognizant Submission Report: Hands-On 1

## Objective
The objective of this hands-on is to create a complete Maven-based Spring Boot project from scratch using Spring Boot 3 and Java 17. The project should have dependencies for Spring Web and Spring Boot DevTools. A custom logging configuration must be implemented to initialize a logger in the main entry class, printing `"Inside main"` at startup. The project should compile and run successfully in VS Code.

## Project Details
- **Project Name:** `spring-learn`
- **Base Package:** `com.cognizant.springlearn`
- **Java Version:** 17 (Target)
- **Spring Boot Version:** 3.3.1
- **Key Dependencies:**
  - `spring-boot-starter-web` (Spring Web)
  - `spring-boot-devtools` (DevTools)
  - `spring-boot-starter-test` (Test Suite)

## Output

### 1. Project Directory Structure
```
c:\Users\LENOVO\Desktop\Cognizantt\Spring REST using Spring Boot 3
└── spring-learn
    ├── pom.xml
    ├── cognizant_submission.md
    ├── src
    │   ├── main
    │   │   ├── java
    │   │   │   └── com
    │   │   │       └── cognizant
    │   │   │           └── springlearn
    │   │   │               └── SpringLearnApplication.java
    │   │   └── resources
    │   │       └── application.properties
    │   └── test
    │       └── java
    │           └── com
    │               └── cognizant
    │                   └── springlearn
    │                       └── SpringLearnApplicationTests.java
```

### 2. Compilation and Test Output (Maven Build Success)
```
[INFO] Scanning for projects...
[INFO] 
[INFO] ---------------------< com.cognizant:spring-learn >---------------------
[INFO] Building spring-learn 0.0.1-SNAPSHOT
[INFO]   from pom.xml
[INFO] --------------------------------[ jar ]---------------------------------
...
[INFO] Tests run: 1, Failures: 0, Errors: 0, Skipped: 0
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
```

### 3. Application Execution Logs (Showing "Inside main")
```
[INFO] Attaching agents: []
17:52:33.281 [main] INFO com.cognizant.springlearn.SpringLearnApplication -- Inside main
17:52:33.490 [restartedMain] INFO com.cognizant.springlearn.SpringLearnApplication -- Inside main

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/

 :: Spring Boot ::                (v3.3.1)

2026-07-07T17:52:33.979+05:30  INFO 14768 --- [spring-learn] [  restartedMain] c.c.springlearn.SpringLearnApplication   : Starting SpringLearnApplication using Java 21.0.11 with PID 14768 (C:\Users\LENOVO\Desktop\Cognizantt\Spring REST using Spring Boot 3\spring-learn\target\classes started by LENOVO in C:\Users\LENOVO\Desktop\Cognizantt\Spring REST using Spring Boot 3\spring-learn)
2026-07-07T17:52:33.982+05:30  INFO 14768 --- [spring-learn] [  restartedMain] c.c.springlearn.SpringLearnApplication   : No active profile set, falling back to 1 default profile: "default"
2026-07-07T17:52:34.086+05:30  INFO 14768 --- [spring-learn] [  restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : Devtools property defaults active! Set 'spring.devtools.add-properties' to 'false' to disable
2026-07-07T17:52:34.087+05:30  INFO 14768 --- [spring-learn] [  restartedMain] .e.DevToolsPropertyDefaultsPostProcessor : For additional web related logging consider setting the 'logging.level.web' property to 'DEBUG'
2026-07-07T17:52:35.339+05:30  INFO 14768 --- [spring-learn] [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat initialized with port 8080 (http)
2026-07-07T17:52:35.360+05:30  INFO 14768 --- [spring-learn] [  restartedMain] o.apache.catalina.core.StandardService   : Starting service [Tomcat]
2026-07-07T17:52:35.360+05:30  INFO 14768 --- [spring-learn] [  restartedMain] o.apache.catalina.core.StandardEngine    : Starting Servlet engine: [Apache Tomcat/10.1.25]
2026-07-07T17:52:35.429+05:30  INFO 14768 --- [spring-learn] [  restartedMain] o.a.c.c.C.[Tomcat].[localhost].[/]       : Initializing Spring embedded WebApplicationContext
2026-07-07T17:52:35.431+05:30  INFO 14768 --- [spring-learn] [  restartedMain] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1341 ms
2026-07-07T17:52:35.843+05:30  INFO 14768 --- [spring-learn] [  restartedMain] o.s.b.d.a.OptionalLiveReloadServer       : LiveReload server is running on port 35729
2026-07-07T17:52:35.894+05:30  INFO 14768 --- [spring-learn] [  restartedMain] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port 8080 (http) with context path '/'
2026-07-07T17:52:35.905+05:30  INFO 14768 --- [spring-learn] [  restartedMain] c.c.springlearn.SpringLearnApplication   : Started SpringLearnApplication in 2.408 seconds (process running for 2.868)
```

## Conclusion
The Hands-On 1 project `spring-learn` has been successfully initialized, configured, and tested.
- The project targets Java 17 and runs successfully under Spring Boot 3.3.1.
- Logger statement `"Inside main"` is printed upon application startup.
- The standard test case passes cleanly.
- The application configuration is clean, complete, and ready for REST development in VS Code.
