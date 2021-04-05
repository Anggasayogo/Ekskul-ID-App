TIME="10"
TELEGRAM_USER_ID="-1001319828801"
TELEGRAM_BOT_TOKEN="1736760969:AAEd4z6cZMnthvfkO5TnRGCXejZg3X3JSOg"
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
URL="https://api.telegram.org/bot$TELEGRAM_BOT_TOKEN/sendMessage"

TEXT="Deploy Status App : $1%@A%0A$echo($GITHUB_WORKFLOW) %0URL= $(echo$GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID) %0Aactor= $(echo $GITHUB_ACTOR)"

curl -s --max-time $TIME -d "chat_id=$TELEGRAM_USER_ID&disable_web_page_preview=$TEXT" $URL >/dev/null

