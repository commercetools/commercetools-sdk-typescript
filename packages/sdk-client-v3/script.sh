# # client_credentials flow
# curl ${CTP_AUTH_URL}/oauth/token -X POST \
#     --basic --user "${CTP_CLIENT_ID}:${CTP_CLIENT_SECRET}" \
#     -d "grant_type=client_credentials&scope=manage_project:${CTP_PROJECT_KEY}"

# # password_flow
# curl ${CTP_AUTH_URL}/oauth/${CTP_PROJECT_KEY}/customers/token -X POST \
#     --basic --user "${CTP_CLIENT_ID}:${CTP_CLIENT_SECRET}" \
#     -d "grant_type=password&username=willy.wonka@commercetools.com&password=******&scope=manage_project:${CTP_PROJECT_KEY}"