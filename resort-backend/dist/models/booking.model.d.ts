import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    name: string;
    date: string;
    email: string;
    phone: string;
    time: string;
    guests: number;
    roomType: string;
} & mongoose.DefaultTimestampProps, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    date: string;
    email: string;
    phone: string;
    time: string;
    guests: number;
    roomType: string;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    name: string;
    date: string;
    email: string;
    phone: string;
    time: string;
    guests: number;
    roomType: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    name: string;
    date: string;
    email: string;
    phone: string;
    time: string;
    guests: number;
    roomType: string;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, {
    name: string;
    date: string;
    email: string;
    phone: string;
    time: string;
    guests: number;
    roomType: string;
} & mongoose.DefaultTimestampProps, {
    id: string;
}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    name: string;
    date: string;
    email: string;
    phone: string;
    time: string;
    guests: number;
    roomType: string;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        name: string;
        date: string;
        email: string;
        phone: string;
        time: string;
        guests: number;
        roomType: string;
    } & mongoose.DefaultTimestampProps, {
        id: string;
    }, mongoose.ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        name: string;
        date: string;
        email: string;
        phone: string;
        time: string;
        guests: number;
        roomType: string;
    } & mongoose.DefaultTimestampProps & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    name: string;
    date: string;
    email: string;
    phone: string;
    time: string;
    guests: number;
    roomType: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    name: string;
    date: string;
    email: string;
    phone: string;
    time: string;
    guests: number;
    roomType: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default _default;
//# sourceMappingURL=booking.model.d.ts.map