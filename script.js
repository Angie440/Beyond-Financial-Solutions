function openModal(id) {
    document.getElementById(id).style.display = "block";
  }
  
  function closeModal(id) {
    document.getElementById(id).style.display = "none";
  }

  <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxyz12345/pubhtml?widget=true&amp;headers=false" width="100%" height="500"></iframe>
  
  <!-- Modal for Project 1 -->
  <div id="retailModal" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal('retailModal')">&times;</span>
      <h2>Retail Stock Control Workbook</h2>
  
      <!-- Embedded Google Sheets workbook -->
      <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQxyz12345/pubhtml?widget=true&amp;headers=false" width="100%" height="500"></iframe>
  
      <!-- Download button still works -->
      <a href="retail-stock.xlsx" class="button" download>Download Workbook</a>
  
      <!-- Report section -->
      <div class="report">
        <h3>Report</h3>
        <p>Findings: Reduced stock-outs by 18%, cut deadstocks by 12%, improved repeat purchases by 9%.</p>
      </div>
    </div>
  </div>
  