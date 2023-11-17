using UnityEngine;

public class PopupController : MonoBehaviour
{
    public GameObject[] popupPanels; // Assign this array in the inspector

    void Start()
    {
        // Initially hide all popups
        foreach (var panel in popupPanels)
        {
            if (panel != null)
                panel.SetActive(false);
        }
    }

    public void TogglePopup()
    {
        // Toggle the active state of all popup panels
        foreach (var panel in popupPanels)
        {
            if (panel != null)
                panel.SetActive(!panel.activeSelf);
        }
    }
}
