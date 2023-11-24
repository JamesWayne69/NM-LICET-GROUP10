FROM openjdk:19
WORKDIR /app
COPY Common/target/Common-0.0.1-SNAPSHOT.jar /app/Common-0.0.1-SNAPSHOT.jar
COPY REST/target/REST-0.0.1-SNAPSHOT.jar /app/REST-0.0.1-SNAPSHOT.jar
EXPOSE 8080
CMD ["java", "-jar", "REST-0.0.1-SNAPSHOT.jar"]