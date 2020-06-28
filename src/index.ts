import "reflect-metadata";
import { createConnection } from "typeorm";
import { Employee } from "./entity/Employee";

createConnection().then(async connection => {
    const employee = new Employee();
    employee.firstName = "David";
    employee.lastName = "Berry";
    employee.telephone = "+1 456 789 1111";

    /* Address */
    employee.address.country = "United States";
    employee.address.state = "California";
    employee.address.city = "San Francisco";
    employee.address.zip = 95000;

    /* save object into database */
    await connection.manager.save(employee);
    console.log("Loading users from the database...");

    /* get list of Employee object */
    const words = await connection.manager.find(Employee);

    /* console out the list of Employee */
    console.log("Loaded words: ", words);
    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
