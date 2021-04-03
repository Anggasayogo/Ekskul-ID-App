import * as Sentry from "@sentry/react-native";

export default () => {
    Sentry.init({
        dsn: "https://990078df0bb34743948ae2139ab8646e@o515033.ingest.sentry.io/5701698",
        debug: false,
    });
}