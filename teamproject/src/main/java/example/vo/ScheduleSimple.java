package example.vo;

import java.io.Serializable;

public class ScheduleSimple implements Serializable {
	private static final long serialVersionUID = 1L;


	protected int groupscNo;
	protected String title;

	public int getGroupscNo() {
		return groupscNo;
	}
	public void setGroupscNo(int groupscNo) {
		this.groupscNo = groupscNo;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	
	@Override
	public String toString() {
		return "ScheduleSimple [groupscNo=" + groupscNo + ", title=" + title + "]";
	}

	


}
