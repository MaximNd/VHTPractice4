package com.google.training.helloworld;

public class HelloClass {
    public String message = "Hello World";
    public String period = "";
    public HelloClass () {
    }

    public HelloClass (String name) {
        this.message = "Hello " + name + "!";
    }
    
    public HelloClass (String name, String period) {
        this.message = "Hello " + name + "!";
        this.period = period;
    }
    public HelloClass (String name, String secondName, String thirdName) {
        this.message = "Hello " + name + " " + secondName + " " + thirdName + "!";
    }

    public String getMessage() {
        return message;
    }
}
