# 公司網站樣稿（本地預覽 + Cloudflare Pages）

## 本地預覽

直接雙擊 `index.html`，或使用 VS Code Live Server。

## Cloudflare Pages 發佈

1. 把本資料夾推到 GitHub 倉庫。
2. Cloudflare Dashboard -> Workers & Pages -> Create -> Pages -> Connect to Git。
3. 選取倉庫，Build command 留空，Output directory 設為 `/`。
4. 發佈後在 `Custom domains` 綁定你的 `.com`、`.com.hk`。

## 三域名建議

- 主域名：主品牌官網（建議其中一個 `.com`）
- 區域域名：`.com.hk` 可做香港市場入口
- 保護域名：另一個 `.com` 設為 301 永久轉址到主域名

## 下一步

把你的公司資訊貼給 Copilot：

- 公司簡介
- 服務清單
- 聯絡方式
- 想要的語氣（專業 / 高端 / 親和）

我會直接替你改成可上線版本。
