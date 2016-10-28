export function MissingRequestObject(message:any = {}) {
    this.name = "MissingRequestObject";
    this.message = (typeof message === 'string') ? message : (message.message || '');
    this.display_message = (typeof message === 'string') ? null : (message.display_message || null);
    this.status = 400;
    let err: any = new Error()
    this.stack = err.stack;
    this.prototype = Object.create(Error.prototype)
}

export function InvalidToken(message:any = {}) {
    this.name = "InvalidToken";
    this.message = (typeof message === 'string') ? message : (message.message || '');
    this.display_message = (typeof message === 'string') ? null : (message.display_message || null);
    this.status = 401;
    let err: any = new Error()
    this.stack = err.stack;
    this.prototype = Object.create(Error.prototype)
}
export function TokenNotFound(message:any = {}) {
    this.name = "TokenNotFound";
    this.message = (typeof message === 'string') ? message : (message.message || '');
    this.display_message = (typeof message === 'string') ? null : (message.display_message || null);
    this.status = 404;
    let err: any = new Error()
    this.stack = err.stack;
    this.prototype = Object.create(Error.prototype)
}
export function TokenExpired(message:any = {message:"You must re-authenticate."}) {
    this.name = "TokenExpired";
    this.message = (typeof message === 'string') ? message : (message.message || '');
    this.display_message = (typeof message === 'string') ? null : (message.display_message || null);
    this.status = 401;
    let err: any = new Error()
    this.stack = err.stack;
    this.prototype = Object.create(Error.prototype)
}
export function UserNotFound(message:any = {}) {
    this.name = "UserNotFound";
    this.message = (typeof message === 'string') ? message : (message.message || '');
    this.display_message = (typeof message === 'string') ? null : (message.display_message || null);
    this.status = 404;
    let err: any = new Error()
    this.stack = err.stack;
    this.prototype = Object.create(Error.prototype)
}
export function ClientNotFound(message:any = {}) {
    this.name = "ClientNotFound";
    this.message = (typeof message === 'string') ? message : (message.message || '');
    this.display_message = (typeof message === 'string') ? null : (message.display_message || null);
    this.status = 404;
    let err: any = new Error()
    this.stack = err.stack;
    this.prototype = Object.create(Error.prototype)
}
export function Unauthorized(message:any = {}) {
    this.name = "Unauthorized";
    this.message = (typeof message === 'string') ? message : (message.message || '');
    this.display_message = (typeof message === 'string') ? null : (message.display_message || null);
    this.status = 401;
    let err: any = new Error()
    this.stack = err.stack;
    this.prototype = Object.create(Error.prototype)
}
export function Validation(message:any = {}) {
    this.name = "Validation Failed";
    this.message = (typeof message === 'string') ? message : (message.message || '');
    this.display_message = (typeof message === 'string') ? null : (message.display_message || null);
    this.status = 400;
    let err: any = new Error()
    this.stack = err.stack;
    this.prototype = Object.create(Error.prototype)
}
export function Unknown(message:any = {}) {
    this.name = "Unknown";
    this.message = (typeof message === 'string') ? message : (message.message || '');
    this.display_message = (typeof message === 'string') ? null : (message.display_message || null);
    this.status = 400;
    let err: any = new Error()
    this.stack = err.stack;
    this.prototype = Object.create(Error.prototype)
}

