1. pick your own CODE_DOWNLOAD_DIRECTORY
2. clone repo to CODE_DOWNLOAD_DIRECTORY
3. cd CODE_DOWNLOAD_DIRECTORY

**Rest**
* Build and run server
    * cd rest-server
    * npm install
    * npm run dev
* Test on browser
    * http://localhost:3000/test 
    * http://localhost:3000/team/members
    * http://localhost:3000/team/members/{first_name_of_any_member}

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

<img width="377" height="337" alt="Screenshot 2025-09-18 at 2 30 30 PM" src="https://github.com/user-attachments/assets/cecae041-e30a-4380-95d2-712dfdad41c9" />

<img width="376" height="233" alt="Screenshot 2025-09-18 at 2 30 24 PM" src="https://github.com/user-attachments/assets/9525cfd8-f89e-4fbb-813d-0b28d2b0ef8d" />

  * Play and enjoy!
    * Tell me something about my team.
    * Who can I engage from my team to solve video encoding issue?
    * Who from my team can do deep dive on Architecture? 

