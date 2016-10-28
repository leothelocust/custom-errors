"use strict";
function MissingRequestObject(message = {}) {
    this.name = "MissingRequestObject";
    this.message = (typeof message === 'string') ? message : (message.message || '');
    this.display_message = (typeof message === 'string') ? null : (message.display_message || null);
    this.status = 400;
    let err = new Error();
    this.stack = err.stack;
    this.prototype = Object.create(Error.prototype);
}
exports.MissingRequestObject = MissingRequestObject;
function InvalidToken(message = {}) {
    this.name = "InvalidToken";
    this.message = (typeof message === 'string') ? message : (message.message || '');
    this.display_message = (typeof message === 'string') ? null : (message.display_message || null);
    this.status = 401;
    let err = new Error();
    this.stack = err.stack;
    this.prototype = Object.create(Error.prototype);
}
exports.InvalidToken = InvalidToken;
function TokenNotFound(message = {}) {
    this.name = "TokenNotFound";
    this.message = (typeof message === 'string') ? message : (message.message || '');
    this.display_message = (typeof message === 'string') ? null : (message.display_message || null);
    this.status = 404;
    let err = new Error();
    this.stack = err.stack;
    this.prototype = Object.create(Error.prototype);
}
exports.TokenNotFound = TokenNotFound;
function TokenExpired(message = { message: "You must re-authenticate." }) {
    this.name = "TokenExpired";
    this.message = (typeof message === 'string') ? message : (message.message || '');
    this.display_message = (typeof message === 'string') ? null : (message.display_message || null);
    this.status = 401;
    let err = new Error();
    this.stack = err.stack;
    this.prototype = Object.create(Error.prototype);
}
exports.TokenExpired = TokenExpired;
function UserNotFound(message = {}) {
    this.name = "UserNotFound";
    this.message = (typeof message === 'string') ? message : (message.message || '');
    this.display_message = (typeof message === 'string') ? null : (message.display_message || null);
    this.status = 404;
    let err = new Error();
    this.stack = err.stack;
    this.prototype = Object.create(Error.prototype);
}
exports.UserNotFound = UserNotFound;
function ClientNotFound(message = {}) {
    this.name = "ClientNotFound";
    this.message = (typeof message === 'string') ? message : (message.message || '');
    this.display_message = (typeof message === 'string') ? null : (message.display_message || null);
    this.status = 404;
    let err = new Error();
    this.stack = err.stack;
    this.prototype = Object.create(Error.prototype);
}
exports.ClientNotFound = ClientNotFound;
function Unauthorized(message = {}) {
    this.name = "Unauthorized";
    this.message = (typeof message === 'string') ? message : (message.message || '');
    this.display_message = (typeof message === 'string') ? null : (message.display_message || null);
    this.status = 401;
    let err = new Error();
    this.stack = err.stack;
    this.prototype = Object.create(Error.prototype);
}
exports.Unauthorized = Unauthorized;
function Validation(message = {}) {
    this.name = "Validation Failed";
    this.message = (typeof message === 'string') ? message : (message.message || '');
    this.display_message = (typeof message === 'string') ? null : (message.display_message || null);
    this.status = 400;
    let err = new Error();
    this.stack = err.stack;
    this.prototype = Object.create(Error.prototype);
}
exports.Validation = Validation;
function Unknown(message = {}) {
    this.name = "Unknown";
    this.message = (typeof message === 'string') ? message : (message.message || '');
    this.display_message = (typeof message === 'string') ? null : (message.display_message || null);
    this.status = 400;
    let err = new Error();
    this.stack = err.stack;
    this.prototype = Object.create(Error.prototype);
}
exports.Unknown = Unknown;
