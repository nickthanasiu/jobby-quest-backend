const corsConfig = {
    credentials: true,
    origin: (origin, cb) => {
        // allow requests with no origin
        // (like mobile apps or curl requests)
        if (!origin) return cb(null, true);

        const allowedOrigins = [
            'http://localhost:3000',
        ];

        if (allowedOrigins.indexOf(origin) === -1) {
            const errMsg =
                'The CORS policy for this site does not ' +
                'allow access from the specified origin...';
            
            return cb(new Error(errMsg), false);
        }

        // By default, if origin is allowed, return the following
        return cb(null, true);
    },
};

module.exports = corsConfig;