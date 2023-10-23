import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";



@Injectable()
export class SessionSerializer extends PassportSerializer{
    serializeUser(user: any, done:(err: Error, user: any)=>void) {
        done(null, {id: user.id});
    }

    deserializeUser(payload: any, done: (err: Error, payload: string)=> void) {
        // const user = this.usersService.findById(payload.id)
        done(null, payload)
    }
}