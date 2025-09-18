1. pick your own CODE_DOWNLOAD_DIRECTORY
2. clone repo to CODE_DOWNLOAD_DIRECTORY
3. cd CODE_DOWNLOAD_DIRECTORY

**Rest**
* Build and run server
    * cd rest-server
    * npm install
    * npm run dev
* Test
    * http://localhost:3000/test 
    * http://localhost:3000/team/members
    * http://localhost:3000/team/members/avery

**MCP**
* Build
    * cd mcp-server
    * npm install
    * npm run build
* Configure
    * Install Claude Desktop
    * Add new file vi `~/Library/Application\ Support/Claude/claude_desktop_config.json`
    * Update the content of the added file as follow 
    ```
    {
      "mcpServers": {
        "team_server": {
          "command": "node",
          "args": ["{$CODE_DOWNLOAD_DIRECTORY}/rest-to-mcp/mcp-server/build/index.js"]
        }
      }
    }
    ```
* Test
  * Claude Desktop app
  * Check that your tools are registered
  * Play and enjoy!

